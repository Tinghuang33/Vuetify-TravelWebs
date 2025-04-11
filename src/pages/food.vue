<template>
  <!-- 推薦美食頁面 -->
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
  <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/cwtexyen.css">

  <NavigationBar />
  <Windows />
  <SpeedDials />
  <Favorites />
  <BreadCrumbs :items="breadcrumbsItems" />
  <div style="margin: 20px; border-radius: 10px; background-image: url('/window/01.jpg'); background-size: cover;">
  <!-- 相關食物推薦輪播和店家資訊   -->
  <v-sheet 
    class="mx-auto spotlight-sheet" 
    elevation="12" 
    max-width="1000" 
    style="margin: 70px; padding: 40px; border-radius: 30px; background-color: #76787295; "
  ><br>
    <!-- 標題 -->
    <h2 class="text-h3 mb-4">
      <v-icon size="36" style="margin-bottom: 16px;">mdi-food</v-icon>
      梅山鄉美食推薦
    </h2><br>

    <!-- 推薦美食店家輪播 -->
    <v-slide-group v-model="model" class="pa-4" show-arrows>
      <v-slide-group-item v-for="(store, index) in stores" :key="index">
        <v-card
          :class="['ma-4', 'grey-lighten-1', { 'spotlight-card': isPaused && model === index }]"
          height="200"
          width="220"
          @click="toggleSelection(index)"
        >
          <!-- 顯示店家圖片 -->
          <v-img :src="store.imageUrl" height="250px" contain></v-img>

          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isPaused == true && model == index"
                color="white"
                icon="mdi-check"
                size="48"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <!-- 顯示選擇卡片詳細資訊 -->
    <v-expand-transition>
      <v-sheet v-if="isPaused == true && model != null" height="200" style="margin: 50px; padding: 10px; border-radius: 20px; ">
        <div class="d-flex flex-column align-center justify-center">
          <!-- 顯示店家名稱 -->
          <h3 class="text-h5 mb-4">
            <v-icon size="28">mdi-store</v-icon>
            {{ stores[model]?.name }}
          </h3>

          <!-- 顯示店家地圖連結 -->
          <div class="d-flex">
            <v-btn
              color="secondary"
              variant="text"
              style="font-size: 14px"
              :href="stores[model]?.mapLink"
            >
            <v-icon left size="18">mdi-map-marker</v-icon> See in Map
            </v-btn>
          </div>

          <!-- 顯示相關部落格推薦 -->
          <div class="d-flex">
            <v-btn
              color="secondary"
              variant="text"
              style="font-size: 14px"
              :href="stores[model]?.blogUrl"
            >
            <v-icon left size="18">mdi-book-open-page-variant</v-icon> 美食部落格介紹
            </v-btn>
          </div>
          <br>
          <!-- 顯示店家電話 -->
          <a
            :href="`tel:${stores[model]?.phone}`"
            class="text-decoration-none text-primary font-weight-bold"
            style="font-size: 14px"
          >
            <v-icon size="20" color="primary" style="margin-right: 8px;">mdi-phone</v-icon>
            {{ stores[model]?.phone }}
          </a>
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: 0, //初始索引從 0 開始
      isPaused: false, // 是否暫停輪播
      intervalId: null, //計時器 ID
      breadcrumbsItems: [
        { title: "首頁", disabled: false, href: "/" },
        { title: "美食推薦", disabled: true },
      ],
      stores: [
        // 美食店家清單
        {
          name: '梅山傳統豆花店',
          mapLink: 'https://maps.app.goo.gl/CwTrncH2tZbrmYTW8',
          imageUrl:
            'https://imageproxy.pixnet.cc/imgproxy?url=https://pic.pimg.tw/rowing2005/1719493993-1882251921-g.png',
          blogUrl:
            'https://rowing2005.pixnet.net/blog/post/576696808#google_vignette',
          phone: '05 262 3606',
        },
        {
          name: '冬瓜妹',
          mapLink: 'https://maps.app.goo.gl/iz43x5naj2jyWXBP9',
          imageUrl:
            'https://img.ihappyday.tw/2020/12/1608396136-4a194ef61a66918e280d13f91d85655b.jpg',
          blogUrl:
            'https://followmii.tw/blog/post/%E3%80%90%E5%98%89%E7%BE%A9%E7%BE%8E%E9%A3%9F%E3%80%91%E6%A2%85%E5%B1%B1%E9%84%89%E3%80%82%E5%A4%AA%E5%B9%B3%E8%80%81%E8%A1%97%E5%86%AC%E7%93%9C%E5%A6%B9-%E7%B8%BD%E7%B5%B1%E7%B4%9A%E8%8C%B6%E8%91%89',
          phone: '0925 197 172',
        },
        {
          name: '空氣圖書館 AIR LIBRARY',
          mapLink: 'https://maps.app.goo.gl/XZEp6pJ6n6nFbYKn7',
          imageUrl:
            'https://anise.tw/wp-content/uploads/2020/05/1589800244-279d98d5bead8ec06724e016e6188a42.jpg',
          blogUrl: 'https://mimihan.tw/air-library/',
          phone: '05 257 2366',
        },
        {
          name: '梅山羊肉專家',
          mapLink: 'https://maps.app.goo.gl/v2ZvzJ8RRhDaRTyd8',
          imageUrl:
            'https://picdn.gomaji.com/products/o/586/281586/281586_2.jpg',
          blogUrl: 'https://margaret.tw/meishan-mutton/',
          phone: '05 262 2339',
        },
        {
          name: '黑咖賞·良心茶葉蛋',
          mapLink: 'https://maps.app.goo.gl/vCK4cbscTW9iqqGR6',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiF9cvs2MDWB8QBt8j3DWlBFrCUavZ24tfA&s',
          blogUrl: 'https://damon624.pixnet.net/blog/post/47335116',
          phone: 'none',
        },
      ],
    }),

    beforeMount() {
      this.startCarousel() // 啟動輪播
    },

    beforeDestroy() {
      clearInterval(this.intervalId) // 清除計時器
    },

    methods: {
      startCarousel() {
        this.intervalId = setInterval(() => {
          if (!this.isPaused) {
            // 從當前索引繼續輪播
            this.model = (this.model + 1) % this.stores.length
          }
        }, 3000) // 每 3 秒切換一次
      },

      toggleSelection(index) {
        if (this.model === index && this.isPaused) {
          // 如果再次點選已選中的卡片，恢復輪播
          this.isPaused = false
        } else {
          // 暫停輪播並選擇新的卡片
          this.isPaused = true
          this.model = index
        }
      },
    },
  }
</script>

<style>
  .spotlight-card {
    position: relative;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 200, 0.8),
      rgba(0, 0, 0, 0.8)
    );
    box-shadow: 0 0 40px 10px rgba(255, 255, 200, 0.8);
    overflow: hidden;
    transform: scale(1.05);
    transition: all 0.6s ease-in-out;
  }

  .spotlight-card::before {
    content: '';
    position: absolute;
    top: -150%;
    left: -150%;
    width: 400%;
    height: 400%;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 200, 0.8) 10%,
      rgba(0, 0, 0, 0.8) 80%
    );
    z-index: -1;
    opacity: 0.7;
    transform: scale(0.7);
    transition: all 0.8s ease-in-out;
  }

  .spotlight-card:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  .text-h3 {
    font-family: "cwTeXYen", sans-serif;
    text-align: center;
    font-weight: bold;
    color: beige;
  }
  .text-h5 {
    font-family: "cwTeXYen", sans-serif;
    text-align: center;
    font-weight: bold;
    color: beige;
  }

  div[style*="background-image"] {
    position: relative;
    overflow: hidden;
  }

  div[style*="background-image"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); 
    z-index: 1; 
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); 
    border-radius: 10px;
    backdrop-filter: blur(3px); 
  }

  div[style*="background-image"] > * {
    position: relative;
    z-index: 2; /* 確保內容位於遮罩之上 */
  }
</style>
