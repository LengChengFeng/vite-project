<template>
  <div class="menu">
    <div class="logo" v-show="!isCollapse">
      <img src="https://pinia.vuejs.org/logo.svg" alt="" />
      <span>vue3+pinia</span>
    </div>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :default-active="route.path" :router="true" background-color="#fff">
      <template v-for="item in menuList" :key="item.id">
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.url">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.url">
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span class="dotted"></span>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getLocalData } from '@/utils/local'
import { useRoute } from 'vue-router'
withDefaults(
  defineProps<{
    isCollapse: boolean
  }>(),
  {
    isCollapse: false
  }
)

const menuList = ref(getLocalData('roleList'))
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
