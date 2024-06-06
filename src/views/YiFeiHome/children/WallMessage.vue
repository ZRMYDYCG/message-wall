<script setup lang="ts">
import { wallType,label } from '@/utils/data'

console.log(wallType, label)
</script>

<template>
  <div class="wall-message">
    <p class="title"></p>
  </div>
</template>

<style scoped>
.wall-message {
  min-height: 800px;
  padding-top: 52px;
}
</style>
