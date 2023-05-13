<script lang="ts" setup>
</script>

<template>
    <view id="header">
        <view class="left">
            <view class="mine">
                <span id="renderjs-view" class="point"></span>
                <span>Ethereum Mainnet</span>
            </view>
        </view>
        <view class="right">
          1
        </view>
    </view>
</template>

<script module="render" lang="renderjs">

</script>

<style scoped>
  #header{
    height: calc(var(--tabbar-height) + var(--status-bar-height));
    padding-top: var(--status-bar-height);
    display: grid;
    grid-template-columns: 4fr 1fr;
    line-height: var(--tabbar-height);
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    position: fixed;
    width: 100vw;
    z-index: 999;
    line-height: 24px;
    font-size: 14px;
  }
  #header view{
    width: 100%;
  }
  #header .left{
    padding: calc((var(--tabbar-height) - 26px) / 2) 0;
    height: 26px;
  }
  #header .right{
    padding: calc((var(--tabbar-height) - 26px) / 2) 0;
    height: 26px;
    text-align: right;
  }

  #header .mine{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  #header .point{
    width: 6px;
    height: 6px;
    background-color: #000;
    border-radius: 3px;
    margin-right: 8px;
    background-color: #f0f;
  }
  #header .mine image{
    width: 10px;
    height: 10px;
    background-color: #000;
    margin-right: 10px;
  }
  </style>