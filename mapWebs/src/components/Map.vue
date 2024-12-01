<template>
  <div>
    <div id="map"></div>
    <div class="controls">
      <button @click="clearWaypoints">清空路線</button>
      <label for="travel-mode">選擇交通方式：</label>
      <select id="travel-mode" v-model="travelMode" @change="updateRoute">
        <option value="DRIVING">駕車</option>
        <option value="WALKING">步行</option>
        <option value="BICYCLING">騎車</option>
      </select>
      <button @click="openInGoogleMaps">在 Google Maps 中開啟路線</button>
    </div>
    <div class="waypoints">
      <h3>停靠站</h3>
      <ul>
        <li v-for="(waypoint, index) in waypoints" :key="index">
          {{ waypoint.lat.toFixed(6) }}, {{ waypoint.lng.toFixed(6) }}
          <button @click="removeWaypoint(index)">移除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoutePlanner",
  data() {
    return {
      map: null,
      directionsService: null,
      directionsRenderer: null,
      waypoints: [], // 停靠站座標清單
      origin: { lat: 23.5596292, lng: 120.5977076 }, // 起點 (太平雲梯)
      destination: { lat: 23.5605286, lng: 120.6030455 }, // 終點 (太平老街)
      travelMode: "DRIVING", // 預設交通方式
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const script = document.createElement("script");
      /* script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDt3tx5e1DlrrCHk2TGq-nVsfpqNSMRzdM&callback=initMap`; */
      script.async = true;
      document.head.appendChild(script);

      window.initMap = () => {
        this.map = new google.maps.Map(document.getElementById("map"), {
          center: this.origin,
          zoom: 13,
        });

        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });

        // 設置地圖點擊事件
        this.map.addListener("click", (event) => {
          const newWaypoint = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        /*   this.addStopToItinerary(newWaypoint); */
          this.waypoints.push(newWaypoint);
          this.updateRoute();
        });

        // 繪製初始路線
        this.updateRoute();
      };
    },
    /* addStopToItinerary(waypoint) {
      const stop = {
        image: "https://via.placeholder.com/300",
        description: `停靠站 - ${waypoint.lat.toFixed(6)}, ${waypoint.lng.toFixed(6)}`,
        lat: waypoint.lat,
        lng: waypoint.lng,
      };
      this.$emit("add-stop", stop);
    }, */
    updateRoute() {
      const request = {
        origin: this.origin,
        destination: this.destination,
        waypoints: this.waypoints.map((location) => ({ location, stopover: true })),
        optimizeWaypoints: true, // 啟用停靠站順序最佳化
        travelMode: this.travelMode,
      };

      this.directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsRenderer.setDirections(result);

          // 更新停靠站順序為 API 返回的最佳化順序
          const optimizedOrder = result.routes[0].waypoint_order;
          this.waypoints = optimizedOrder.map((index) => this.waypoints[index]);
        } else {
          console.error("路線規劃失敗:", status);
        }
      });
    },
    clearWaypoints() {
      this.waypoints = []; // 清空停靠站
      this.updateRoute(); // 更新路線
    },
    removeWaypoint(index) {
      this.waypoints.splice(index, 1); // 移除指定的停靠站
      this.updateRoute(); // 更新路線
    },
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
#map {
  width: 100%;
  height: 500px; /* 地圖高度 */
}
.controls {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
select {
  padding: 5px;
  font-size: 14px;
}
.waypoints {
  margin-top: 20px;
}
.waypoints ul {
  list-style-type: none;
  padding: 0;
}
.waypoints li {
  margin-bottom: 5px;
}
.waypoints button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.waypoints button:hover {
  background-color: darkred;
}
</style>
