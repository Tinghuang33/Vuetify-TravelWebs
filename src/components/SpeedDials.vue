<template>
    <v-speed-dial
      location="bottom end"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props: activatorProps }">
          <v-fab
              v-bind="activatorProps"
              :size="size"
              :icon="icon"
              color="primary"
              style="position: fixed; z-index: 1;"
          ></v-fab>
      </template>

      <v-btn
          v-for="(btn, index) in buttons"
          :key="index"
          :icon="btn.icon"
          :color="btn.color"
          @click="btn.onClick"
      ></v-btn>
    </v-speed-dial>
</template>

<script>
  export default {
    name: "SpeedDial",
    props: {
      size: {
        type: String,
        default: "large",
      },
      icon: {
        type: String,
        default: "$vuetify",
      },
      buttons: {
        type: Array,
        default: () => [
          { icon: "$success", color: "green", onClick: () => alert("Success clicked!") },
          { icon: "$info", color: "blue", onClick: () => alert("Info clicked!") },
          { icon: "$warning", color: "orange", onClick: () => alert("Warning clicked!") },
          { icon: "$error", color: "red", onClick: () => alert("Error clicked!") },
        ],
      },
    },
  };
</script>
  