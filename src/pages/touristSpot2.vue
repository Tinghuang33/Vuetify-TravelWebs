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
          style="margin: 10px;"
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
      title: "Tourist Spot 2：太平雲梯", 
      description: "太平雲梯為高山單跨景觀吊橋，橫跨太平山與龜山間，長度281公尺、海拔約1,000公尺，為海拔最高之景觀吊橋，"+
                   "雲梯上可俯瞰嘉義風光觀賞夕陽、晚霞、雲海等自然景觀，知名的梅山36彎美景盡收眼底，由於視野極佳，"+
                   "晴朗天氣下更可遠眺嘉南平原直至台灣海峽，入夜後還有精彩燈光秀。", 
      story:"旅遊日記",
      thoughts:"在吊橋上可以看到上山和下山時害我不淺的三十六彎，居高臨下，看著那段路，心情挺複雜。走在橋上時可以感覺到微微的晃動，"+
               "再加上從地板的縫隙可以直接看見最底下的山地，讓同行的朋友不敢往下看，非常有趣。由於吊橋是單行道的關係，有想拍的照片務必在橋上就拍好，"+
               "否則要再上來一次還得多買門票。",
      columns: [
        [
          '/touristSpot2/image(1).jpg',
        ],
        [
          '/touristSpot2/image(2).jpg',
        ],
        [
          '/touristSpot2/image(3).jpg',
        ],
      ],
      photos: [
        [
          '/touristSpot2/image(4).jpg',
          '/touristSpot2/image(5).jpg',
          '/touristSpot2/image(6).jpg',
          '/touristSpot2/image(7).jpg',
          '/touristSpot2/image(8).jpg',
        ],
        [
          '/touristSpot2/image(9).jpg',
          '/touristSpot2/image(10).jpg',
          '/touristSpot2/image(11).jpg',
          '/touristSpot2/image(12).jpg',
          '/touristSpot2/image(13).jpg',
        ],
        [
          '/touristSpot2/image(14).jpg',
          '/touristSpot2/image(15).jpg',
          '/touristSpot2/image(16).jpg',
          '/touristSpot2/image(17).jpg',
          '/touristSpot2/image(18).jpg',
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
