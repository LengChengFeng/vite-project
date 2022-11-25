<template>
  <div class="menu-page">
    <el-button @click="addMenu" type="primary">添加菜单</el-button>
    <AddMenuDialog ref="addMenuDialogRef" />
    <div>
      <template v-for="(item, index) in img">
        <el-image
          style="width: 100px; height: 100px"
          :src="item"
          :preview-src-list="getPreviewImgList(index, img)"
          :initial-index="4"
          fit="cover"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddMenuDialog from './components/addMenuDialog.vue'

const addMenuDialogRef = ref<InstanceType<typeof AddMenuDialog>>()

const addMenu = () => {
  addMenuDialogRef.value?.openDialog()
}

const img = ['https://pinia.vuejs.org/logo.svg', 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png']

const getPreviewImgList = (index: number, imgArr: any[]) => {
  let arr = []
  let i = 0
  for (i; i < imgArr.length; i++) {
    arr.push(imgArr[i + index])
    if (i + index >= imgArr.length - 1) {
      index = 0 - (i + 1)
    }
  }
  return arr
}
</script>

<style scoped>
.iconText {
  display: flex;
}
</style>
