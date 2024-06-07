<script setup lang="ts">
import { ref } from 'vue'
import { cardColorOptions, cardColor, label } from '@/utils/data'
import YiButton from '@/components/YiButton/index.vue'
const props = defineProps({
  id: {
    type: Number,
    default: 0
  }
})

// 颜色选择
let colorSelected = ref(0)
const changeColor = (index: number) => {
  colorSelected.value = index
}

// 标签选择
let labelSelected = ref(0)

const changeLabel = (index: number) => {
  labelSelected.value = index
}
</script>

<template>
  <div class="new-card">
    <ul class="color-list">
      <template v-for="(item, index) in cardColorOptions" :key="index">
        <li @click="changeColor(index)" class="item" :style="{ background: item }" :class="{ selected: index === colorSelected }"></li>
      </template>
    </ul>
    <div class="card-main" :style="{ background: cardColor[colorSelected] }">
      <textarea class="message" placeholder="留言..." maxlength="96"></textarea>
      <input class="name" type="text" placeholder="签名" />
    </div>
    <div class="labels">
      <p class="title">请选择标签</p>
      <ul class="list">
        <li class="item" @click="changeLabel(index)" :class="{ labelSelected: labelSelected === index }" v-for="(item, index) in label[id]" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="state">
      <p class="title">免责声明</p>
      <p class="detail">
        一小池勺是采用一刻时光的UI设计，为了将该产品添加更多的元素。请不要利用此平台服务制作、上传、下载、复制、发布、传播或者转载如下内容：<br />
        1、反对宪法所确定的基本原则的；<br />
        2、危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家 统一的；<br />
        3、损害国家荣誉和利益的；<br />
        4、煽动民族仇恨、民族歧视，破坏民族团结的；<br />
        5、破坏国家宗教政策，宣扬邪教和封建迷信的；<br />
        6、散布谣言，扰乱社会秩序，破坏社会稳定的；<br />
        7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br />
        8、侮辱或者诽谤他人，侵害他人合法权益的；<br />
        9、含有法律、行政法规禁止的其他内容的信息。
      </p>
    </div>
    <div class="footer">
      <yi-button size="max" type="secondary">丢弃</yi-button>
      <yi-button size="max" type="primary" class="confirm">确定</yi-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: XiaoKeNaiNao;
  src: url("@/assets/fonts/xknn.ttf");
}
.new-card {
  padding: 0 20px;
  .color-list {
    display: flex;
    padding-bottom: 12px;
    align-items: center;

    .item {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      cursor: pointer;
    }
    .selected {
      border: 1px solid rgba(59, 115, 240, 1);
    }
  }
  .card-main {
    height: 240px;
    width: 100%;
    padding: 12px;

    .message {
      background: none;
      border: none;
      resize: none;
      height: 172px;
      width: 100%;
      padding: 8px;
      font-size: 16px;
      font-family: XiaoKeNaiNao;
    }
    .name {
      width: 100%;
      padding: 8px;
      background: none;
      border: 1px solid $gray-10;
      font-family: XiaoKeNaiNao;
      font-weight: 600;
      font-size: 16px;
    }
  }
  .labels {
    margin-top: 20px;
    .title {
      color: $gray-1;
      font-size: 16px;
      font-weight: 600;
      font-family: XiaoKeNaiNao;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      .item {
        padding: 2px 10px;
        border-radius: 20px;
        margin: 16px 4px 0 0;
        cursor: pointer;
        color: $gray-2;
        transition: all .3s;
      }
      .labelSelected {
        background: #EBEBEB;
        font-weight: 600;
        color: $gray-1;
      }
    }
  }

  .state {
    margin-top: 20px;
    .title {
      color: $gray-1;
      font-size: 16px;
      font-weight: 600;
      font-family: XiaoKeNaiNao;
    }
    .detail {
      margin-top: 10px;
      font-size: 12px;
      color: $gray-3;
      line-height: 18px;
    }
  }

  .footer {
    padding: 20px 0;
    display: flex;
    width: 100%;
    .confirm {
      margin-left: 15px;
      flex: 2;
    }
  }
}
</style>
