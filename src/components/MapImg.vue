<template>
    <v-col cols="12" md="6">
      <v-card>
        <!--v-card-title>地圖</v-card-title-->
        <!--v-card-subtitle>梅山鄉地理位置</v-card-subtitle-->
        <v-card-text>
          <div id="map"></div>
        </v-card-text>
      </v-card>
    </v-col>
  </template>
  
  <script>
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  export default {
    name: "MapComponent",
    mounted() {
      // 初始化地圖
      const map = L.map("map").setView([23.5523, 120.6315], 12);
  
      L.tileLayer("https://dummyimage.com/256x256/ffffff/ffffff&text=", {
        attribution: "",
        minZoom: 2,
        maxZoom: 19,
      }).addTo(map);
  
      // 加載村莊資料
      fetch(
            "https://raw.githubusercontent.com/Ivy-cc515/meishen_json/refs/heads/main/meishan_village.json"
          )
            .then((response) => response.json())
            .then((data) => {
              L.geoJSON(data, {
                style: { color: "#000000", weight: 1, fillColor: "white", fillOpacity: 1 },
                onEachFeature: function (feature, layer) {
                  // 確認 VILLNAME 存在
                  if (feature.properties && feature.properties.VILLNAME) {
                    // 滑鼠事件
                    layer.on("mouseover", function () {
                      this.setStyle({ fillColor: "green", fillOpacity: 1 });
                      const villageName = feature.properties.VILLNAME;
                      layer.bindPopup(`<b>${villageName}</b>`).openPopup(); // 顯示村名
                    });
  
                    layer.on("mouseout", function () {
                      this.setStyle({ fillColor: "white", fillOpacity: 1 });
                      layer.closePopup(); // 隱藏村名
                    });
                  }
                }
              }).addTo(map);
            })
            .catch((error) => console.error("Error loading GeoJSON:", error));
  
          // 景點資料
          const landmarks = [
            { name: "太平老街", lat: 23.560715433454494, lon: 120.60300257999705, description: "太平老街" },
            { name: "太平雲梯", lat: 23.559696208621773, lon: 120.60013400376674, description: "太平雲梯" },
            { name: "太興飛瀑步道", lat: 23.549641565169864, lon: 120.63412234057702, description: "太興飛瀑步道" },
            { name: "空氣圖書館", lat: 23.560507930320405, lon: 120.60172283766832, description: "空氣圖書館" },
            { name: "梅問屋梅子元氣館", lat: 23.587008461012225, lon: 120.55091391068292, description: "梅問屋梅子元氣館" },
            { name: "仙人堀步道", lat: 23.561776997561864, lon: 120.6126766223257, description: "仙人堀步道" },
            { name: "孝子路步道", lat: 23.561116708363034, lon: 120.60587296650384, description: "孝子路步道" },
          ];
          const defaultIcon = L.icon({
            iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // 預設的 Leaflet 圓形圖標
            iconSize: [25, 41], // 圖標的大小
            iconAnchor: [12, 41], // 圖標的錨點位置
            popupAnchor: [1, -34], // 彈出框的位置
          });
          // 在地圖上添加景點標記
          landmarks.forEach((landmark) => {
            const marker = L.marker([landmark.lat, landmark.lon],{ icon: defaultIcon }).addTo(map);
            marker.bindPopup(`<b>${landmark.name}</b><br>${landmark.description}`);
          });
        },
      };
  </script>
  
  <style scoped>
  #map {
    height: 400px;
  }
  </style>
  