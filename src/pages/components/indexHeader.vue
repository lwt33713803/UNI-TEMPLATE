<template>
    <view id="header" :animation="animationData" @click="heightChange2()">
        <view class="left">
            <view class="mine">
                <span id="" class="point"></span>
                <span>Ethereum Mainnet</span>
            </view>
        </view>
        <view class="right">
            <view class="mine">
                <image src="@/static/svg/home-mail.svg"></image>
            </view>
            <div id="renderjs-view">

            </div>
        </view>
    </view>
</template>


<script module="lottie" lang="renderjs">
// import lottie, { type AnimationConfigWithData } from 'lottie-web'
// import animationData from '@/static/json/index-point.json'
// export default {
//     data() {
// 			return {
// 				chart:null,//是否显示更多
// 				ts:null
// 			}
// 		},
// 		mounted() {
// 			const script = document.createElement('script')
// 			script.src = lottie as any
// 			document.head.appendChild(script)
// 			script.onload = this.ready() as any
// 		},
// 		methods: {
// 			ready() {
// 				 const params:AnimationConfigWithData = {
// 					container: document.getElementById('renderjs-view'),
// 					renderer: 'svg',
// 					loop: true,
// 					autoplay: true,
// 					animationData: animationData
// 				} as AnimationConfigWithData;
// 				var anim :any = lottie.loadAnimation(params); // 加载
 
// 			},
// 		}
// 	}
</script>

<script lang="ts" setup>
    import { onLoad, onPageScroll } from '@dcloudio/uni-app'
    import { reactive,ref, type Ref } from 'vue';
    const animationData:any = ref({});
    const animation:any = ref({});
    const headerHeight:Ref<number> = ref(64)
	
	function heightChange(){
		animation.value.height(100).step();
		animationData.value = animation.value.export();
    console.log(animationData)
	}
	
	function heightChange2(){
		animation.value.height(headerHeight.value).step();
		animationData.value = animation.value.export();
		console.log(animationData)
	}

	
    onLoad(()=>{
      animation.value = uni.createAnimation({
        duration: 600,
        timingFunction: 'ease'
      });
      //  heightChange();
    })
    // #ifdef APP-PLUS  
    onPageScroll((e) => {   
       if(e.scrollTop===0){
        headerHeight.value = 110;
          animation.value.height(110).step();
          animationData.value = animation.value.export();
       }else{
        if(headerHeight.value !== 64){
          headerHeight.value = 64;
          animation.value.height(64).step()
          animationData.value = animation.value.export();
        }
       }
    }); 
    // #endif

</script>
<style scoped>
  #header{
    height: calc(var(--tabbar-height) + var(--status-bar-height));
    padding-top: var(--status-bar-height);
    display: grid;
    grid-template-columns: 4fr 1fr;
    line-height: var(--tabbar-height);
    padding-left: 10px;
    padding-right: 10px;
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
  }
  #header .mine image{
    width: 10px;
    height: 10px;
    background-color: #000;
    margin-right: 10px;
  }
  </style>