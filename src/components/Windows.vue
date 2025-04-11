<template>
  <!-- 頁面輪播照片 -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/cwtexyen.css">
  <v-carousel height="800" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item 
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    >

    <!-- 在每個輪播項目中顯示圖片和文字，並設置居中顯示 -->
    <div class="w3-display-middle w3-center">
      <span class="w3-text-white w3-hide-small" style="font-size:100px; font-weight: bold;">梅山<br>travelWebs</span>
      <p>
        <!-- Let's go按鈕，導到首頁下方景點介紹部分 -->
        <a href="javascript:void(0)" 
          class="w3-button w3-xxlarge w3-black" 
          @click="scrollToCard"
        >
          Let's go
        </a>
      </p>
    </div>
  </v-carousel-item>
  </v-carousel>
</template>

<style>
  span {font-family: "cwtexyen.css", sans-serif}
</style> 

<script>
  export default {
    data() {
      return {
        // 輪播圖片來源
        items: [
          {
            src: '/window/window(3).jpg',
          },
          {
            src: '/window/window(2).jpg',
          },
          {
            src: '/window/window(1).jpg',
          },
          {
            src: '/window/window(4).jpg',
          },
        ],
        slides: ['First', 'Second', 'Third', 'Fourth'],
      }
    },
    methods: {
      scrollToCard() {
        // 觸發滾動
        const element = document.getElementById('card');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth', // 滾動效果
            block: 'start', // 讓目標元素對齊頂部
          });
        }
      },
    },
  }
</script>

