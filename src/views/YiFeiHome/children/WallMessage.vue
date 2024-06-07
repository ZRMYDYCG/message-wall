<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { wallType, label } from '@/utils/data'
import YiCard from '@/components/YiCard/index.vue'
import YiModal from '@/components/YiModal/index.vue'
import NewCard from './components/NewCard/index.vue'
import { reqUserInfo } from "@/api/Home"

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

// 添加留言按钮
let addBtnBottom = ref('30px')

const scrollBottom = () => {
  // 滚动条距离顶部的高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // 屏幕高度
  let clientHeight = document.documentElement.clientHeight
  // 内容高度
  let scrollHeight = document.documentElement.scrollHeight

  if(scrollTop + clientHeight+230 >= scrollHeight) {
    addBtnBottom.value = (scrollTop + clientHeight + 230 - scrollHeight) + 'px'
  } else {
    addBtnBottom.value = '30px'
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollBottom()
  })
})

// 关闭窗口
let title = ref('')
let isModal = ref(false)
const changeModal = () => {
  isModal.value = !isModal.value
}
const itemClick = (e:any) => {
  title.value = '详情'
  isModal.value = !isModal.value
}
const addCardItem = () => {
  title.value = '写留言'
  isModal.value = !isModal.value
}
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
        <yi-card @item-click="itemClick" class="card-item" :note="item" width="288px"></yi-card>
      </template>
    </div>
    <div class="add" @click="addCardItem" v-show="!isModal">
      <span>添加</span>
    </div>
    <yi-modal @change-modal="changeModal" :title="title" :isModal="isModal">
      <new-card :id="0"></new-card>
    </yi-modal>
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

  .add {
    width: 56px;
    height: 56px;
    background-color: $gray-1;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);
    border-radius: 28px;
    position: fixed;
    right: 30px;
    bottom: v-bind(addBtnBottom);
    display: flex;
    justify-content: center;
    align-items: center;
    color: $gray-10;
    transition: all .3s;
  }
}
</style>
