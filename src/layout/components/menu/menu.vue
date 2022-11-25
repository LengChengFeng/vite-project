<template>
  <div class="menu">
    <div class="logo" v-show="!isCollapse">
      <img src="https://pinia.vuejs.org/logo.svg" alt="" />
      <span>vue3+pinia</span>
    </div>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :default-active="route.path" :router="true" background-color="#fff">
      <template v-for="item in menuList" :key="item.id">
        <sideBarItemVue :items="item" />
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getLocalData } from '@/utils/local'
import sideBarItemVue from './components/sideBarItem.vue'
import { useRoute } from 'vue-router'
import type { IMenuItemType } from './type'
withDefaults(
  defineProps<{
    isCollapse: boolean
  }>(),
  {
    isCollapse: false
  }
)

const menuList = ref<IMenuItemType[]>(getLocalData('roleList'))
//递归形成菜单
const data = [
  {
    name: '系统总览',
    url: '/main/analysis',
    type: 1,
    id: 38,
    icon: 'Menu',
    children: [
      {
        name: '核心技术',
        url: '/main/analysis/overview112',
        type: 1,
        id: 39,
        icon: 'Menu',
        children: [
          {
            name: '测试1',
            url: '/test1',
            type: 2,
            id: 492,
            icon: 'Menu',
            hideMenu: true
          },
          {
            name: '测试2',
            url: '/main/analysis/overview',
            type: 1,
            id: 491,
            icon: 'Menu',
            children: [
              {
                name: '我是测试的子儿子',
                url: '/main/analysis/overview',
                type: 2,
                id: 4923,
                icon: 'Menu'
              }
            ]
          }
        ]
      },
      {
        name: '商品统计',
        url: '/main/analysis/dashboard',
        type: 2,
        id: 49,
        icon: 'Menu'
      }
    ]
  }
]
const route = useRoute()
</script>

<style lang="scss" scoped>
.menu {
  padding-top: 20px;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    img {
      vertical-align: bottom;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
