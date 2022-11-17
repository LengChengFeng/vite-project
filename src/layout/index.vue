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
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "./components/header.vue";
import MenuComponent from "./components/menu.vue";
const isFold = ref(false);
const handleFoldChange = (value: boolean) => {
  isFold.value = value;
};
</script>

<style lang="scss" scoped>
.el-container {
  .el-aside {
    height: 100vh;
    background-color: #fff;
    transition: width 0.3s linear;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    height: 120px;
    padding-top: 20px;
  }
  .el-main {
    background-color: #f5f7f8;
  }
}
</style>
