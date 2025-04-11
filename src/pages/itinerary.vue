<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
  <NavigationBar />
  <SpeedDials />
  <!-- 父層監聽從 Map 傳遞過來的 add-stop 事件 -->
  <!-- 當 Map 元件發出 add-stop 事件時，觸發 addStopToItinerary 方法 -->
  <Map @add-stop="addStopToItinerary" />
</template>
  
<script>
export default {
  name: "App",
  data() {
    return {
      // 用於存儲行程數據的數組，將會包含每一個停靠站
      itineraries: [], 
    };
  },
  methods: {
    // 處理 Map 傳遞過來的 add-stop 事件的方法
    // 接收一個參數 stop，並將其新增到行程列表中
    addStopToItinerary(stop) {
      this.itineraries.push(stop); // 添加新停靠站到行程
    },
  },
};
</script>
  