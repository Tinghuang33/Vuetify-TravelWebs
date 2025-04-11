<template>
  <!-- 行程規劃頁面(itinerary page)的地圖 -->
  <div class="app-container">
    <!-- 顯示地圖 -->
    <div id="map"></div>

    <!-- 控制按鈕和選單 -->
    <div class="controls">
      <button @click="clearWaypoints">清空路線</button>
      <label for="travel-mode" class="w3-black">選擇交通方式：</label>
      <select id="travel-mode" class="w3-black" v-model="travelMode" @change="updateRoute">
        <option value="DRIVING">開車</option>
        <option value="WALKING">步行</option>
        <option value="BICYCLING">騎車</option>
      </select>
      <button @click="openInGoogleMaps">在 Google Maps 中開啟路線</button>
    </div>
  </div>

  <!-- 行程規劃區塊 -->
  <!-- 顯示最初的起終點，以及使用者添加的停靠站 -->
  <div class="w3-content" style="max-width:2000px;margin-top:46px">
    <div class="w3-black" id="tour">
      <h2 class="w3-wide w3-center">路線資訊</h2>
      <p class="w3-opacity w3-center"><i>規劃您的行程</i></p><br>

      <div class="w3-row-padding w3-padding-32" style="margin:0 -16px">
        <!-- 起點區塊 -->
        <div class="w3-half w3-margin-bottom">
          <div class="card">
            <p style="color:black; font-size:20px"><b>起點：嘉義縣梅山鄉公所</b></p>
            <button class="btn-primary">起點</button>
          </div>
        </div>

        <!-- 終點區塊 -->
        <div class="w3-half w3-margin-bottom">
          <div class="card">
            <p style="color:black; font-size:20px"><b>終點：太平雲梯服務中心</b></p>
            <button class="btn-primary">終點</button>
          </div>
        </div>

        <!-- 動態生成停靠站 -->
        <div class="w3-half w3-margin-bottom" v-for="(waypoint, index) in waypoints" :key="index">
          <div class="card">
            <p style="color:black; font-size:20px"><b>停靠站 {{ index + 1 }}：{{ waypoint.name }}</b></p>
            <button class="btn-secondary" @click="removeWaypoint(index)">移除停靠站</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Favorites />
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      map: null,
      directionsService: null,
      directionsRenderer: null,
      waypoints: [], // 停靠站座標清單
      origin: { lat: 23.5851343, lng: 120.5555114 }, // 起點
      destination: { lat: 23.5595469, lng: 120.6001357 }, // 終點
      travelMode: "DRIVING", // 預設交通方式
    };
  },
  computed: {
    // 從 localStorage 獲取已儲存的景點清單
    savedSpots() {
      return JSON.parse(localStorage.getItem('savedSpots')) || [];
    },
  },
  watch: {
    // 監控 savedSpots，當資料改變時更新地圖標記
    savedSpots: {
      immediate: true,
      handler(newSpots) {
        this.waypoints = newSpots.map((spot) => ({
          name: spot.name,
          lat: spot.latitude,
          lng: spot.longitude,
        }));
        this.updateMarkers(); // 更新地圖上的標記
        this.updateRoute(); // 更新路線
      },
    },
  },
  mounted() {
    // 初始化 Google Maps
    this.loadGoogleMapsAPI();
  },
  methods: {
    loadGoogleMapsAPI() {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDt3tx5e1DlrrCHk2TGq-nVsfpqNSMRzdM&callback=initMap`; //API
      script.onload = () => {
        // API 加載完成後調用 initMap
        this.initMap();
      };
      document.head.appendChild(script);
    },
    initMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: this.origin,
        zoom: 13,
      });

      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });

      this.map.addListener("click", (event) => {
        const newWaypoint = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        this.waypoints.push(newWaypoint);
        this.updateRoute();
      });

      this.updateRoute(); // 初始化路線
    },
    refreshWaypoints() {
      // 從 localStorage 加載停靠站資料
      this.waypoints = this.savedSpots.map((spot) => ({
        name: spot.name,
        lat: spot.latitude,
        lng: spot.longitude,
      }));
      this.updateMarkers();
      this.updateRoute();
    },
    updateMarkers() {
      // 確保 Google Maps API 已經加載後再更新標記
      if (typeof google === 'undefined') {
        console.error("Google Maps API 尚未加載完畢");
        return;
      }
      // 移除地圖上所有舊標記
      if (this.markers) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      // 新增新標記到地圖
      // 新增 Vuex 停靠站的標記
      this.markers = this.waypoints.map((waypoint) => {
        return new google.maps.Marker({
          position: waypoint,
          map: this.map,
          title: `停靠站: ${waypoint.lat.toFixed(7)}, ${waypoint.lng.toFixed(7)}`,
        });
      });
    },

    // 初始化路線，更新路縣
    updateRoute() {
      if (!this.directionsService || !this.directionsRenderer) return;

      const request = {
        origin: this.origin,
        destination: this.destination,
        waypoints: this.waypoints.map((wp) => ({ location: wp, stopover: true })),
        optimizeWaypoints: true,
        travelMode: this.travelMode,
      };

      this.directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsRenderer.setDirections(result);
        } else {
          console.error("路線規劃失敗:", status);
        }
      });
    },

    // 清空停靠站
    clearWaypoints() {
      this.waypoints = []; 
      this.updateRoute();
    },

    // 移除指定停靠站
    removeWaypoint(index) {
      this.waypoints.splice(index, 1); 
      this.updateRoute(); 
    },

    // 在Google Map 中打開
    openInGoogleMaps() {
      const baseUrl = "https://www.google.com/maps/dir/?api=1";
      const origin = `&origin=${this.origin.lat},${this.origin.lng}`;
      const destination = `&destination=${this.destination.lat},${this.destination.lng}`;
      const waypoints =
        this.waypoints.length > 0
          ? `&waypoints=${this.waypoints.map((wp) => `${wp.lat},${wp.lng}`).join("|")}`
          : "";
      const travelMode = `&travelmode=${this.travelMode.toLowerCase()}`;

      const url = `${baseUrl}${origin}${destination}${waypoints}${travelMode}`;
      window.open(url, "_blank"); // 在新視窗中開啟 Google Maps
    },
  },
};
</script>

<style scoped>
.app-container {
  background: url('/window/02.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 20px;
}

#map {
  margin: 100px;
  height: 700px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.controls {
  margin: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

button {
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button:active {
  background-color: #003f7f;
  transform: translateY(0);
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(38, 143, 255, 0.6);
}

label[for="travel-mode"] {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-right: 15px;
  padding: 10px 15px;
  background-color: #007bff;
  border-radius: 5px;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;
}

label[for="travel-mode"]:hover {
  background-color: #0056b3;
}

label[for="travel-mode"]:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(38, 143, 255, 0.4);
}

select {
  padding: 8px 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.3s;
}

select:hover,
select:focus {
  border-color: #007bff;
}

.card {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.coordinates {
  font-size: 0.9em;
  color: #777;
}

.image-card {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.btn-primary {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #218838;
}

.btn-secondary {
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-secondary:hover {
  background-color: #c82333;
}
</style>
