<template>
    <NavigationBar />
    <Windows class="my-6"/>
    <SpeedDials />
  <v-container>
    <BreadCrumbs />
    <Cards />
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>
