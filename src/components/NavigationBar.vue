<template>
    <v-card>
      <v-tabs 
      v-model="tab" 
      align-tabs="center" 
      color="deep-purple-accent-4"
      height="50"
      >
        <v-tab class="text-h6"
          :value="1"
          :to="{ path: '/' }"
          >首頁
        </v-tab>
        <v-tab class="text-h6"
          :value="2"
          :to="{ path: '/itinerary' }"
          >自訂行程
        </v-tab>
        <v-tab class="text-h6"
          :value="3"
          :to="{ path: '/activity' }"
          >特別活動</v-tab
        >
        <v-tab class="text-h6"
          :value="4"
          :to="{ path: '/itinerary' }"
          >在地美食
        </v-tab>
      </v-tabs>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "NavigationBar",
  };
  </script>
  