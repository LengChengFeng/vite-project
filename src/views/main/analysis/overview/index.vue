<template>
  <div class="my-page">
    <MyForm v-bind="formItemConfig" @handleSearch="handleSearch" @handle-reset="handleReset" />
    <MyTable
      v-bind="tableConfig"
      :tableData="pageData.data"
      @handleView="handleView"
      @handle-edit="handleEdit"
      @handle-add="handleAdd"
      v-model:page="pageData.pageInfo"
      :getData="getData"
      :search-params="pageData.searchParams"
    >
      <template #createDate="scoped"> {{ utcFormat(scoped.row.createAt) }}</template>
      <template #updateDate="scoped"> {{ utcFormat(scoped.row.createAt) }}</template>
    </MyTable>
    <el-dialog v-model="visible" title="编辑" width="40%" draggable destroy-on-close :close-on-click-modal="false">
      <div class="content">
        <MyForm v-bind="dialogFormItemConfig" :value="pageData.editData" :type="type" ref="formRef" />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleEnsure">确认</el-button>
          <el-button type="info" @click="visible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import MyForm from '@/components/AppForm/index.vue'
import MyTable from '@/components/myTable/index.vue'
import { useSearch } from '@/hooks/useSearch'
import { formItemConfig, tableConfig, dialogFormItemConfig } from './config'
import { utcFormat } from '@/utils/format'
import Api from '@/services/main/index'
const { getRoleList } = Api

const formRef = ref<InstanceType<typeof MyForm>>()
const visible = ref(false)
const type = ref('create')
const pageData = reactive({
  data: [],
  searchParams: {},
  pageInfo: {
    offset: 0,
    size: 10,
    total: 0
  },
  editData: {},
  createData: {}
})
//获取数据
const getData = (params?: {}) => {
  const page = { offset: pageData.pageInfo.offset, size: pageData.pageInfo.size }
  let obj = { ...page, ...params }
  getRoleList(obj).then((res) => {
    pageData.data = res.data.list
    pageData.pageInfo.total = res.data.totalCount
  })
}
getData()
//重置和查询
const { handleSearch, handleReset } = useSearch(getData)
//查看
const handleView = (row: any) => {
  pageData.editData = row
  visible.value = true
  type.value = 'view'
}
//添加
const handleAdd = () => {
  type.value = 'create'
  pageData.editData = {}
  visible.value = true
}
//编辑
const handleEdit = (row: any) => {
  type.value = 'edit'
  pageData.editData = row
  visible.value = true
}
//确认
const handleEnsure = () => {
  const isPass = formRef.value?.verifyField()
  isPass?.then((res) => {
    if (!!res) {
      pageData.createData = formRef.value?.obj
    }
  })
}
</script>

<style lang="scss" scoped></style>
