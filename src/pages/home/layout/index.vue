<template>
  <header>
    <slot name="header"></slot>
  </header>

  <section id="main">
    <view class="current-coin">
      <slot name="coin"></slot>
    </view>
    <view class="hots">
      <slot name="hots"></slot>
    </view>
    <view class="menus">
      <slot name="menus"></slot>
    </view>
    <!--推荐-->
    <view class="feature">
      <slot name="feature"></slot>
    </view>
    <!--币数据-->
    <view class="bdata">
      <slot name="bdata"></slot>
    </view>
  </section>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  #main{
    padding-top: calc(var(--tabbar-height) + var(--status-bar-height));
  }
  #main .current-coin{
    padding:10px;
    height: 250px;
  }
  #main .notice{
    background-color: blueviolet;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    padding: 0 10px;
  }
  </style>
  