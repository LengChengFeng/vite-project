<template>
  <div ref="pieRef" style="width: 100%; height: 35vh"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useEchart from '@/hooks/useEchart'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
const pieRef = ref<HTMLElement>()
const option: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
    axisLine: {
      show: true,
      lineStyle: {
        color: '#24529b'
      }
    },

    axisLabel: {
      color: '#5c7bd9'
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#24529b'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#24529b'
      }
    },
    axisLabel: {
      color: '#5c7bd9'
    }
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      barWidth: 20,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#01acff' },
          { offset: 0.5, color: '#0278ff' },
          { offset: 1, color: '#0344ff' }
        ])
      }
    }
  ]
}

useEchart(pieRef, option)
</script>
