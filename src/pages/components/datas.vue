<template>
    <view class="datas-container">
        <div>币种</div>
        <div>最新价</div>
        <div>今日涨跌</div>
        <div>1</div>
        <div>12</div>
        <div>13</div>
    </view>
  </template>
  
  <script setup lang="ts">
  import AppPage from "@/pages/layout/index.vue"
  function changeTheme(){}
  </script>
  
  <style scoped>
  .datas-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:1fr repeat(10,2fr) ;
  }
  </style>
  