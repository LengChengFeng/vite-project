<template>
  <baidu-map class="map" :center="{ lng: 116.297611, lat: 40.047363 }" :zoom="15" :scroll-wheel-zoom="true">
    <bm-marker :position="{ lng: 116.297611, lat: 40.047363 }" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="我是路线起点" :labelStyle="{ color: 'red', fontSize: '24px' }" :offset="{ width: -35, height: 30 }" />
    </bm-marker>
    <bm-polyline :path="path" :key="path" strokeColor="red" :strokeWeight="5"></bm-polyline>
    <bm-marker :position="{ lng: 116.307223, lat: 40.056379 }" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="我是路线终点" :labelStyle="{ color: 'red', fontSize: '24px' }" :offset="{ width: -35, height: 30 }" />
    </bm-marker>
  </baidu-map>
</template>

<script setup lang="ts">
var path = [
  {
    lng: 116.297611,
    lat: 40.047363
  },
  {
    lng: 116.302839,
    lat: 40.048219
  },
  {
    lng: 116.308301,
    lat: 40.050566
  },
  {
    lng: 116.305732,
    lat: 40.054957
  },
  {
    lng: 116.304754,
    lat: 40.057953
  },
  {
    lng: 116.306487,
    lat: 40.058312
  },
  {
    lng: 116.307223,
    lat: 40.056379
  }
]
</script>

<style scoped>
.map {
  width: 100%;
  height: 80vh;
}

.jump {
  transition: all 3s;
  animation: jump 10s linear infinite;
}

@keyframes jump {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(300px);
  }

  100% {
    transform: translateX(600px);
  }
}
</style>
