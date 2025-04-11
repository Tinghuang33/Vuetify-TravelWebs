import { createStore } from "vuex";

// 主 Store
const store = createStore({
  state() {
    return {
      savedSpots: JSON.parse(localStorage.getItem("savedSpots")) || [], // 從 localStorage 初始化
      markers: [], // 用於存放地圖上的標記
      saveCount: parseInt(localStorage.getItem("saveCount")) || 0, // 從 localStorage 初始化儲存次數
      favoriteSpots: JSON.parse(localStorage.getItem("favoriteSpots")) || [], // 從 localStorage 初始化收藏景點
    };
  },
  mutations: {
    // 用於新增景點
    savedSpots(state, spot) {
      state.savedSpots.push(spot); // 將景點資訊新增到儲存的列表中
      state.saveCount++;  
      // 將數據同步到 localStorage
      localStorage.setItem("savedSpots", JSON.stringify(state.savedSpots));
      localStorage.setItem("saveCount", state.saveCount.toString());        // 增加儲存次數
    },
    // 重設儲存的景點及計數
    resetSavedSpots(state) {
      state.savedSpots = []; // 清空儲存列表
      state.saveCount = 0; // 重設儲存次數
      localStorage.setItem("savedSpots", JSON.stringify(state.savedSpots));
      localStorage.setItem("saveCount", state.saveCount.toString());
    },
    // 設定初始景點資料
    setSpots(state, spots) {
      state.savedSpots = spots;
      localStorage.setItem("savedSpots", JSON.stringify(spots));
    },
    // 收藏景点
    addFavoriteSpot(state, name) {
      // 檢查景點名稱是否已經在收藏中
      if (!state.favoriteSpots.includes(name)) {
        state.favoriteSpots.push(name);  // 加入新的景點名稱
        localStorage.setItem("favoriteSpots", JSON.stringify(state.favoriteSpots)); // 更新 localStorage
      }
    },
    // 移除收藏的景点
    removeFavoriteSpot(state, index) {
      state.favoriteSpots.splice(index, 1);
      localStorage.setItem("favoriteSpots", JSON.stringify(state.favoriteSpots)); // 更新 localStorage
    },
  },

  actions: {
    // 保存景点
    savedSpots({ commit }, spot) {
      // 呼叫對應的 Mutation
      commit("saveSpot", spot);
    },
  },

  getters: {
    // 獲取所有已儲存景點
    savedSpots: (state) => state.savedSpots,
    // 獲取儲存次數
    totalSaveCount: (state) => state.saveCount,
    // 獲取收藏的景點
    getFavoriteSpots: state => state.favoriteSpots,
  },
});

export default store;
