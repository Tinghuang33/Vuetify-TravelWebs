<template>
    <v-col cols="12">
      <v-card>
        <!--v-card-title>瀏覽人次</v-card-title-->
        <v-card-text>
          <p>{{ visitCountText }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </template>
  
  <script>
  import { ref, onValue } from "firebase/database";
  import { database } from "@/firebase"; // 您需要在此處配置Firebase
  export default {
    name: "VisitCounterComponent",
    data() {
      return {
        visitCountText: "已造訪此頁人次：0",
      };
    },
    mounted() {
      const visitCounterRef = ref(database, "visitCount");
      onValue(visitCounterRef, (snapshot) => {
        const visitCount = snapshot.val() || 0;
        this.visitCountText = `已造訪此頁人次：${visitCount}`;
      });
    },
  };
  </script>
  