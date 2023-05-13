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
  import AppPage from "@/pages/news/layout/index.vue"
  </script>
  
  <style scoped>
  </style>
  