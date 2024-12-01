<template>
    <v-row>
      <v-col cols="12" md="6" v-for="(itinerary, index) in itineraries" :key="index">
        <v-card>
          <v-img :src="itinerary.image" height="200px"></v-img>
          <v-card-text>
            <p>{{ itinerary.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="editItinerary(index)">編輯行程</v-btn>
            <v-btn color="red" text @click="deleteItinerary(index)">刪除行程</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: "ItineraryList",
    data() {
      return {
        itineraries: [
          {
            image: "https://via.placeholder.com/300",
            description: "太平雲梯",
          },
          {
            image: "https://via.placeholder.com/300",
            description: "太平老街",
          },
        ],
      };
    },
    methods: {
      editItinerary(index) {
        alert(`編輯行程：${this.itineraries[index].description}`);
      },
      deleteItinerary(index) {
        this.itineraries.splice(index, 1);
      },
    },
  };
  </script>
  