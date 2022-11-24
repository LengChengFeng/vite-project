<template>
  <el-sub-menu :index="items.url">
    <template #title>
      <component :is="items.icon" class="menu" />
      {{ items.name }}
    </template>
    <template v-for="item in items.children">
      <template v-if="isDeep(item)">
        <el-menu-item :index="item.url" v-show="!item?.hideMenu">
          <span class="dotted"></span>
          <component :is="item.icon" class="menu" />
          {{ item.name }}
        </el-menu-item>
      </template>
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
console.log(props.items)
</script>

<style scoped lang="scss">
.menu {
  width: 16px;
}
</style>
