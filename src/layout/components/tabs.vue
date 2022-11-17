<template>
  <div class="tabs">
    <el-tabs type="card" class="demo-tabs" v-model="activeName" @tab-change="handleTabChange" @tab-remove="handleRemoveTab">
      <el-tab-pane
        :closable="TabsList.length > 1"
        v-for="item in systemStore.TabsList"
        :key="item.name"
        :label="item.name"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useRouterStore } from '@/store/modules/system-store'

withDefaults(
  defineProps<{
    activeName: string
  }>(),
  {
    activeName: ''
  }
)
const systemStore = useRouterStore()
const router = useRouter()
const { TabsList } = storeToRefs(systemStore)
//tabs改变
const handleTabChange = (path: string) => {
  router.push(path)
}
//删除
interface ITabsType {
  name: string
  path: string
}
const handleRemoveTab = (path: string) => {
  const index = TabsList.value.findIndex((item: ITabsType) => item.path === path)
  TabsList.value.splice(index, 1)
  let jumpRouter: any = []
  if (index === 0) {
    jumpRouter = TabsList.value[TabsList.value.length - 1]
  } else {
    jumpRouter = TabsList.value[index - 1]
  }
  router.push(jumpRouter.path)
}
</script>

<style lang="scss" scoped>
:deep() .el-tabs__header {
  border-bottom: none;
  margin: 0;
  padding: 10px 0 0 0;
  .el-tabs__nav {
    border: none;
    .el-tabs__item {
      border: none;
    }
    .el-tabs__item:hover {
      background: $bg-color-isActive;
    }
    .el-tabs__item.is-active {
      background: $bg-color-isActive;
    }
  }
}
</style>
