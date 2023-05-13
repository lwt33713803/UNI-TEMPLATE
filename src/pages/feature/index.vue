<template>
    <AppPage>
      <template v-slot:types>
       <view class="types-container">
          <view class="title">
            <text class="hot">热门</text>
            <text class="tags">标签</text>
          </view>
          <view class="tags-container">
            <view v-for="item in 9" :key="item">
              <image src="@/static/email.webp"></image>
              <text>行业</text>
            </view>
            <view class="more">
              MORE
            </view>
          </view>
        </view>
      </template>
    </AppPage>
  </template>
  
  <script setup lang="ts">
  import AppPage from "@/pages/feature/layout/index.vue"
  function changeTheme(){

  }
  </script>
  
  <style scoped>
  .types-container{
    padding: 10px;
    box-sizing: border-box;
  }
  .title text{
    font-size: 20px;
    font-weight: bold;
  }
  .tags-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 3;
    gap:10px;
    padding-top: 10px;
  }
  .hot{
    margin-bottom: 10px;
  }
  .tags-container view{
    background-color: #ccc;
    border-radius: 12px;
    padding: 5px;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }


  .tags-container image{
    width: 16px;
    height: 16px;
  }
  .more{
    background-color: transparent;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  </style>
  