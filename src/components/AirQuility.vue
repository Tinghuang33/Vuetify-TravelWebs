<template>
    <v-col cols="12" md="3">
      <v-card>
        <!--v-card-title>空氣品質指標</v-card-title-->
        <!--v-card-subtitle>當地空氣質量</v-card-subtitle-->
        <v-card-text>
          <div v-if="airQualityInfo.length > 0">
            <p v-for="(info, index) in airQualityInfo" :key="index">
              <strong>環境空氣品質指數AQI  </strong>
              <br>
              <span>{{ info.aqi }} - {{ info.status }}</span>
            </p>
          </div>
          <p v-else>載入空氣品質資訊中...</p>
        </v-card-text>
      </v-card>
    </v-col>
  </template>
  
  <script>
  export default {
    name: "AirQualityComponent",
    data() {
      return {
        airQualityInfo: [], // 儲存空氣品質數據的陣列
      };
    },
    mounted() {
      const aqiUrl =
        "https://data.moenv.gov.tw/api/v2/aqx_p_432?language=zh&offset=38&limit=5&api_key=63a18b98-f485-4b1e-901c-8d081d48dc65";
  
      // 獲取空氣品質資料
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