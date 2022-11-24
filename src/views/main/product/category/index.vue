<template>
  <div>
    <el-button @click="handleClick('left')">左边滚动</el-button>
    <el-button @click="handleClick('up')">上滚动</el-button>
    <el-button @click="handleClick('right')">右边滚动</el-button>
    <el-button @click="handleClick('down')">下边滚动</el-button>
    <vue3-seamless-scroll :list="list" class="scroll" :step="0.8" :hover="true" :direction="direction">
      <div class="item" v-for="(item, index) in list" :key="index" :data-index="index">
        <span>{{ item.title }}</span>
        <span>{{ item.date }}</span>
      </div>
    </vue3-seamless-scroll>
  </div>
  <div @click="click">
    <template v-for="item in arr" :key="item.name">
      <div class="test">我是name:{{ item.name }}</div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'

type IDirectionType = 'left' | 'right' | 'up' | 'down'

let direction = ref<IDirectionType>('left')
const list = [
  {
    title: '无缝滚动第一行无缝滚动第一行',
    date: '2017-12-16'
  },
  {
    title: '无缝滚动第二行无缝滚动第二行',
    date: '2017-12-16'
  },
  {
    title: '无缝滚动第三行无缝滚动第三行',
    date: '2017-12-16'
  },
  {
    title: '无缝滚动第四行无缝滚动第四行',
    date: '2017-12-16'
  },
  {
    title: '无缝滚动第五行无缝滚动第五行',
    date: '2017-12-16'
  },
  {
    title: '无缝滚动第六行无缝滚动第六行',
    date: '2017-12-16'
  },
  {
    title: '无缝滚动第七行无缝滚动第七行',
    date: '2017-12-16'
  },
  {
    title: '无缝滚动第八行无缝滚动第八行',
    date: '2017-12-16'
  },
  {
    title: '无缝滚动第九行无缝滚动第九行',
    date: '2017-12-16'
  }
]

const handleClick = (direct: IDirectionType) => {
  direction.value = direct
}

const arr = [
  {
    name: 1,
    id: 2
  },
  {
    name: 2,
    id: 2
  },
  {
    name: 3,
    id: 2
  },
  {
    name: 4,
    id: 2
  }
]

const click = (e: Event) => {
  console.log(e)
}
</script>
<style lang="scss" scoped>
.test {
  height: 50px;
  margin: 10px;
  background-color: red;
}
.scroll {
  height: 200px;
  width: 500px;
  margin: 100px auto;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
  background: #fff;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
}
</style>
