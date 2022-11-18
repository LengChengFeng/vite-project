<template>
  <div class="menu-page">
    <el-button @click="addMenu" type="primary">添加菜单</el-button>
    <AddMenuDialog ref="addMenuDialogRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddMenuDialog from './components/addMenuDialog.vue'

const addMenuDialogRef = ref<InstanceType<typeof AddMenuDialog>>()

const addMenu = () => {
  addMenuDialogRef.value?.openDialog()
}
</script>

<style scoped>
.iconText {
  display: flex;
}
</style>
