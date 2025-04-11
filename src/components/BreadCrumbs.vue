<template>
  <!-- 網頁跳轉頁面的部分  -->
  <!-- 內容放在各個page中(breadcrumbsItems) --> 
  <div class="w3-container w3-black w3-xxlarge">
      <v-breadcrumbs :items="items">
        <template v-slot:title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style scoped>
/* Import a custom font from Google Fonts */
@import url('https://fonts.googleapis.com/earlyaccess/cwtexyen.css');

.w3-container {
  padding: 16px;
}

.v-breadcrumbs {
  font-size: 1em;
  font-weight: 500;
  color: hsl(125, 58%, 54%);
  font-family: 'cwTeXYen', sans-serif;
  background-color: #76a4a764;
  padding: 10px 20px;
  border-radius: 5px;
}

.v-breadcrumbs .v-breadcrumbs-item {
  margin: 0 8px;
}

.v-breadcrumbs .v-breadcrumbs-item:hover {
  color: #1e7a1e; 
  cursor: pointer;
}

.v-breadcrumbs .v-breadcrumbs-item::after {
  content: '/';
  margin: 0 8px;
  color: #279227;
}

.v-breadcrumbs .v-breadcrumbs-item:last-child::after {
  content: '';
}

.v-breadcrumbs .v-breadcrumbs-item:first-child {
  color: #1976D2; 
}

.v-breadcrumbs .v-breadcrumbs-item:last-child {
  font-weight: bold;
  color: #444;
}
</style>
