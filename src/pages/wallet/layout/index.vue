<template>

    <section id="main">
      <!--推荐-->
      <view class="list-types">
        <slot name="types"></slot>
      </view>
      <!--推荐-->
      <view class="search">
        <slot name="search"></slot>
      </view>
      <!--币数据-->
      <view class="datas">
        <slot name="datas"></slot>
      </view>
    </section>
  <slot></slot>
    </template>
    
    <script setup lang="ts">
    </script>
    
    <style scoped>
    #main{
      padding-top: calc(var(--status-bar-height));
    }
    #main .banner{
      padding:10px;
      background-color: blue;
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
    