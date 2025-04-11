<template>
  <!-- 我的收藏 -->
  <v-container>
    <!-- 浮動按鈕，愛心圖標 + 顯示收藏數量 -->
    <!-- 拖移移動位置，點擊顯示收藏列表 -->
    <v-btn
      fab
      color="pink"
      class="draggable-button"
      :style="{ top: position.y + 'px', left: position.x + 'px' }"
      @mousedown="startDrag" 
      @click.stop="toggleFavoriteList"
    >
      <!-- 愛心圖標 -->
      <v-icon large>mdi-heart-plus</v-icon>
      <!-- 顯示收藏數量 -->
      <v-badge
        :content="favoriteSpots.length"
        color="red"
        overlap
        class="badge-overlay"
      >
      </v-badge>
    </v-btn>

    <!-- 動態顯示收藏列表 -->
    <div
      v-if="showFavorites"
      class="favorite-list"
      :style="{ top: position.y + 'px', left: position.x - 320 + 'px' }"
    >
      <!-- 收藏列表內容 -->
      <v-card>
        <!-- 列表標題 -->
        <v-card-title class="text-h6">你的收藏</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(spot, index) in favoriteSpots"
              :key="index"
              class="list-item"
            >
              <!-- 景點名稱 -->
              <span class="spot-name">{{ spot }}</span>
              <!-- 刪除按鈕 -->
              <v-btn
                icon
                :size="35"
                @click="removeSpot(index)"
                class="delete-btn"
              >
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Favorites',
  computed: {
    // 從 Vuex 中獲取收藏景點列表
    favoriteSpots() {
      return this.$store.getters.getFavoriteSpots;  
    },
  },
  data() {
    return {
      isDragging: false,
      showFavorites: false,
      position: {
        x: window.innerWidth - 100, // 初始 X 座標（窗口寬度-按鈕寬度）
        y: 100,  // 初始 Y 座標
      },
       // 拖動開始時鼠標與按鈕左上角的偏移量
      offset: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    // 拖動按鈕
    startDrag(event) {
      this.isDragging = true;
      this.offset.x = event.clientX - this.position.x;
      this.offset.y = event.clientY - this.position.y;

      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
    },

    // 拖動過程中的回調函數
    onDrag(event) {
      if (this.isDragging) {
        this.position.x = Math.max(0, event.clientX - this.offset.x);
        this.position.y = Math.max(0, event.clientY - this.offset.y);
      }
    },

    // 結束拖動
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
    },

    // 切換收藏列表的顯示狀態
    toggleFavoriteList() {
      this.showFavorites = !this.showFavorites;
    },

    // 刪除收藏景點
    removeSpot(index) {
      this.$store.commit('removeFavoriteSpot', index); 
    },
  },
};
</script>

<style scoped>
.draggable-button {
  position: fixed;
  cursor: grab;
  z-index: 1000;
  border-radius: 50%;
  width: 60px;
  height: 60px !important;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
}

.v-icon {
  font-size: 24px; /* 明確指定圖標大小 */
  line-height: 1; /* 避免行高影響 */
}

.badge-overlay {
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 14px;
  font-weight: bold;
}


.draggable-button:active {
  cursor: grabbing;
}

.favorite-list {
  position: fixed;
  z-index: 999;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.badge-overlay {
  position: absolute;
  top: -5px; 
  right: -5px;
  font-size: 14px; 
}

.delete-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px; 
}

v-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
}
</style>
