<template>
  <div class="icon-drawer-page">
    <el-drawer direction="rtl" v-model="showIconDrawer" size="50%">
      <template #header>
        <h3>选择图标</h3>
      </template>
      <template #default>
        <div class="icons">
          <template v-for="(item, index) in iconList" :key="item">
            <div class="icon-list" @click="selectIcon(index, item)" :class="{ active: currentIndex === index }">
              <component :is="item" class="icon" />
              <div class="name">{{ item }}</div>
            </div>
          </template>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ref } from 'vue'

const emits = defineEmits(['handleSelectIcon'])

const showIconDrawer = ref(false)
const currentIndex = ref(9999999)

let iconList: string[] = []
for (const [key, components] of Object.entries(ElementPlusIconsVue)) {
  iconList.push(key)
}

const selectIcon = (index: number, name: string) => {
  currentIndex.value = index
  emits('handleSelectIcon', name)
}

const openIconDrawer = () => {
  showIconDrawer.value = true
}

defineExpose({
  openIconDrawer
})
</script>

<style scoped lang="scss">
.icon-drawer-page {
  .icons {
    display: flex;

    flex-wrap: wrap;
    .icon-list {
      width: 120px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid $border-color;
      cursor: pointer;
      .icon {
        height: 30px;
        width: 30px;
      }
      .name {
        font-size: 14px;
      }
    }
    .active {
      color: $color-blue;
    }
  }
}
</style>
