<script setup lang="ts">
import { ref, onMounted, computed, watch, reactive } from 'vue'
import { useRoute } from "vue-router"
import { wallType, label } from '@/utils/data'
import YiCard from '@/components/YiCard/index.vue'
import YiModal from '@/components/YiModal/index.vue'
import NewCard from './components/NewCard/index.vue'
import CardDetail from './components/CardDetail/index.vue'
import PhotoCard from '@/components/PhotoCard/index.vue'
import YiImgView from '@/components/YiImgView/index.vue'

// 留言墙与照片墙的切换 id
const route = useRoute()
const id = computed(() => {
  return route.query.id
})

// 留言墙标签是否被选中
const isLabelSelected = ref(-1)
const changeLabelItem = (index: number) =>  {
  isLabelSelected.value = index
}

let cardData = ref([])
onMounted(() => {

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
  cardSelected.value = -1
  currentIndex.value = -1
  isImgModal.value = false
}

const itemClick = (e:any) => {
  console.log(e)
}

const addCardItem = () => {
  title.value = '写留言'
  isModal.value = !isModal.value
}

// 点击查看详情
let cardSelected = ref(-1)
let currentIndex = ref(-1)
let detailData = ref({})
const clickDetail = (index: number) => {
  title.value = '详情'
  if(cardSelected.value === index) {
    cardSelected.value = -1
    isModal.value = !isModal.value
  } else {
    isModal.value = true
    cardSelected.value = index
    currentIndex.value = index
    detailData.value = cardData.value[currentIndex.value]
  }
}

const photoList = ref([
  {
    // 创建时间
    moment: "2024.08.09",
    // 留言 id
    id: 1,
    // 用户 id
    userId: 1,
    // 内容
    message: "日子就是这么的庸常，却有细碎的事物，如太阳碎碎的光芒，洒落其上。",
    // 标签
    label: 0,
    // 用户昵称
    name: "一勺",
    // 点赞数
    like: 12,
    // 评论数
    comment: 4,
    // 背景色
    imgUrl: 'https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg',
    // 是否撤回
    revoke: 0,
    // 是否举报
    report: 0,
    // 类型: 留言 、 照片
    type: 1
  },
  {
    // 创建时间
    moment: "2024.08.09",
    // 留言 id
    id: 2,
    // 用户 id
    userId: 1,
    // 内容
    message: "hello",
    // 标签
    label: 0,
    // 用户昵称
    name: "一勺",
    // 点赞数
    like: 12,
    // 评论数
    comment: 4,
    // 背景色
    imgUrl: 'https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg',
    // 是否撤回
    revoke: 0,
    // 是否举报
    report: 0,
    // 类型: 留言 、 照片
    type: 1
  },
  {
    // 创建时间
    moment: "2024.08.09",
    // 留言 id
    id: 3,
    // 用户 id
    userId: 1,
    // 内容
    message: "却有细碎的事物，如太阳碎碎的光芒，洒落其上。",
    // 标签
    label: 0,
    // 用户昵称
    name: "一勺",
    // 点赞数
    like: 12,
    // 评论数
    comment: 4,
    // 背景色
    imgUrl: 'https://pic.616pic.com/bg_w1180/00/00/81/zi58oHApHm.jpg!/fw/880',
    // 是否撤回
    revoke: 0,
    // 是否举报
    report: 0,
    // 类型: 留言 、 照片
    type: 1
  },
  {
    // 创建时间
    moment: "2024.08.09",
    // 留言 id
    id: 4,
    // 用户 id
    userId: 1,
    // 内容
    message: "洒落其上。",
    // 标签
    label: 0,
    // 用户昵称
    name: "一勺",
    // 点赞数
    like: 12,
    // 评论数
    comment: 4,
    // 背景色
    imgUrl: 'https://img.zcool.cn/community/01d21e5d467f5da80120695c80a52a.jpg@1280w_1l_2o_100sh.jpg',
    // 是否撤回
    revoke: 0,
    // 是否举报
    report: 0,
    // 类型: 留言 、 照片
    type: 1
  },
  {
    // 创建时间
    moment: "2024.08.09",
    // 留言 id
    id: 5,
    // 用户 id
    userId: 1,
    // 内容
    message: "日子就是这么的庸常",
    // 标签
    label: 0,
    // 用户昵称
    name: "一勺",
    // 点赞数
    like: 12,
    // 评论数
    comment: 4,
    // 背景色
    imgUrl: 'https://pic1.zhimg.com/v2-0cc45f5fda6e8ff79350ec1303835629_r.jpg?source=1940ef5c',
    // 是否撤回
    revoke: 0,
    // 是否举报
    report: 0,
    // 类型: 留言 、 照片
    type: 1
  },
  {
    // 创建时间
    moment: "2024.08.09",
    // 留言 id
    id: 6,
    // 用户 id
    userId: 1,
    // 内容
    message: "日子就是这么的庸常，却有细碎的事物，如太阳碎碎的光芒，洒落其上。",
    // 标签
    label: 0,
    // 用户昵称
    name: "一勺",
    // 点赞数
    like: 12,
    // 评论数
    comment: 4,
    // 背景色
    imgUrl: 'https://pic3.zhimg.com/v2-0d2d9b3a2e1d0ebbdae3b282668c772e_r.jpg',
    // 是否撤回
    revoke: 0,
    // 是否举报
    report: 0,
    // 类型: 留言 、 照片
    type: 1
  },
  {
    // 创建时间
    moment: "2024.08.09",
    // 留言 id
    id: 7,
    // 用户 id
    userId: 1,
    // 内容
    message: "日子就是这么的庸常，却有细碎的事物，如太阳碎碎的光芒，洒落其上。",
    // 标签
    label: 0,
    // 用户昵称
    name: "一勺",
    // 点赞数
    like: 12,
    // 评论数
    comment: 4,
    // 背景色
    imgUrl: 'https://img.keaitupian.cn/newupload/08/1628502171175140.jpg',
    // 是否撤回
    revoke: 0,
    // 是否举报
    report: 0,
    // 类型: 留言 、 照片
    type: 1
  },
  {
    // 创建时间
    moment: "2024.08.09",
    // 留言 id
    id: 8,
    // 用户 id
    userId: 1,
    // 内容
    message: "日子就是这么的庸常，却有细碎的事物，如太阳碎碎的光芒，洒落其上。",
    // 标签
    label: 0,
    // 用户昵称
    name: "一勺",
    // 点赞数
    like: 12,
    // 评论数
    comment: 4,
    // 背景色
    imgUrl: 'https://pic.616pic.com/bg_w1180/00/18/34/C3vNP90km1.jpg!/fw/1120',
    // 是否撤回
    revoke: 0,
    // 是否举报
    report: 0,
    // 类型: 留言 、 照片
    type: 1
  },
  {
    // 创建时间
    moment: "2024.08.09",
    // 留言 id
    id: 9,
    // 用户 id
    userId: 1,
    // 内容
    message: "日子就是这么的庸常，却有细碎的事物，如太阳碎碎的光芒，洒落其上。",
    // 标签
    label: 0,
    // 用户昵称
    name: "一勺",
    // 点赞数
    like: 12,
    // 评论数
    comment: 4,
    // 背景色
    imgUrl: 'https://img95.699pic.com/photo/50059/8720.jpg_wh300.jpg!/fh/300/quality/90',
    // 是否撤回
    revoke: 0,
    // 是否举报
    report: 0,
    // 类型: 留言 、 照片
    type: 1
  }
])
const isImgModal = ref(false)
let currentImgIndex = ref(-1)
const photoSelect = (id: number) => {
  title.value = '详情'
  isImgModal.value = !isImgModal.value
  isModal.value = !isModal.value
  detailData.value = photoList.value[id]
  currentImgIndex.value = id
}

const clickSwitch = (e: string) => {
  let length = photoList.value.length
  let currentIndex = currentImgIndex.value

  if (e === 'left' && currentIndex > 0) {
    currentIndex--
  } else if (e === 'right' && currentIndex < length - 1) {
    currentIndex++
  } else {
    return
  }

  currentImgIndex.value = currentIndex
  detailData.value = photoList.value[currentIndex]
};
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
    <div class="card" :style="{ width: noteWidth + 'px' }" v-show="id === '0'">
      <template v-for="(item, index) in cardData" :key="index">
        <yi-card @click="clickDetail(index)" :class="{ cardSelected: index === cardSelected }" @item-click="itemClick" class="card-item" :note="item" width="288px"></yi-card>
      </template>
    </div>
    <div class="photo" v-show="id === '1'">
      <template v-for="(item, index) in photoList" :key="index">
        <photo-card @click="photoSelect(index)" :photo="item"></photo-card>
      </template>
    </div>
    <div class="add" @click="addCardItem" v-show="!isModal">
      <span>添加</span>
    </div>
    <yi-modal @change-modal="changeModal" :title="title" :isModal="isModal">
      <new-card :id="Number(id)" v-if="title === '写留言'"></new-card>
      <card-detail v-if="title === '详情'" :item="detailData"></card-detail>
    </yi-modal>
    <yi-img-view @click-switch="clickSwitch" :img-url="photoList[currentImgIndex]?.imgUrl" v-show="isImgModal"></yi-img-view>
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

    .cardSelected {
      border: 1px solid $primary-color;
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

  .photo {
    column-count: 5;
    column-gap: 4px;

    counter-reset: count;
    width: 88%;
    margin: 0 auto;
  }
}
</style>
