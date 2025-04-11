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
      title: "Tourist Spot 5：孝子路步道&竹林茶坊", 
      description: "孝子路步道位於嘉義縣梅山鄉太平村，登山口有老街竹林茶坊、茶園產道等二處，由茶園產道進入，沿途是翠綠的孟宗竹林夾道，"+
                   "有如來到武俠片的場景之中，林相十分優美靜謐。孝子路步道因其翠綠的竹林景觀而廣受歡迎，步道設計簡單，適合短途漫遊。"+
                   "步行約20分鐘可到達步道終點，附近的竹林茶坊則是休息品茗的好地方，提供當地特色茶飲與簡餐，讓人享受悠閒的午後時光。",  
      story:"旅遊日記",
      thoughts:"孝子路步道的入口位於竹林茶坊內，一踏入便能感受到濃濃的東方禪意與悠閒氛圍。入口處的涼亭，也就是茶坊，是一個充滿詩意的休憩之地。"+
               "繼續往裡走經過一小段階梯後，便是孝子路步道入口，我們覺得孝子路步道算是一條蠻好走的步道，相對平緩，"+
               "非常適合攜長輩和小朋友一同來感受自然的清新氣息。沿途茂密的竹林隨風搖曳，發出沙沙聲，讓人聯想到武俠劇中高人切磋劍術的場景，"+
               "特別的愜意。在步道的中段，還設有一座吊橋，風景極佳，是取景拍照的絕佳地點，俯瞰橋下，可見公路穿梭其中，兩側盡是濃密的綠意，讓人心曠神怡。"+
               "也因為有高聳的竹林幫忙遮蔽了炙熱陽光，步行時整體感覺蠻舒適、涼爽，無論是追求親近自然，還是體驗放鬆悠閒的旅程，"+
               "孝子路步道都是炎炎夏日外出散心的好選擇。",
      columns: [
        [
          '/touristSpot5/image(1).jpg',
        ],
        [
          '/touristSpot5/image(2).jpg',
        ],
        [
          '/touristSpot5/image(3).jpg',
        ],
      ],
      photos: [
        [
          '/touristSpot5/image(4).jpg',
          '/touristSpot5/image(5).jpg',
          '/touristSpot5/image(6).jpg',
          '/touristSpot5/image(7).jpg',
          '/touristSpot5/image(8).jpg',
        ],
        [
          '/touristSpot5/image(9).jpg',
          '/touristSpot5/image(10).jpg',
          '/touristSpot5/image(11).jpg',
          '/touristSpot5/image(12).jpg',
          '/touristSpot5/image(13).jpg',
        ],
        [
          '/touristSpot5/image(14).jpg',
          '/touristSpot5/image(15).jpg',
          '/touristSpot5/image(16).jpg',
          '/touristSpot5/image(17).jpg',
          '/touristSpot5/image(18).jpg',
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
