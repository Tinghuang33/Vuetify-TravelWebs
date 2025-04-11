<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
  <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/cwtexyen.css">
  <NavigationBar />
  <Windows />
  <SpeedDials />
  <Favorites />
  <BreadCrumbs :items="breadcrumbsItems" />
  <!-- 景點內容區塊 -->
  <v-container class="w3-light-blue" style="max-width:1200px; border-radius: 30px; padding: 50px; background: linear-gradient(to bottom, #98d1f0, #98a4f0, #a198f0);">
    <v-col cols="12">
      <!-- 景點名稱 -->
      <v-card-title class="headline text-center" style="font-size: 30px; font-weight: bold; color: #ffffff;">
        {{ title }}
      </v-card-title>

      <!-- 景點描述 -->
      <v-card-text class="text-h5" style="font-size: 18px; color: #fff;">
        {{ description }}
      </v-card-text>
    </v-col>

    <!-- 圖片展示 -->
    <v-row :class="gridClass" align="stretch">
      <v-col cols="12" md="4" v-for="col in columns" :key="col">
        <v-img
          v-for="img in col"
          :key="img"
          :src="img"
          max-width="100%"
          class="mb-4 rounded-lg shadow-lg"

        ></v-img>
      </v-col>
    </v-row>

    <!-- 旅遊日記 -->
    <v-col cols="12">
      <v-card-title class="headline text-center" style="font-size: 30px; color: #fff;">
        {{ story }}
      </v-card-title>
      <v-card-text class="text-h5" style="font-size: 18px; color: #fff;">
        {{ thoughts }}
      </v-card-text>
    </v-col>

    <!-- 景點評分 -->
    <div class="text-center" style="margin-bottom: 20px;">
      <v-rating
        v-model="rating"
        readonly
        color="yellow"
      ></v-rating>
    </div>

    <!-- 圖片展示 -->
    <v-row :class="gridClass" align="stretch">
      <v-col cols="12" md="4" v-for="col in photos" :key="col">
        <v-img
          v-for="img in col"
          :key="img"
          :src="img"
          max-width="100%"
          class="mb-4 rounded-lg shadow-lg"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // 景點資料
      rating: 4,
      title: "Tourist Spot 1：梅問屋梅子元氣館", 
      description: "梅山鄉，古名「梅仔坑」，可見其與梅樹的關係，光是梅山公園就有三千餘株，因此發展出青梅產業。於2006年成立自有品牌「梅問屋」，"+
                   "在2012年設立「梅問屋梅子元氣館」觀光工廠。走進時光隧道，廊道兩側講述梅山歷史、公司的歷史以及梅子的營養成分、好處等各種知識，"+
                   "也有保存許多饒有年代的器具或設備。接著可以走上空中走廊觀看醃梅池，池子的高度非常高，最大年產量可達2192噸，相當於2.2億顆梅子。"+
                   "除了可以看到梅子產品的製作過程，還可以預約DIY體驗活動，在伴手禮的展示間有許多產品提供顧客試吃和選購。", 
      story:"旅遊日記",
      thoughts:"一個不用門票，免費進入的觀光工廠，第一次聽到時原以為會非常無聊，從正門右側的「時光隧道」，"+
               "介紹了他們公司的歷史、梅子的營養成分及各種好處，最酷的是有一盅已經醃了40幾年的梅子，如果是個人都可以生出我的程度。"+
               "最期待的就是花錢的環節，工廠結合梅子生產了各種產品，我有購入的品項中最喜歡的是梅果醋濃縮液，要喝的時候直接加冰水沖開就很好喝，"+
               "如果有條件加冰塊喝起來會更清爽。",
      columns: [
        [
          '/touristSpot1/image(1).jpg',
        ],
        [
          '/touristSpot1/image(2).jpg',
        ],
        [
          '/touristSpot1/image(3).jpg',
        ],
      ],
      photos: [
        [
          '/touristSpot1/image(4).jpg',
          '/touristSpot1/image(5).jpg',
          '/touristSpot1/image(6).jpg',
          '/touristSpot1/image(7).jpg',
          '/touristSpot1/image(8).jpg',
        ],
        [
          '/touristSpot1/image(9).jpg',
          '/touristSpot1/image(10).jpg',
          '/touristSpot1/image(11).jpg',
          '/touristSpot1/image(12).jpg',
          '/touristSpot1/image(13).jpg',
        ],
        [
          '/touristSpot1/image(14).jpg',
          '/touristSpot1/image(15).jpg',
          '/touristSpot1/image(16).jpg',
          '/touristSpot1/image(17).jpg',
          '/touristSpot1/image(18).jpg',
        ],
      ],    

      // 跳轉頁面連結
      breadcrumbsItems: [
        { title: "首頁", disabled: false, href: "/" },
        { title: "景點介紹", disabled: true },
      ],
    };
  },
};
</script>

<style scoped>
div { font-family: "cwTeXYen", sans-serif; }

/* 瀑布流樣式 */
.masonry-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.v-card {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.v-img {
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.v-img:hover {
  transform: scale(1.05);
}

.v-card-title {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-align: center;
}

.v-card-text {
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 1.5;
}

.text-center {
  text-align: center;
}

.v-rating {
  margin-bottom: 20px;
}
</style>
