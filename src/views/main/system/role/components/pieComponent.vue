<template>
  <div class="pie" ref="pieRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
const pieRef = ref<HTMLElement>()
onMounted(() => {
  const echartInstace = echarts.init(pieRef.value!)
  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  echartInstace.setOption(option)

  window.addEventListener('resize', () => {
    echartInstace &&
      echartInstace.resize({
        animation: {
          easing: 'linear',
          duration: 500
        }
      })
  })
})
</script>

<style scoped lang="scss">
.pie {
  width: 100%;
  height: 500px;
}
</style>
