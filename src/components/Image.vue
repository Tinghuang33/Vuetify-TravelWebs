<template>
    <v-row>
      <!-- Introductory Text at the Top with Increased Size and Full Width -->
      <v-col class="d-flex align-center justify-center" cols="12">
        <v-card class="pa-4" elevation="2" max-width="100%">
          <v-card-title class="headline display-1 text-center">Image Introduction</v-card-title>
          <v-card-text class="text-body-1">
            This is an introductory section for the images. Here you can explain what the images represent or provide additional context. The text has been made larger to match the width of the images.
          </v-card-text>
        </v-card>
      </v-col>
  
      <!-- Loop through the images starting from the second item -->
      <template v-for="(image, imgIdx) in imageLayout.slice(1)" :key="imgIdx">
        <v-col :cols="image.cols" v-if="!image.children">
          <v-img
            :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
            height="100%"
            cover
          ></v-img>
        </v-col>
  
        <v-col v-if="image.children" class="d-flex flex-column" cols="6">
          <v-row>
            <v-col v-for="(children, childIdx) in image.children" :key="childIdx" :cols="children.cols">
              <v-img
                :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
                height="100%"
                cover
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </template>
    </v-row>
  </template>
  
  <script setup>
  const imageLayout = [
    { cols: 4 }, // This will be removed (the first image)
    {
      cols: 8,
      children: [{ cols: 12 }, { cols: 12 }],
    },
    { cols: 6 },
    { cols: 3 },
    { cols: 9 },
    { cols: 4 },
    { cols: 8 },
  ]
  </script>
  