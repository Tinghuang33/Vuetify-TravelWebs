<template>
  <!-- 首頁景點清單 -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Roboto:wght@400;700&display=swap">
  <!-- 背景 -->
  <div 
    class="w3-container w3-padding-64 w3-xxlarge" 
    id="card" 
    style="
      background-image: url('/window/02.jpg');
      background-size: Fixed;
      background-position: center;
      background-attachment: fixed;
      color: #ffffff;
    "
  >
    <!-- 清單內容 -->
    <div class="w3-content" 
      style="
        max-width: 1200px; 
        padding: 24px; 
        border-radius: 16px; 
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); 
        background: rgba(255, 255, 255, 0.8);"
    >
      <v-row flex wrap>
  
        <!-- 標題 -->
        <v-col cols="12">
          <h1 
            class="w3-center w3-jumbo" 
            style="
              margin-bottom:64px; 
              font-family: 'Noto Sans TC', sans-serif; 
              color: #FF6F61; 
              font-weight: bold; 
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);"
          >
            THE VIEWS
          </h1>
        </v-col>

        <!-- 景點卡片 -->
        <v-col cols="12" v-for="(spot, index) in spots" :key="index" class="mb-4">
          <v-card 
            color="white" 
            class="pa-4" 
            style="
              border-radius: 16px; 
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);"
          >
            <div class="d-flex flex-no-wrap justify-space-between align-items-stretch">
              <!-- 左側文字 -->
              <div 
                class="d-flex flex-column justify-space-between" 
                style="flex: 1; max-width: 60%;"
              >
                <!-- 景點名稱 -->
                <v-card-title 
                  class="text-h3" 
                  style="
                    font-family: 'Noto Sans TC', sans-serif; 
                    color: #FF6F61; 
                    font-weight: bold;"
                >
                  {{ spot.title }}
                </v-card-title>

                <!-- 景點簡介 -->
                <v-card-subtitle 
                  class="text-h6" 
                  style="
                    white-space: normal; 
                    text-align: justify; 
                    line-height: 1.8; 
                    font-family: 'Roboto', sans-serif; 
                    color: #616161;"
                >
                  {{ spot.description }}
                </v-card-subtitle>

                <!-- 下方按鈕 -->
                <v-card-actions class="mt-auto justify-center">
                  <!-- 儲存景點按鈕 -->
                  <!-- 景點名稱、經緯度加入至savedSpots，更新savedCount -->
                  <v-btn 
                    @click="saveCurrentSpot(spot.title, spot.latitude, spot.longitude)" 
                    class="ma-2"
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    <v-icon left>mdi-content-save</v-icon>
                    儲存景點
                  </v-btn>

                  <!-- 加入收藏按鈕 -->
                  <!-- 景點加入至favoriteSpots -->
                  <v-btn 
                    @click="addToFavorites(spot.title)" 
                    class="ma-2"
                    size="large"
                    variant="outlined"
                    color="pink"
                  >
                    <v-icon left>mdi-heart</v-icon>
                    加入收藏
                  </v-btn>

                  <!-- 了解更多按鈕 -->
                  <!-- 連結到景點詳細介紹頁面(touristSpot page) -->
                  <v-btn 
                    class="ma-2"
                    size="large"
                    variant="outlined"
                    color="secondary"
                    :to="{ path: spot.link }"
                  >
                    <v-icon left>mdi-information</v-icon>
                    了解更多
                  </v-btn>
                </v-card-actions>
              </div>
              <!--右側圖片 -->
              <v-avatar 
                class="ma-6 align-self-end"
                rounded="8px"
                size="300"
                style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"
              >
                <v-img :src="spot.image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style>
  v-card {
    font-family: 'Noto Sans TC', 'Roboto', sans-serif;
  }
</style>

<script>
export default {
  data() {
    return {
      //景點資料內容，總共七個景點
      spots: [
      {
          title: "梅問屋梅子元氣館",
          description: "梅問屋位於阿里山下的梅山鄉，山川靈氣孕育的青梅滿山遍野，居民獨創的醃製口味風靡了日本，相傳曾與蓬萊米茶葉上供日本天皇，口碑遠播下，問梅，尋梅者眾，故名「梅問屋」。",
          latitude: 23.586802,
          longitude: 120.550871,
          image: "/touristSpot1/01.jpg",
          link: "/touristSpot1",
        },
        {
          title: "太平雲梯",
          description: "太平雲梯為高山單跨景觀吊橋，橫跨太平山與龜山間，長度281公尺、海拔約1,000公尺，為海拔最高之景觀吊橋，雲梯上可俯瞰嘉義風光觀賞夕陽、晚霞、雲海等自然景觀。",
          latitude: 23.5596292,
          longitude: 120.5977076,
          image: "/touristSpot2/01.jpg",
          link: "/touristSpot2",
        },
        {
          title: "空氣圖書館",
          description: "空氣圖書館是位於太平雲梯旁邊的文青風餐廳，使用清水模與多樣蕨類植栽結合美食、文創的森林系圖書館，採半開放式書架隔間設計，營造視覺穿透感，"+
                       "陽光、空氣恣意流通於這個通透的空間裏，使置身於空氣圖書館的遊客們，就像在森林中野餐一般輕鬆優閒。",
          latitude: 23.5603506,
          longitude: 120.6017443,
          image: "/touristSpot3/01.jpg",
          link: "/touristSpot3",
        },
        {
          title: "太平老街",
          description: "梅山太平老街是條古老的街道，帶點懷舊的氛圍，部份建築仍保留日本殖民時期的木造建築，街上有許多攤販和小店，"+
                       "提供草仔粿、冬瓜茶，手工豆干、茶葉蛋等美味在地小吃，也有許多精緻的手工藝品和紀念品，即使店面都有歷史歲月的痕跡，"+
                       "但那經過歲月琢磨的商店街，仍然吸引了大批的觀光客前來朝聖。",
          latitude: 23.5605286,
          longitude: 120.6030455,
          image: "/touristSpot4/01.jpg",
          link: "/touristSpot4",
        },
        {
          title: "孝子路步道&竹林茶坊",
          description: "孝子路步道位於嘉義縣梅山鄉太平村，登山口有老街竹林茶坊、茶園產道等二處，由茶園產道進入，沿途是翠綠的孟宗竹林夾道，"+
                       "有如來到武俠片的場景之中，林相十分優美靜謐。孝子路步道因其翠綠的竹林景觀而廣受歡迎，步道設計簡單，適合短途漫遊。"+
                       "步行約20分鐘可到達步道終點，附近的竹林茶坊則是休息品茗的好地方，提供當地特色茶飲與簡餐，讓人享受悠閒的午後時光。",
          latitude: 23.5608512,
          longitude: 120.6058837,
          image: "/touristSpot5/01.jpg",
          link: "/touristSpot5",
        },
        {
          title: "仙人堀杉林步道",
          description: "仙人堀杉林步道整段路面是以木頭材質鋪設而成，沿路緩坡，步道總長約900公尺，走進往南延伸的木棧步道，"+
                       "隨即被一大片杉木林圍繞。除了兩旁高聳的杉木之外，還有許多種類的臺灣特有的灌木和蕨類。"+
                       "這一段步道看起來雖然不短，除北端起點一小段上坡之外，高低起伏不大，走起來相當輕鬆，"+
                       "約30 分鐘即可抵達南端出入口，是一條適合親子共遊的路線。",
          latitude: 23.5616,
          longitude: 120.612741,
          image: "/touristSpot6/01.jpg",
          link: "/touristSpot6",
        },
        {
          title: "太興飛瀑步道",
          description: "太興飛瀑步道位太興村溪頭地區，昔稱阿葉溪步道通往秘境阿葉溪瀑布，葉溪瀑布共有三層，高約10~20公尺，"+
                       "第二層有觀瀑平台、涼亭、石橋，而第三層設有飛瀑平台，是觀賞飛瀑最精彩的地點。"+
                       "阿葉溪瀑布經過溪水長期的侵蝕，大石盤上形成許多渠道，溪流由大石盤頂端順著渠道分流而下，"+
                       "形成數條白練的水瀑，岩石上的綠苔及植物配合湍急水流形成的水霧效果吸引無數遊客，清涼的水氣使旅客在步行步道時神清氣爽。",
          latitude: 23.5494351,
          longitude:  120.6341331,
          image: "/touristSpot7/01.jpg",
          link: "/touristSpot7",
        },
      ],
    };
  },
  methods: {
    // 儲存當前景點方法
    saveCurrentSpot(name, latitude, longitude) {
      const isAlreadySaved = this.$store.state.savedSpots.some(
        (savedSpot) => savedSpot.name === name
      );

      if (isAlreadySaved) {
        alert(`${name} 已經儲存過了！`);
      } else {
        const spot = { name, latitude, longitude };
        this.$store.commit("savedSpots", spot);
        alert(`${name} 已儲存！`);
      }
    },

    // 新增收藏景點方法
    addToFavorites(spotName) {
      const isAlreadyFavorite = this.$store.state.favoriteSpots.includes(spotName);

      if (isAlreadyFavorite) {
        alert(`${spotName} 已經在收藏清單中！`);
      } else {
        this.$store.commit("addFavoriteSpot", spotName);
        alert(`${spotName} 已加入收藏！`);
      }
    },
  },
};
</script>
