<template>
  <div class="header-page">
    <div class="mes">
      <div class="icons fc">
        <div class="fold icon fc">
          <el-icon v-if="isExpand" @click="isFold(false)"><Expand /></el-icon>
          <el-icon v-else @click="isFold(true)"><Fold /></el-icon>
        </div>
        <div class="bread-crumb">
          <template v-for="item in breadcrumbItem" :key="item.url">
            <el-breadcrumb-item>
              {{ item.name }}
              <el-icon><DArrowRight /></el-icon>
            </el-breadcrumb-item>
          </template>
        </div>
      </div>
      <div class="info">
        <UserInfo />
      </div>
    </div>
    <div class="tabs">
      <Tabs :active-name="activeName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

import { pathMapBreadcrumbs } from '@/utils/map-bread-crumb'
import { getLocalData } from '@/utils/local'
import { useRouterStore } from '@/store/modules/system-store'

import Tabs from './tabs.vue'
import UserInfo from './userInfo.vue'

const emit = defineEmits(['foldChange'])
const route = useRoute()
const systemStore = useRouterStore()
//当前tab活跃
const activeName = computed(() => route.path)
//监听路由变化
watch(route, () => {
  //活跃路由对象
  const obj = {
    name: (route.meta.name as string) || '页面未找到',
    path: route.path || '/404'
  }
  systemStore.changeTabsList(obj)
  systemStore.changeCurrentPath(obj)
})

//面包屑
const menuList = getLocalData('roleList') as any[]
const breadcrumbItem: any = computed(() => {
  const currentPath = route.path
  return pathMapBreadcrumbs(menuList, currentPath)
})
//折叠
const isExpand = ref(false)
const isFold = (type: boolean) => {
  isExpand.value = type
  emit('foldChange', isExpand.value)
}
</script>

<style lang="scss" scoped>
.header-page {
  .mes {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .icons {
      display: flex;
      .icon {
        cursor: pointer;
        font-size: 20px;
        margin-right: 20px;
      }
    }
  }
}
</style>
