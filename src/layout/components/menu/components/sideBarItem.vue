<template>
  <el-sub-menu :index="items.url">
    <template #title>
      <el-icon><location /></el-icon>
      <span>{{ items.name }}</span>
    </template>
    <template v-for="item in items.children">
      <el-menu-item :index="item.url" v-show="!item?.hideMenu" v-if="isDeep(item)">
        <el-icon><location /></el-icon>
        <span> {{ item.name }}</span>
      </el-menu-item>
      <template v-else>
        <SideBarItem :items="item" />
      </template>
    </template>
  </el-sub-menu>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import SideBarItem from './sideBarItem.vue'
import type { IMenuItemType } from '../type'

const props = withDefaults(
  defineProps<{
    items: IMenuItemType
  }>(),
  {}
)
const isDeep = computed(() => {
  return (item: IMenuItemType) => {
    return !item?.children?.length || item.type === 2
  }
})
</script>

<style scoped lang="scss">
.menu {
  width: 16px;
}
</style>
