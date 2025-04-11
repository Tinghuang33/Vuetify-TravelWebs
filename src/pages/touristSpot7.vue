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
      title: "Tourist Spot 7：太興飛瀑步道",
      description: "太興飛瀑步道位太興村溪頭地區，昔稱阿葉溪步道通往秘境阿葉溪瀑布，葉溪瀑布共有三層，高約10~20公尺，"+
                   "第二層有觀瀑平台、涼亭、石橋，而第三層設有飛瀑平台，是觀賞飛瀑最精彩的地點。阿葉溪瀑布經過溪水長期的侵蝕，"+
                   "大石盤上形成許多渠道，溪流由大石盤頂端順著渠道分流而下，形成數條白練的水瀑，岩石上的綠苔及植物配合湍急水流形成的水霧效果吸引無數遊客，"+
                   "清涼的水氣使旅客在步行步道時神清氣爽。", 
      story:"旅遊日記",
      thoughts:"太興飛瀑步道是一條充滿自然美景的步道，沿途可以看到兩旁種了檳榔樹、野薑花，還有一大片的茶園景致，濃厚的自然氛圍讓人一走入便感到心曠神怡。"+
               "步道穿梭在阿葉溪溪谷與林蔭間，沿途設有多個休憩平台，讓遊客能停下腳步，細細品味這片自然的靜謐與壯麗。"+
               "道總高低落差約130公尺，最大亮點莫過於太興飛瀑，這座瀑布共有三層，瀑布水流如絲如練，同時從高處傾瀉而下，氣勢恢宏，場景壯觀得彷彿置身於畫中，"+
               "難怪有「台版九寨溝珍珠灘」的美譽。站在觀瀑平台，迎面而來的是清涼的水霧，耳邊回響著激昂的水聲，令人瞬間忘卻生活的喧囂。"+
               "這段旅程，不僅讓人飽覽自然的壯麗，更提供了一場心靈的療癒。無論是徜徉於樹林或茶園之間，還是靜靜欣賞瀑布的壯美，都讓人深感大自然的魅力與寧靜。"+
               "我們覺得太興飛瀑步道很適合喜歡遠離塵囂、擁抱自然的人，是夏日消暑，老少咸宜的旅遊好所在。",
      columns: [
        [
          '/touristSpot7/image(1).jpg',
        ],
        [
          '/touristSpot7/image(2).jpg',
        ],
        [
          '/touristSpot7/image(3).jpg',
        ],
      ],
      photos: [
        [
          '/touristSpot7/image(4).jpg',
          '/touristSpot7/image(5).jpg',
          '/touristSpot7/image(6).jpg',
          '/touristSpot7/image(7).jpg',
          '/touristSpot7/image(8).jpg',
        ],
        [
          '/touristSpot7/image(9).jpg',
          '/touristSpot7/image(10).jpg',
          '/touristSpot7/image(11).jpg',
          '/touristSpot7/image(12).jpg',
          '/touristSpot7/image(13).jpg',
        ],
        [
          '/touristSpot7/image(14).jpg',
          '/touristSpot7/image(15).jpg',
          '/touristSpot7/image(16).jpg',
          '/touristSpot7/image(17).jpg',
          '/touristSpot7/image(18).jpg',
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
