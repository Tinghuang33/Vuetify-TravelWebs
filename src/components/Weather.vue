<template>
  <!-- 首頁天氣提醒，天氣和空氣品質 -->
  <div class="w3-white w3-margin enlarged-container" style="height: 400px; overflow-y: auto;">
    <div class="w3-container w3-padding w3-black enlarged-header">
      <h4 style="color: bisque;">天氣提醒</h4>
    </div>

    <!-- 顯示天氣和空氣品質資訊的列表 -->
    <ul class="w3-ul w3-hoverable w3-white enlarged-content">
      <!-- 顯示天氣資訊 -->
      <li class="w3-padding-16">
        <img src="https://img95.699pic.com/xsj/1m/zb/95.jpg!/fh/300" 
          alt="Image" 
          class="w3-left w3-margin-right enlarged-img"
          style="width: 300px; height: auto">
        <div>
          <v-skeleton-loader v-if="loading" type="card"></v-skeleton-loader>
          <!-- 如果資料已載入，顯示天氣提醒 -->
          <v-alert v-else :value="true" type="info" class="text-center">
            <strong>{{ weatherInfo }}</strong>
          </v-alert>
        </div>
      </li>

      <!-- 顯示空氣品質資訊 -->
      <li class="w3-padding-16">
        <img src="https://www.hkjh.kh.edu.tw/upload/185/106_9621/%E7%A9%BA%E6%B0%A3%E5%93%81%E8%B3%AA%E6%97%97.png" 
          alt="Image" 
          class="w3-left w3-margin-right enlarged-img" 
          style="width: 300px; height: auto">
        <!-- 如果空氣品質資料有值，顯示 AQI 和狀態 -->
        <div v-if="airQualityInfo.length > 0">
          <strong class="w3-large" v-for="(info, index) in airQualityInfo" :key="index">
            <strong>環境空氣品質指數AQI</strong>
            <br>
            <strong>{{ info.aqi }} - {{ info.status }}</strong>
          </strong>
        </div>
        <p class="w3-large" v-else>載入空氣品質資訊中...</p>
      </li>
    </ul>
  </div>
</template>
  
<script>
  export default {
    name: "Weather",
    data() {
      return {
        weatherInfo: "載入天氣資訊中...",
        loading: true,
        airQualityInfo: [], // 儲存空氣品質數據的陣列
      };
    },
    mounted() {
      // 天氣資料 API URL，帶有授權和查詢參數
      const weatherUrl =
        "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-029?" +
        "Authorization=CWA-A2A89205-5E4E-4807-9CF4-9977030EAA69&" +
        "format=JSON&" +
        "LocationName=%E6%A2%85%E5%B1%B1%E9%84%89&" +
        "ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0&" +
        "sort=time";

      fetch(weatherUrl)
        .then((response) => response.json()) // 將返回的資料轉為 JSON 格式
        .then((data) => {
          // 從返回的資料中提取天氣描述
          const weatherDescription =
            data.records.Locations[0].Location[0].WeatherElement[0].Time[0]
              .ElementValue[0].WeatherDescription;
          const rainMatch = weatherDescription.match(/降雨機率(\d+)%/);
          const tempMatch = weatherDescription.match(/溫度攝氏(\d+至\d+)度/);
          const rainProbability = rainMatch ? rainMatch[1] : "N/A";
          const temperature = tempMatch ? tempMatch[1] : "N/A";
          this.weatherInfo = `降雨機率: ${rainProbability}% 溫度: ${temperature}°C`;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          this.weatherInfo = "無法取得天氣資訊";
          this.loading = false;
        });

      // 空氣品質 API URL
      const aqiUrl =
      "https://data.moenv.gov.tw/api/v2/aqx_p_432?language=zh&offset=38&limit=5&api_key=63a18b98-f485-4b1e-901c-8d081d48dc65";
  
      // 使用 fetch API 獲取空氣品質資料
      fetch(aqiUrl, {
        method: "GET",
        headers: {
          accept: "*/*",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // 過濾資料，只取目標站點
          const filteredData = data.records
            .filter((record) => record.sitename === "新港")
            .map((record) => ({
              aqi: record.aqi,
              status: record.status,
            }));
  
          this.airQualityInfo = filteredData;
        })
        .catch((error) => {
          console.error("Error fetching AQI data:", error);
          this.airQualityInfo = [{ aqi: "無法載入", status: "請稍後再試" }];
        });
    },
  };
  </script>
  