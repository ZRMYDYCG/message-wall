<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '288px'
  },
  background: {
    type: String,
    default: 'rgba(252, 175, 162, 0.3)'
  },
  note: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="yi-card" :style="{ width: props.width, background: props.background }">
    <div class="header">
      <span class="time">{{ note.moment }}</span>
      <span class="label">{{ note.label }}</span>
    </div>
    <p class="message">{{ note.message }}</p>
    <div class="footer">
      <div class="footer-left">
        <div class="item">
          <span>#</span>
          <span class="value">{{ note.like }}</span>
        </div>
        <div class="item">
          <span>#</span>
          <span class="value">{{ note.comment }}</span>
        </div>
      </div>
      <div class="name">{{ note.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: XiaoKeNaiNao;
  src: url("@/assets/fonts/xknn.ttf");
}
.yi-card {
  height: 240px;
  padding: 10px 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    span {
      font-size: $size-12;
      color: $gray-3;
    }
  }
  .message {
    height: 140px;
    font-family: XiaoKeNaiNao;
    font-size: 14px;
    color: $gray-1;
  }
  .footer {
    display: flex;
    justify-content: space-between;

    .footer-left {
      display: flex;
      .item {
        display: flex;
        align-items: center;
        padding-right: 8px;
      }
      .value {
        font-size: $size-12;
        color: $gray-3;
        padding-left: 4px;
      }
    }
    .name {
      font-family: XiaoKeNaiNao;
      font-size: 16px;
      color: $gray-1;
      font-weight: 700;
    }
  }
}
</style>
