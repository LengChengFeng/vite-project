<template>
  <el-card class="box-card">
    <div class="echart" ref="myEcahrt"></div>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useEchart from '@/hooks/useEchart'
import type { EChartsOption } from 'echarts'

const myEcahrt = ref<HTMLElement>()
const options: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        width: 1,
        color: '#019680'
      }
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [...new Array(18)].map((_item, index) => `${index + 6}:00`),
    splitLine: {
      show: true,
      lineStyle: {
        width: 1,
        type: 'solid',
        color: 'rgba(226,226,226,0.5)'
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: [
    {
      type: 'value',
      max: 80000,
      splitNumber: 4,
      axisTick: {
        show: false
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(255,255,255,0.2)', 'rgba(226,226,226,0.2)']
        }
      }
    }
  ],
  grid: { left: '1%', right: '1%', top: '2%', bottom: 0, containLabel: true },
  series: [
    {
      smooth: true,
      data: [111, 222, 4000, 18000, 33333, 55555, 66666, 33333, 14000, 36000, 66666, 44444, 22222, 11111, 4000, 2000, 500, 333, 222, 111],
      type: 'line',
      areaStyle: {},
      itemStyle: {
        color: '#5ab1ef'
      },
      emphasis: {
        focus: 'series'
      }
    },
    {
      smooth: true,
      data: [33, 66, 88, 333, 3333, 5000, 18000, 3000, 1200, 13000, 22000, 11000, 2221, 1201, 390, 198, 60, 30, 22, 11],
      type: 'line',
      areaStyle: {},
      itemStyle: {
        color: '#019680'
      },
      emphasis: {
        focus: 'series'
      }
    }
  ]
}
useEchart(myEcahrt, options)
</script>

<style scoped>
.box-card {
  width: 50%;
}
.echart {
  width: 100%;
  height: 400px;
}
.app {
  width: 100%;
  height: 500px;
}
</style>
