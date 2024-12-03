<template>
    <NavigationBar />
    <Windows class="my-6"/>
    <MapImg />
    <AirQuility />
    <Weather />
    <SpeedDials />
  <v-container>
    <!-- 傳入 Breadcrumbs 的 items -->
    <BreadCrumbs :items="breadcrumbsItems" />
    <Cards />
    <VisitCount />
  </v-container>
</template>

<script>
  export default {
    /* data: () => ({
      tab: null,
    }), */
    data() {
      return {
        breadcrumbsItems: [
          { title: '首頁', disabled: true, href: '/' },
        ],
      };
    },
  }
</script>
