<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '288px'
  },
  background: {
    type: String,
    default: 'rgba(252, 175, 162, 0.3)'
  }
})
</script>

<template>
  <div class="yi-card" :style="{ width: props.width, background: props.background }">
    <div class="header">
      <span class="time">2024.06.06</span>
      <span class="label">信条</span>
    </div>
    <p class="message">我们用心聆听，用情回应。你的感受，我们感同身受。我们用心聆听，用情回应。你的感受，我们感同身受。我们用心聆听，用情回应。你的感受，我们感同身受。</p>
    <div class="footer">
      <div class="footer-left">
        <div class="item">
          <span>#</span>
          <span class="value">3</span>
        </div>
        <div class="item">
          <span>#</span>
          <span class="value">3</span>
        </div>
      </div>
      <div class="name">一勺</div>
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
