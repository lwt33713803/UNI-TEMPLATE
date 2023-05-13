<template>

    <section id="main">
      <!--热门标签-->
      <view class="list-types">
        <slot name="types"></slot>
      </view>
       <!--评论-->
       <view class="who">
        <slot name="who"></slot>
      </view>

       <!--想看-->
       <view class="want">
        <slot name="want"></slot>
      </view>

      <!--合集-->
      <view class="subtotal">
        <slot name="subtotal"></slot>
      </view>
    </section>
  <slot></slot>
    </template>
    
    <script setup lang="ts">
    </script>
    
    <style scoped>
    #main{
      padding-top: calc(var(--status-bar-height));
      background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
      height: calc(100vh - var(--status-bar-height));
      padding-left: 15px;
      padding-right: 15px;
	  
    }
    .list-types{
		  background-color: #fff;
		  border-radius: 14px;
		  padding: 10px;
      box-sizing: border-box;
    }
    </style>
    