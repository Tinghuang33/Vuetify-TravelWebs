<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
  <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/cwtexyen.css">
  <NavigationBar />
  <Windows />
  <SpeedDials />
  <Favorites />
  <BreadCrumbs :items="breadcrumbsItems" />
  <v-container class="w3-light-blue" style="max-width:1200px; border-radius: 30px; padding: 50px; background: linear-gradient(to bottom, #98d1f0, #98a4f0, #a198f0);">
    <v-col cols="12">
      <v-card-title class="headline text-center" style="font-size: 30px; font-weight: bold; color: #ffffff;">
        {{ title }}
      </v-card-title>
      <v-card-text class="text-h5" style="font-size: 18px; color: #fff;">
        {{ description }}
      </v-card-text>
    </v-col>

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

    <v-col cols="12">
      <v-card-title class="headline text-center" style="font-size: 30px; color: #fff;">
        {{ story }}
      </v-card-title>
      <v-card-text class="text-h5" style="font-size: 18px; color: #fff;">
        {{ thoughts }}
      </v-card-text>
    </v-col>

    <div class="text-center" style="margin-bottom: 20px;">
      <v-rating
        v-model="rating"
        readonly
        color="yellow"
      ></v-rating>
    </div>

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
      rating: 5,
      title: "Tourist Spot 6：仙人堀杉林步道", 
      description: "仙人堀杉林步道整段路面是以木頭材質鋪設而成，沿路緩坡，步道總長約900公尺，走進往南延伸的木棧步道，"+
                   "隨即被一大片杉木林圍繞。除了兩旁高聳的杉木之外，還有許多種類的臺灣特有的灌木和蕨類。這一段步道看起來雖然不短，"+
                   "除北端起點一小段上坡之外，高低起伏不大，走起來相當輕鬆，約30 分鐘即可抵達南端出入口，是一條適合親子共遊的路線。",  
      story:"旅遊日記",
      thoughts:"仙人堀步道是我們心目中的梅山最美步道，擁有三個出入口，分別位於「162甲」縣道14公里處附近，以及「嘉154」鄉道上的兩處。"+
               "我們選擇從嘉154鄉道約0.5公里處的出入口進入，剛好在入口處巧遇上在前一個景點認識的國中老師們。"+
               "大家相談甚歡互相協助拍下彼此的梅山之旅後，便一同踏上木棧階梯，向下進入步道。"+
               "走進去便能漸漸感受到涼意，整條步道被茂密的杉木林環抱，儘管陽光炙熱，林間依然涼爽宜人。"+
               "沿途有許多潺潺的小溪流，輕快的水聲伴隨步伐，為行程增添一絲愜意，裡面還有一座建於小溪之上的小拱橋，溪流形成美麗的小型瀑布，"+
               "站在橋上觀景，視野絕佳。其中還有兩處天然奇景——玉螺洞和仙腳印，皆為長年水滴侵蝕所雕琢的自然藝術品。繼續向前，會經過一段依山壁而建的階梯，"+
               "旁邊潺潺流水從石壁間湧出，形成壯觀的畫面。無數年的風吹日曬雨淋加上水沖蝕形成壺穴般的地貌，一層一層，無不訴說著大自然經年累月的鬼斧神工，"+
               "讓人不禁讚嘆自然的慷慨饋贈。仙人堀步道的自然生態豐富，特別適合大人帶著小孩來享受親子時光，美中不足的是步道稍微有一點濕滑，步行時要注意，"+
               "我們非常推薦大家前來仙人堀步道走走。",
      columns: [
        [
          '/touristSpot6/image(1).jpg',
        ],
        [
          '/touristSpot6/image(2).jpg',
        ],
        [
          '/touristSpot6/image(3).jpg',
        ],
      ],
      photos: [
        [
          '/touristSpot6/image(4).jpg',
          '/touristSpot6/image(5).jpg',
          '/touristSpot6/image(6).jpg',
          '/touristSpot6/image(7).jpg',
          '/touristSpot6/image(8).jpg',
        ],
        [
          '/touristSpot6/image(9).jpg',
          '/touristSpot6/image(10).jpg',
          '/touristSpot6/image(11).jpg',
          '/touristSpot6/image(12).jpg',
          '/touristSpot6/image(13).jpg',
        ],
        [
          '/touristSpot6/image(14).jpg',
          '/touristSpot6/image(15).jpg',
          '/touristSpot6/image(16).jpg',
          '/touristSpot6/image(17).jpg',
          '/touristSpot6/image(18).jpg',
        ],
      ],    
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
