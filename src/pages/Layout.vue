<template>
  <v-layout class="d-flex flex-column">
    <v-container fluid class="pa-0">
      <nav-bar />
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-layout>
</template>
<script>
import NavBar from "../components/landing/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>