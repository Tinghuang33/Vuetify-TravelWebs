<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
  <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/cwtexyen.css">

  <NavigationBar />
  <Windows />
  <SpeedDials />
  <Favorites />
  <BreadCrumbs :items="breadcrumbsItems" />
  <v-container class=" d-flex flex-no-wrap justify-center" style="max-width:100%;">
    <MapImg />
    <Weather />
  </v-container>
  <VideoPlayer />
  <Cards />
  <VisitCount />
</template>

<script>
export default {
  data() {
    return {
      // 跳轉頁面連結
      breadcrumbsItems: [
        { title: '首頁', disabled: true, href: '/' },
      ],
    };
  },
}
</script>

<style>
  body {
    font-family: "Amatic SC, cwTeXYen", sans-serif;
    background-color: #fefae0;
    margin: 0;
    padding: 0;
  }

  v-container {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    color: #023047;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
  }

  h1, h2, h3, h4, h5, h6 {
    color: #023047;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
  }

  p {
    color: #495057;
    line-height: 1.6;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
  }
</style>
