<template>
    <v-card>
      <v-main>
        <v-container>
          <NavigationBar />
          <SpeedDials  />
          <!-- 父層監聽 Map 傳遞的 add-stop 事件 -->
          <Map @add-stop="addStopToItinerary" />
          <!-- 父層監聽 ItineraryList 傳遞的 update-itineraries 事件 -->
          <ItineraryList :itineraries="itineraries" @update-itineraries="updateItineraries" />
          <TouristRoutePlanner />
        </v-container>
      </v-main>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        itineraries: [], // 父層用於存儲行程的主數據
      };
    },
    methods: {
      // 用於接收 Map 傳遞的 add-stop 事件
      addStopToItinerary(stop) {
        this.itineraries.push(stop); // 添加新停靠站到行程
      },
      // 用於接收 ItineraryList 傳遞的 update-itineraries 事件
      updateItineraries(updatedItineraries) {
        this.itineraries = updatedItineraries; // 更新父層的行程數據
      },
    },
  };
  </script>
  