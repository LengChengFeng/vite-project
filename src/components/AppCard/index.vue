<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <slot>卡片默认内容</slot>
  </el-card>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
  }>(),
  {
    title: '标题'
  }
)
</script>

<style scoped lang="scss">
.box-card {
  width: 100%;
  height: 100%;
}
</style>
