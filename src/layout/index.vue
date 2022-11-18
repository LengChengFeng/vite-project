<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isFold ? '70px' : '210px'">
        <MenuComponent :isCollapse="isFold" />
      </el-aside>
      <el-container>
        <el-header>
          <HeaderComponent @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="content">
          <router-view v-slot="{ Component, route }">
            <transition name="el-fade-in-linear" mode="out-in">
              <!-- <keep-alive> -->
              <component v-if="isRefresh" :is="Component" :key="route.path" />
              <!-- </keep-alive> -->
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from './components/header.vue'
import MenuComponent from './components/menu.vue'
import { useRouterStore } from '@/store/modules/system-store'
import { computed } from '@vue/reactivity'

const systemStore = useRouterStore()
const isRefresh = computed(() => systemStore.refresh)
const isFold = ref(false)
const handleFoldChange = (value: boolean) => {
  isFold.value = value
}
</script>

<style lang="scss" scoped>
.el-container {
  .el-aside {
    height: 100vh;
    background-color: #fff;
    transition: width 0.3s linear;
    box-shadow: $box-shadow;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-header {
    background-color: #fff;
    box-shadow: $box-shadow;
    padding: 20px;
    width: 100%;
    height: 120px;
    padding-top: 0 20px;
  }
  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
