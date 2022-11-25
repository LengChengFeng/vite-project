<template>
  <div class="infinite bg-bg_color">
    <ul class="top">
      <li>更新日期</li>
      <li>项目名称</li>
      <li>Star数量</li>
    </ul>
    <vue3-seamless-scroll class="warp" :step="0.8" :hover="true" :direction="direction" :list="listData">
      <ul class="item">
        <li v-for="(item, index) in listData" :key="index">
          <span v-text="item.date" />
          <span v-text="item.name" />
          <span v-text="item.star" />
        </li>
      </ul>
    </vue3-seamless-scroll>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'

type IDirectionType = 'left' | 'right' | 'up' | 'down'

let direction = ref<IDirectionType>('up')
const listData = ref([
  {
    date: '2021-09-01',
    name: 'vue-pure-admin',
    star: '1000'
  },
  {
    date: '2021-09-02',
    name: 'vue-pure-admin',
    star: '1100'
  },
  {
    date: '2021-09-03',
    name: 'vue-pure-admin',
    star: '1200'
  },
  {
    date: '2021-09-04',
    name: 'vue-pure-admin',
    star: '1300'
  },
  {
    date: '2021-09-05',
    name: 'vue-pure-admin',
    star: '1400'
  },
  {
    date: '2021-09-06',
    name: 'vue-pure-admin',
    star: '1500'
  },
  {
    date: '2021-09-07',
    name: 'vue-pure-admin',
    star: '1600'
  },
  {
    date: '2021-09-08',
    name: 'vue-pure-admin',
    star: '1700'
  },
  {
    date: '2021-09-09',
    name: 'vue-pure-admin',
    star: '1800'
  },
  {
    date: '2021-09-10',
    name: 'vue-pure-admin',
    star: '1900'
  }
])
</script>

<style lang="scss" scoped>
.infinite {
  .top {
    width: 95%;
    height: 40px;
    line-height: 40px;
    display: flex;
    margin: 0 auto;
    font-size: 14px;
    color: #909399;
    font-weight: 400;
    li {
      width: 34%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .warp {
    width: 95%;
    height: 215px;
    margin: 0 auto;
    overflow: hidden;

    li {
      height: 30px;
      line-height: 30px;
      display: flex;
      font-size: 15px;
    }

    span {
      width: 34%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
