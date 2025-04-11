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
>
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
      title: "Tourist Spot 4：太平老街", 
      description: "梅山太平老街是條古老的街道，帶點懷舊的氛圍，部份建築仍保留日本殖民時期的木造建築，街上有許多攤販和小店，"+
                   "提供草仔粿、冬瓜茶，手工豆干、茶葉蛋等美味在地小吃，也有許多精緻的手工藝品和紀念品，即使店面都有歷史歲月的痕跡，"+
                   "但那經過歲月琢磨的商店街，仍然吸引了大批的觀光客前來朝聖。",  
      story:"旅遊日記",
      thoughts:"走在這古色古香的巷弄裡，彷彿時光倒流，感覺自己彷彿穿越到了日治時期的小鎮，感受著濃濃的懷舊氣息，如此親切入世的山城況味，"+
               "讓人心醉。太平老街裡有許多特色美食，老闆個個熱情，很適合全家午後悠閒漫步，沿路品嚐小吃，像是丹鹿伴手禮的地瓜燒跟冬瓜妹的手工豆干。"+
               "地瓜燒綿密香甜，製作工序複雜，還獲得過嘉義縣政府商圈美食競賽的肯定，推薦大家嘗試看看!手工豆干Q彈有嚼勁，每一口都吃得到豆干與滷汁碰撞的香味！"+
               "另外還有豆腐涼糕，炎炎夏日來上一份，非常的清涼無負擔；特別要提到黑咖賞的泡芙和提燈花燒菓子，把燒菓子做成提燈花的形狀很立體，跟真花非常像!"+
               "口味也很特別，香香甜甜的很特殊的一種花香味，是平常不會吃到的味道，有顏值又美味的提燈花燒菓子誰能不愛，非常建議到梅山太平老街逛逛的朋友們一定要買它!",
      columns: [
        [
          '/touristSpot4/image(1).jpg',
        ],
        [
          '/touristSpot4/image(2).jpg',
        ],
        [
          '/touristSpot4/image(3).jpg',
        ],
      ],
      photos: [
        [
          '/touristSpot4/image(4).jpg',
          '/touristSpot4/image(5).jpg',
          '/touristSpot4/image(6).jpg',
          '/touristSpot4/image(7).jpg',
          '/touristSpot4/image(8).jpg',
        ],
        [
          '/touristSpot4/image(9).jpg',
          '/touristSpot4/image(10).jpg',
          '/touristSpot4/image(11).jpg',
          '/touristSpot4/image(12).jpg',
          '/touristSpot4/image(13).jpg',
        ],
        [
          '/touristSpot4/image(14).jpg',
          '/touristSpot4/image(15).jpg',
          '/touristSpot4/image(16).jpg',
          '/touristSpot4/image(17).jpg',
          '/touristSpot4/image(18).jpg',
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
