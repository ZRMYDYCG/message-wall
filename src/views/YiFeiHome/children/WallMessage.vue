<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { wallType,label } from '@/utils/data'
import YiCard from '@/components/YiCard/index.vue'
import {reqUserInfo} from "@/api/Home";

// 留言墙与照片墙的切换 id
const id = ref(0)

// 留言墙标签是否被选中
const isLabelSelected = ref(-1)
const changeLabelItem = (index: number) =>  {
  isLabelSelected.value = index
}

let cardData = ref([])
onMounted(() => {
  reqUserInfo().then((res: any) => {
    cardData.value = res.data
  })
})

// 卡片宽度
let noteWidth = ref(0)

const getNoteWidth = () => {
  let screenWidth = document.body.clientWidth
  // 300 = 288 + 左右 margin 6px  => 当前屏幕宽度下可以放置卡片的数量 (screenWidth - 120) / 300  ((screenWidth - 120) / 300) * 300 => 卡片总宽度
  noteWidth.value = Math.floor((screenWidth - 120) / 300) * 300
}

onMounted(() => {
  getNoteWidth()
  // 监听屏幕的变化
  window.addEventListener('resize', () => {
    getNoteWidth()
  })
})
</script>

<template>
  <div class="wall-message">
    <p class="title">{{ wallType[id].name }}</p>
    <p class="individual">{{ wallType[id].individual }}</p>
    <ul class="label">
      <li class="item" @click="isLabelSelected = -1" :class="{ selected: isLabelSelected === -1 }">全部</li>
      <template v-for="(item, index) in label[id]" :key="index">
        <li class="item" :class="{ selected: isLabelSelected === index }" @click="changeLabelItem(index)">{{ item }}</li>
      </template>
    </ul>
    <div class="card" :style="{ width: noteWidth + 'px' }">
      <template v-for="(item, index) in cardData" :key="index">
        <yi-card class="card-item" :note="item" width="288px"></yi-card>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wall-message {
  min-height: 800px;
  padding-top: 52px;

  .title {
    padding-top: 48px;
    padding-bottom: 8px;
    font-size: 56px;
    color: $gray-1;
    text-align: center;
    font-weight: 600;
  }
  .individual {
    color: $gray-2;
    text-align: center;
  }

  .label {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .item {
      padding: 0 15px;
      line-height: 28px;
      margin: 6px;
      color: $gray-2;
      cursor: pointer;
      transition: all .2s;
      &.selected {
        color: $gray-1;
        font-weight: 600;
        border: 1px solid $gray-1;
        border-radius: 14px;
      }
    }
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    padding-top: 28px;
    margin: auto;

    .card-item {
      margin: 6px;
    }
  }
}
</style>
