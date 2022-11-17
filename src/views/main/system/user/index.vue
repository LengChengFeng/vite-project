<template>
  <div>
    <h2>user</h2>
    <div class="box">
      <h2 ref="count1Ref" class="count-up-num">{{ number }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CountUp } from 'countup.js'
const count1Ref = ref<HTMLElement>()
const number = ref(12333333)

const startVal = 0
const endVal = 1588888888
const options = {
  decimalPlaces: 2,
  prefix: '¥'
}
onMounted(() => {
  const count = new CountUp(count1Ref.value!, number.value, options)
  count.start()
})
</script>

<style scoped>
.box {
  /* background-color: #ccc; */
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 100px;
  margin-left: 20px !important;

  background-image: linear-gradient(135deg, #2dd7a6, #fadbd8, #fb5430);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  -moz-box-decoration-break: clone;
  color: transparent;
  word-break: keep-all;
}
</style>
