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
      rating: 4,
      title: "Tourist Spot 3：空氣圖書館", 
      description: "空氣圖書館是位於太平雲梯旁邊的文青風餐廳，使用清水模與多樣蕨類植栽結合美食、文創的森林系圖書館，"+
                   "採半開放式書架隔間設計，營造視覺穿透感，陽光、空氣恣意流通於這個通透的空間裏，使置身於空氣圖書館的遊客們，"+
                   "就像在森林中野餐一般輕鬆優閒。", 
      story:"旅遊日記",
      thoughts:"空氣圖書館是一個很清新跟安靜的一個景點，就猶如是鬧市中的山林，彷彿是太平老街中的清靜之地，蕨類與植栽的搭配令人感覺非常舒爽，"+
               "再配上美食的色香，使我們忍不住駐足一段時間，我們一邊拍照留念，一邊享受這幽靜的時光。",
      columns: [
        [
          '/touristSpot3/image(1).jpg',
        ],
        [
          '/touristSpot3/image(2).jpg',
        ],
        [
          '/touristSpot3/image(3).jpg',
        ],
      ],
      photos: [
        [
          '/touristSpot3/image(4).jpg',
          '/touristSpot3/image(5).jpg',
          '/touristSpot3/image(6).jpg',
          '/touristSpot3/image(7).jpg',
          '/touristSpot3/image(8).jpg',
        ],
        [
          '/touristSpot3/image(9).jpg',
          '/touristSpot3/image(10).jpg',
          '/touristSpot3/image(11).jpg',
          '/touristSpot3/image(12).jpg',
          '/touristSpot3/image(13).jpg',
        ],
        [
          '/touristSpot3/image(14).jpg',
          '/touristSpot3/image(15).jpg',
          '/touristSpot3/image(16).jpg',
          '/touristSpot3/image(17).jpg',
          '/touristSpot3/image(18).jpg',
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
