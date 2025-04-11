<template>
  <div class="speed-dials">
    <!-- 儲存景點按鈕 -->
    <v-btn
      fab
      color="deep-purple"
      class="ma-2 large-btn"
      @click="toggleDialog"
    >
      <v-icon large>mdi-bookmark-plus</v-icon> 儲存景點: {{ saveCount }}
    </v-btn>
    
    <!-- 彈出視窗顯示儲存列表 -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">儲存的景點</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(spot, index) in savedSpots"
              :key="index"
            >
              <v-list-item-content>
                <!-- 顯示景點名稱 -->
                <v-list-item-title>{{ spot.name }}</v-list-item-title>
                <!-- 顯示經緯度 -->
                <v-list-item-subtitle>
                  經度: {{ spot.latitude }}, 緯度: {{ spot.longitude }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <!-- 行程安排按鈕，跳轉到地圖顯示頁面(itinersry page) -->
          <v-btn 
            fab
            color="yellow"
            class="ma-2"
            :to="{ path: '/itinerary' }"
          >
            <v-icon left>mdi-map</v-icon>
            地圖顯示
          </v-btn>

          <!-- 重設資料按鈕 -->
          <v-btn
            fab
            color="red"
            class="ma-2"
            @click="resetSavedSpots"
          >
            <v-icon large>mdi-refresh</v-icon> 
            重設資料
          </v-btn>
          
          <!-- 關閉按鈕，關閉彈出視窗 -->
          <v-btn text color="primary" @click="dialog = false">
            關閉
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false, // 控制彈出視窗的開關
    };
  },
  computed: {
    // 從 Vuex 獲取已儲存的景點清單
    savedSpots() {
      return JSON.parse(localStorage.getItem('savedSpots')) || [];
    },

    // 計算儲存景點的數量
    saveCount() {
      return this.$store.getters.totalSaveCount;
    },
  },
  methods: {
    // 切換彈出視窗的顯示與隱藏
    toggleDialog() {
      this.dialog = !this.dialog;
    },

    // 重設儲存資料的方法
    resetSavedSpots() {
      localStorage.removeItem('savedSpots'); // 移除儲存的資料
      localStorage.setItem("saveCount", "0"); // 重設儲存次數
      this.dialog = false; // 關閉視窗
      window.location.reload(); // 刷新頁面
    },
  },
  mounted() {
    // 初始化時同步儲存次數
    if (!localStorage.getItem("saveCount")) {
      localStorage.setItem("saveCount", "0");
    }
  },
};
</script>

<style scoped>
.speed-dials {
  position: fixed;
  bottom: 50px;
  right: 16px;
  z-index: 1000;
}

v-btn {
  border-radius: 50%; 
  width: 70px;
  height: 70px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
}

v-icon {
  font-size: 30px; 
}

v-dialog {
  border-radius: 8px; 
}

v-card {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

v-btn.fab {
  font-size: 18px; 
}

v-btn.fab v-icon {
  font-size: 24px; 
}
</style>
