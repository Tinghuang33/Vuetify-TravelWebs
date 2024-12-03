<template>
    <v-col cols="12" md="3">
      <v-card>
        <!--v-card-title>天氣資訊</v-card-title-->
        <!--v-card-subtitle>當地天氣狀況</v-card-subtitle-->
        <v-card-text>
            <p v-if="weatherInfo">{{ weatherInfo }}</p>
            <p v-else>載入天氣資訊中...</p>
        </v-card-text>
      </v-card>
    </v-col>
  </template>
  
  <script>
  export default {
    name: "WeatherComponent",
    data() {
      return {
        weatherInfo: "載入天氣資訊中...",
      };
    },
    mounted() {
      const weatherUrl =
        "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-029?" +
        "Authorization=CWA-A2A89205-5E4E-4807-9CF4-9977030EAA69&" +
        "format=JSON&" +
        "locationName=%E6%A2%85%E5%B1%B1%E9%84%89&" +
        "elementName=WeatherDescription&" +
        "sort=time";
  
      fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
          const weatherDescription =
            data.records.locations[0].location[0].weatherElement[0].time[0]
              .elementValue[0].value;
          const rainMatch = weatherDescription.match(/降雨機率\s(\d+)%/);
          const tempMatch = weatherDescription.match(/溫度攝氏(\d+)/);
          const rainProbability = rainMatch ? rainMatch[1] : "N/A";
          const temperature = tempMatch ? tempMatch[1] : "N/A";
          this.weatherInfo = `降雨機率: ${rainProbability}%   溫度: ${temperature}°C`;
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    },
  };
  </script>
  