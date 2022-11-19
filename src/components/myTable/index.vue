<template>
  <div class="my-table">
    <div class="header">
      <div class="left">
        <el-button icon="Upload" type="success" v-if="getPermission(permission?.edit) && showExportBtn">导出 </el-button>
      </div>
      <div class="right">
        <el-button icon="Edit" type="primary" v-if="getPermission(permission?.add) && showCreateBtn" @click="add">新建 </el-button>
        <slot slot name=" more"> </slot>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" :border="isBorder" :stripe="isStripe" @selection-change="handleSelect" :style="{ width: tableWidth }">
        <el-table-column type="selection" width="55" align="center" v-if="showSection" />
        <el-table-column type="index" width="80" label="序号" align="center" v-if="showIndex" />
        <template v-for="item in tableItem">
          <template v-if="item.prop == 'custom'">
            <el-table-column #default="scoped" v-bind="item">
              <slot :name="item.slotName" v-bind="scoped"></slot>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column v-bind="item" />
          </template>
        </template>
        <el-table-column label="操作" v-if="showOperate" v-bind="operateColumnConfig">
          <template #default="{ row, $index }">
            <div class="opts">
              <el-button link type="primary" icon="Edit" v-if="getPermission(permission?.edit) && showEditBtn" @click="edit(row, $index)">
                编辑
              </el-button>
              <el-button link type="primary" icon="View" v-if="getPermission(permission?.view) && showViewBtn" @click="view(row)">
                查看
              </el-button>
              <el-button link type="danger" icon="Delete" v-if="getPermission(permission?.del) && showDelBtn" @click="del(row)"
                >删除
              </el-button>
              <slot name="otherOpt"></slot>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination" v-if="showPagination">
      <el-pagination
        :page-sizes="[10, 20, 30, 40]"
        :current-page="page.offset"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['handleEdit', 'handleView', 'handleDel', 'update:page', 'handleAdd'])
const permissions = ['edit', 'view', 'del', 'add']
function getPermission(key: string) {
  return permissions.some((item) => item === key)
}

interface tableItemConfig {
  label: string
  prop: string
  align?: 'left' | 'center' | 'right'
  slotName?: string
  width?: string | number
  minWidth?: string | number
  fixed?: 'left' | 'right'
}

const props = withDefaults(
  defineProps<{
    tableData: any[]
    page?: any
    getData?: any
    isBorder?: boolean
    isStripe?: boolean
    tableItem: tableItemConfig[]
    tableWidth?: string
    permission: any
    //按钮和列的显示
    showEditBtn?: boolean
    showViewBtn?: boolean
    showDelBtn?: boolean
    showOperate?: boolean
    showSection?: boolean
    showIndex?: boolean
    showPagination?: boolean
    showExportBtn?: boolean
    showCreateBtn?: boolean
    operateColumnConfig?: any
  }>(),
  {
    isBorder: true,
    isStripe: true,
    permission: {},
    tableWidth: '100%',
    showCreateBtn: true,
    showEditBtn: true,
    showViewBtn: true,
    showDelBtn: true,
    showOperate: true,
    showSection: false,
    showIndex: false,
    showPagination: true,
    showExportBtn: true,
    operateColumnConfig: () => ({
      width: '200',
      align: 'center',
      fixed: 'right'
    })
  }
)

const add = () => {
  emit('handleAdd')
}

const edit = (params: any, index: number) => {
  emit('handleEdit', params)
}

const view = (params: any) => {
  emit('handleView', params)
}

const del = (params: any) => {
  emit('handleDel', params)
}

const handleSelect = (data: any) => {
  console.log(data)
}
const handleSizeChange = (size: number) => {
  props.page.size = size
  props.getData()
}

const handleCurrentChange = (currentPage: number) => {
  props.page.offset = currentPage
  props.getData()
}
</script>

<style>
.my-table {
  padding: 20px;
  border-top: 20px solid #f5f7f8;
}

.opts {
  display: flex;
}

.header {
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
}

.pagination {
  height: 70px;
  display: flex;
  justify-content: right;
}
</style>
