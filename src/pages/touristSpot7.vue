<template>
    <NavigationBar />
    <SpeedDials />
    <v-container>
      <!-- 傳入 Breadcrumbs 的 items -->
      <BreadCrumbs :items="breadcrumbsItems" />
      <Image />
      <Rating />
      <Image />
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        breadcrumbsItems: [
          { title: '首頁', disabled: false, href: '/' },
          { title: '旅遊景點 7', disabled: true },
        ],
      };
    },
  };
  </script>
  