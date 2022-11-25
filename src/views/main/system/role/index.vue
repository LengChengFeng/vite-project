<template>
  <div class="echarts">
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="margin-bottom: 20px">
        <AppCard title="我是饼图" class="pie">
          <template #default>
            <PieComponent />
          </template>
        </AppCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="margin-bottom: 20px">
        <AppCard title="屏幕滚动" class="pie">
          <template #default>
            <ScrollVue />
          </template>
        </AppCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="margin-bottom: 20px">
        <AppCard title="我是饼图" class="pie">
          <template #default>
            <PieComponent />
          </template>
        </AppCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="margin-bottom: 20px">
        <AppCard title="我是饼图" class="pie">
          <template #default>
            <BarEchart />
          </template>
        </AppCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import AppCard from '@/components/AppCard/index.vue'
import ScrollVue from './components/scrollVue.vue'
import PieComponent from './components/pieComponent.vue'
import BarEchart from './components/barEchart.vue'
// import type { EChartsOption } from 'echarts'
</script>

<style scoped lang="scss"></style>
