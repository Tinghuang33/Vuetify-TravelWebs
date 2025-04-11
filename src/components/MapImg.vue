<template>
  <!-- 首頁梅山區塊地圖 -->
  <v-col cols="12" md="6">
        <div id="map"></div>
  </v-col>
</template>

<script>
// 引入 Leaflet 圖資庫
import L from "leaflet";
// 引入 Leaflet 的樣式
import "leaflet/dist/leaflet.css";
export default {
  name: "MapImg",
  mounted() {
    // 初始化地圖
    const map = L.map("map").setView([23.5523, 120.6315], 12);
    
    // 設定地圖圖層，使用一個 dummy image 來替代
    L.tileLayer("https://dummyimage.com/256x256/ffffff/ffffff&text=", {
      attribution: "",
      minZoom: 2,
      maxZoom: 19,
    }).addTo(map);

    // 加載景點資料（GeoJSON 格式）
    fetch(
          "https://raw.githubusercontent.com/Ivy-cc515/meishen_json/refs/heads/main/meishan_village.json"
        )
          .then((response) => response.json())
          .then((data) => {
            L.geoJSON(data, {
              style: { color: "#000000", weight: 1, fillColor: "orange", fillOpacity: 1 },
              onEachFeature: function (feature, layer) {
                // 確認 VILLNAME 存在
                if (feature.properties && feature.properties.VILLNAME) {
                  // 當滑鼠移到某個區塊上時觸發事件
                  layer.on("mouseover", function () {
                    // 改變區塊的顏色
                    this.setStyle({ fillColor: "green", fillOpacity: 1 });
                    const villageName = feature.properties.VILLNAME;
                    // 彈出框顯示景點名稱
                    layer.bindPopup(`<b>${villageName}</b>`).openPopup();
                  });

                  // 當滑鼠移開時觸發事件
                  layer.on("mouseout", function () {
                    // 恢復區塊的顏色
                    this.setStyle({ fillColor: "orange", fillOpacity: 1 });
                    // 關閉彈出框
                    layer.closePopup(); 
                  });
                }
              }
            }).addTo(map); // 將 GeoJSON 資料加到地圖上
          })
          .catch((error) => console.error("Error loading GeoJSON:", error));

      // 景點資料
      const landmarks = [
        {
          name: "太平老街",
          lat: 23.560715433454494,
          lon: 120.60300257999705,
          description: "太平老街",
          link: "/touristSpot4",
        },
        {
          name: "太平雲梯",
          lat: 23.559696208621773,
          lon: 120.60013400376674,
          description: "太平雲梯",
          link: "/touristSpot2",
        },
        {
          name: "太興飛瀑步道",
          lat: 23.549641565169864,
          lon: 120.63412234057702,
          description: "太興飛瀑步道",
          link: "/touristSpot7",
        },
        {
          name: "空氣圖書館",
          lat: 23.560507930320405,
          lon: 120.60172283766832,
          description: "空氣圖書館",
          link: "/touristSpot3",
        },
        {
          name: "梅問屋梅子元氣館",
          lat: 23.587008461012225,
          lon: 120.55091391068292,
          description: "梅問屋梅子元氣館",
          link: "/touristSpot1",
        },
        {
          name: "仙人堀步道",
          lat: 23.561776997561864,
          lon: 120.6126766223257,
          link: "/touristSpot6",
        },
        {
          name: "孝子路步道",
          lat: 23.561116708363034,
          lon: 120.60587296650384,
          link: "/touristSpot5",
        },
      ];

      // 定義 Leaflet 預設的標記圖標
      const defaultIcon = L.icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // 預設的 Leaflet 圓形圖標
        iconSize: [25, 41], // 圖標的大小
        iconAnchor: [12, 41], // 圖標的錨點位置
        popupAnchor: [1, -34], // 彈出框的位置
      });
      
      // 在地圖上添加景點標記
      landmarks.forEach((landmark) => {
        const marker = L.marker([landmark.lat, landmark.lon],{ icon: defaultIcon }).addTo(map);
        // 綁定彈出框，當用戶點擊標記時顯示景點名稱並跳轉
        marker.bindPopup(`<b><a href="${landmark.link}">${landmark.name}</a></b>`);
      });
    },
  };
</script>

<style scoped>
#map {
  height: 400px;
}
</style>
