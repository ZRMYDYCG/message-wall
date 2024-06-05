<script setup lang="ts">
import YiHeader from '@/components/YiHeader/index.vue'
</script>

<template>
  <div class="YiFeiHome">
    <YiHeader></YiHeader>
    <video src="@/assets/images/daytime.mp4" autoplay="true" muted="true" loop="true" class="bg-video" height="840"></video>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.YiFeiHome {
  .bg-video {
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
