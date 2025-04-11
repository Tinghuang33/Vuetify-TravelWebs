<template>
  <!-- 特別活動頁面 -->
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
  <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/cwtexyen.css">
  <NavigationBar />
  <Windows />
  <SpeedDials />
  <Favorites />
  <BreadCrumbs :items="breadcrumbsItems" />
  <!-- 顯示每個活動項目 -->
  <v-card class="pb-3" border flat style="min-height: 350px; margin: 15px; background-color: rgb(0, 0, 0);" >
    <!-- 搜尋框 -->
    <v-data-iterator :items="activities" :items-per-page="3" :search="search">
      <template v-slot:header>
        <v-toolbar class="px-2" style="background-color: rgb(0, 0, 0); margin: 10px;">
          <v-text-field
            v-model="search"
            density="comfortable"
            placeholder="搜尋活動"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 300px"
            variant="solo"
            clearable
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>

      <!-- 顯示活動列表的每一個項目 -->
      <template v-slot:default="{ items }">
        <v-container class="pa-2" style="margin-top: 10px;" fluid>
          <v-row dense align="stretch">
            <v-col v-for="item in items" :key="item.title" cols="auto" md="4">
              <v-card class="pb-3" border flat>
                <!-- 顯示活動照片 -->
                <v-img :src="item.raw.img" height="200px" width="100%" cover class="event-image"></v-img>

                <!-- 顯示活動標題 -->
                <v-list-item class="mb-2">
                  <template v-slot:title>
                    <strong class="text-h5 mb-2 text-yellow">{{ item.raw.title }}</strong>
                  </template>
                  <span v-if="item.showSubtitle" class="text-h6 mb-2">{{ item.raw.subtitle }}</span>
                </v-list-item>

                <!-- 顯示活動的時間和展開按鈕 -->
                <div class="d-flex justify-space-between px-4">
                  <div
                    class="d-flex align-center text-caption text-medium-emphasis me-1"
                  >
                    <v-icon icon="mdi-clock" start></v-icon>

                    <div class="text-truncate text-yellow">{{ item.raw.duration }}</div>
                  </div>

                   <!-- 展開按鈕 -->
                  <v-btn
                    class="text-none w3-light-blue"
                    size="small"
                    text="展開"
                    border
                    flat
                    @click="toggleSubtitle(item)"
                  >
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <!-- 分頁控制 -->
      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <!-- 上一頁 -->
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <!-- 顯示當前頁碼及總頁數 -->
          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <!-- 下一頁 -->
          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      // 跳轉頁面連結
      breadcrumbsItems: [
        { title: "首頁", disabled: false, href: "/" },
        { title: "季節性活動", disabled: true },
      ],
      search: '',
      // 活動列表資料
      activities: [
        {
          img: 'https://newstaiwan.net/wp-content/uploads/2024/09/517d7dd021b3f4a2de447446f9596c0d.jpg',
          title: '嘉義梅山鄉太興村【萬鷺朝鳳】',
          subtitle:
            '嘉義縣梅山鄉太興村每年8月下旬至10月中旬都能看見「萬鷺朝鳳」美景，一大群黃頭鷺由北往南遷徙度冬，鳥群在山谷間翱翔的畫面如白龍在山谷飛行，吸引大批愛鳥人士及攝影師朝聖，對自然生態有興趣的朋友絕對不能錯過!',
          advanced: false,
          duration: '9-10 月',
          showSubtitle: false,
        },
        {
          img: 'https://nextws.cyhg.gov.tw/001/Upload/1/relpic/110372/1209945/ec924c9c-2661-4770-beb8-1132efafdc7b.png',
          title: '梅山太平藝術季',
          subtitle:
            '梅山太平藝術季以「雲藝太平 柒碗茶韻」為主題，茶文化與藝術完美融合，結合太平豐富的茶文化與多樣的藝術表演，為遊客帶來一場視覺、聽覺、味覺的全新體驗。此次活動結合傳統戲曲融入生活場景並深化人文底蘊，活絡商圈帶動氛圍營造。內容包含場域茶席、戲曲表演、雜技秀及音樂會等，讓參與者在享受藝術氛圍的同時，深入感受太平的茶文化底蘊。',
          duration: '10月26~27日、11月2~3日',
          showSubtitle: false,
        },
        {
          img: 'https://nextws.cyhg.gov.tw/001/Upload/1/relpic/110293/30993/e7d27dc8-a4c5-4ebc-ace3-4effcdeb97fc.jpg',
          title: '瑞里紫藤花季',
          subtitle:
            '嘉義縣梅山鄉瑞里村是阿里山北道的重要旅遊景點，除了竹林、步道、螢火蟲等美景外，每年春初3月，優雅的紫藤花在瑞里陸續綻放，如串串紫色浪漫風鈴點綴在山城之中，彷彿其花語「醉人的戀情、依依的思念」般，讓賞花遊客陶醉在美景裡，更讓瑞里獲得「紫色山城」的美名。每年紫藤花盛開時都吸引大批遊客上山賞花，也代表著嘉義瑞里年度旅遊旺季正式開始。',
          advanced: true,
          duration: '3月1日~31日',
          showSubtitle: false,
        },
        {
          img: 'https://lh3.googleusercontent.com/p/AF1QipOnntqOwZuWtV5Fo1a0nf-kN3ZBHAFzgJsxnNco=s1360-w1360-h1020',
          title: '瑞里螢火蟲季',
          subtitle:
            '每年三到六月螢火蟲季，瑞里村已經陸續能看見螢火蟲的蹤跡，漫天飛舞的點點螢光總是吸引了大批遊客上山欣賞，海拔1000公尺遠離塵囂的「遇見彩虹生態村」，螢火蟲密度全台最高，是知名的賞螢地點。賞螢地點還包括圓潭自然生態園區、野薑花溪步道、若蘭山莊前及瑞里國小，另由於螢火蟲只要氣溫過低或下過大雨就不會出現，在出發賞螢前，建議先確認當地天氣狀況，才不至敗興而歸。',
          advanced: true,
          duration: '3月-6月',
          showSubtitle: false,
        },
        {
          img: 'https://cdntwrunning.biji.co/800_1f0067dfd0936162eef5c80e6ac7a0c8.jpg',
          title: '嘉義梅山公園梅花綻放 春節賞梅好去處',
          subtitle:
            '梅山公園位於梅山鄉市區占地6公頃，當年是嘉義八景之一的「梅坑月霽」所在，日治昭和9年（西元1934年）即開始種植梅樹，目前約有3000株。每年耶誕節開始到農曆年間是賞花季節，是台灣欣賞梅花的勝地之一。2025年元旦鄉公所在此舉辦梅花茶會，歡迎鄉親與各地旅客來梅山公園品茶及賞花。',
          advanced: false,
          duration: '12月底-1月中',
          showSubtitle: false,
        },
      ],
    }),
    methods: {
      toggleSubtitle(item) {
        item.showSubtitle = !item.showSubtitle
      },
    },
  }
</script>

<style>
  .mb-2 {
    font-family: 'cwTeXYen', sans-serif;
  }
</style>
