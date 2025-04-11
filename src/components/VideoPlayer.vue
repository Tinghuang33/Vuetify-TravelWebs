<template>
  <!-- 首頁影片 -->
  <v-container class="video-player-container" fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- 影片播放器 -->
        <v-card outlined class="video-card">
          <!-- 影片標題 -->
          <v-card-title class="video-card-title">
            <span style="color: aliceblue;">梅山紀錄片</span>
          </v-card-title>

          <!-- 影片內容 -->
          <v-card-text>
            <video
              ref="video"
              class="video-element"
              controls
              :src="videoUrl"
              style="width: 100%; height: 600px;"
            >
              您的瀏覽器不支援 HTML5 影片播放。
            </video>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    // 影片URL
    videoUrl: {
      type: String,
      required: true,
      default: "https://mapwebs-project-6ceed.web.app/video.mp4",
    },
  }
};
</script>

<style scoped>
.video-player-container {
  padding: 40px 20px;
  background: url('/window/02.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative;
}

.video-player-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); 
  z-index: 0;
}

.video-card {
  position: relative;
  z-index: 1; 
  border-radius: 16px;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.15);
  background-color: rgba(35, 39, 37, 0.07);
}

.video-card-title {
  font-size: 24px;
  font-weight: bold;
  color: #4a4a4a;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.video-element {
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
