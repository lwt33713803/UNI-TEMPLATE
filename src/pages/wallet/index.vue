<template>
    <AppPage>
      <template v-slot:datas>
        <view class="datas-container">
          111
        </view>
      </template>
      <template v-slot:search>
        <view class="search-container">
          111
        </view>
      </template>
      <template v-slot:types>
        <view class="types-container">
          111
        </view>
      </template>
    </AppPage>
  </template>
  
  <script setup lang="ts">
  import AppPage from "@/pages/wallet/layout/index.vue"
  function changeTheme(){
  
  }
  </script>
  
  <style scoped>
  .datas-container{
    height: calc(100vh - var(--status-bar-height) - 44px - 44px);
    background-color: #f00;
    padding: 10px;
    box-sizing: border-box;
  }
  .search-container{
    background-color: aqua;
    height: 44px;
  }
  .types-container{
    background-color: aquamarine;
    height: 44px;
  }
  </style>
  