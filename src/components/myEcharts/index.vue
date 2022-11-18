<template>
  <div class="echart" :style="{ height: height, width: width }" ref="echartDiv"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onDeactivated } from 'vue'
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption
const echartDiv = ref<HTMLElement>()
type Ifn = () => void
let fn = ref<Ifn>()
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '300px'
  }
)
onMounted(() => {
  const echartInstance = echarts.init(echartDiv.value!)
  echartInstance.setOption(props.options)
  fn.value = echartInstance.resize
  window.addEventListener('resize', () => {
    console.log(2333)
    console.log(echartInstance.resize)
    echartInstance.resize()
  })
})
// onDeactivated(() => {
//   window.removeEventListener('resize', fn.value!)
// })
</script>

<style scoped>
.echart {
  width: 100%;
  height: 500px;
  background-color: red;
}
</style>
