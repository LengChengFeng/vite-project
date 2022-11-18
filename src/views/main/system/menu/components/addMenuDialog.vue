<template>
  <el-dialog v-model="dialogVisible" title="新增菜单" width="50%">
    <el-form label-width="100px" :rules="rules" ref="formRef" :model="menuInfo">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="上级菜单">
            <el-tree-select v-model="menuInfo.menu" :data="data" check-strictly :render-after-expand="false" style="width: 100%" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名称" prop="menuName">
            <el-input v-model="menuInfo.menuName" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单类型">
            <el-radio-group v-model="menuInfo.menuType">
              <template v-for="item in menuTypeList" :key="item.value">
                <el-radio-button :label="item.value">{{ item.name }}</el-radio-button>
              </template>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="" prop="path">
            <template #label>
              <span class="title">
                路由地址
                <el-tooltip class="box-item" content="访问的路由地址以及对应的组件地址" placement="top-start">
                  <el-icon>
                    <InfoFilled />
                  </el-icon>
                </el-tooltip>
              </span>
            </template>
            <el-input v-model="menuInfo.path" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="">
            <template #label>
              <span class="title">
                权限标识
                <el-tooltip class="box-item" placement="top-start">
                  <template #content>
                    Controller 方法上的权限字符(仅在类型为菜单或者按钮有作用)，<br />如：@PreAuthorize(`@ss.hasPermission('system:user:list'))
                  </template>
                  <el-icon>
                    <InfoFilled />
                  </el-icon>
                </el-tooltip>
              </span>
            </template>
            <el-input v-model="menuInfo.permission" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单图标" prop="icon">
            <div class="iconText">
              <el-input class="test" placeholder="选择图标" disabled v-model="menuInfo.icon" />
              <el-button type="primary" link @click="selectIcons">选择图标 </el-button>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="显示排序">
            <el-input-number :min="1" :max="10000" v-model="menuInfo.sort" style="width: 100%" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单状态">
            <el-radio-group v-model="menuInfo.status">
              <template v-for="item in menuStatusList" :key="item.value">
                <el-radio-button :label="item.value">{{ item.name }}</el-radio-button>
              </template>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="显示状态">
            <el-radio-group v-model="menuInfo.show">
              <template v-for="item in menuShowList" :key="item.value">
                <el-radio-button :label="item.value">{{ item.name }}</el-radio-button>
              </template>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="缓存状态">
            <el-radio-group v-model="menuInfo.keepalive">
              <template v-for="item in menuKeepList" :key="item.value">
                <el-radio-button :label="item.value">{{ item.name }}</el-radio-button>
              </template>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="info" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleEnsure"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
  <iconDrawer ref="iconDrawerRef" @handleSelectIcon="handleIcon" />
</template>

<script setup lang="ts">
import iconDrawer from './iconDrawer.vue'
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { menuTypeList, menuStatusList, menuKeepList, menuShowList, data, rules } from './columnData'
const iconDrawerRef = ref<InstanceType<typeof iconDrawer>>()
const formRef = ref<FormInstance>()
const dialogVisible = ref(false)

const menuInfo = reactive({
  menu: '',
  menuName: '',
  menuType: 1,
  path: '',
  permission: '',
  icon: '',
  sort: 0,
  status: 1,
  show: 1,
  keepalive: 1
})

const selectIcons = () => {
  iconDrawerRef?.value?.openIconDrawer()
}

const handleIcon = (iconPath: string) => {
  menuInfo.icon = iconPath
}

const openDialog = () => {
  dialogVisible.value = true
}

const handleEnsure = () => {
  formRef.value?.validate((valid: boolean) => {
    if (!!valid) {
      ElMessage.success('菜单创建成功~')
      dialogVisible.value = false
    }
  })
}

defineExpose({
  openDialog
})
</script>

<style scoped lang="scss">
.iconText {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .text {
    flex-grow: 1;
  }
}
</style>
