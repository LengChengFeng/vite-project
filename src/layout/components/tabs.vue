<template>
  <div class="tabs">
    <div class="tab-list">
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

    <div class="more">
      <el-dropdown size="small">
        <el-button size="small" type="primary"> 操作 </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleAll">关闭所有</el-dropdown-item>
            <el-dropdown-item @click="handleCloseOther">关闭其他</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
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
const route = useRoute()
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

const handleAll = () => {
  systemStore.TabsList = [{ name: '核心技术', path: '/main/analysis/overview' }]
  router.push('/main/analysis/overview')
}

const handleCloseOther = () => {
  const result = TabsList.value.find((item: ITabsType) => item.path === route.path)
  systemStore.TabsList = [
    { name: '核心技术', path: '/main/analysis/overview' },
    { name: result?.name!, path: result?.path! }
  ]
  console.log(route.path)
  console.log(result)
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
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  .tab-list {
    flex: 1;
  }
  .more {
    width: 50px;
  }
}
</style>
