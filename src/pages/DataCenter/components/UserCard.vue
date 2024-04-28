<template>
  <v-card
    id="card_container"
    elevation="0"
    height="80"
    class="py-0 d-flex justify-space-around align-center"
  >
    <v-avatar size="80" rounded="lg">
      <v-img src="img/nft_logo.png" alt="kayframe"></v-img>
    </v-avatar>
    <v-card-text class="info">
      <h1 class="name">{{ name }}</h1>
      <h3 :class="`status-${togleStatusColor}`">{{ status }}</h3>
      <h3 class="location">{{ location }}</h3>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const { status, name } = defineProps({
  name: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: 'Inactive',
  },
  location: {
    type: String,
    default: '',
  },
});
let togleStatusColor = computed({
  get() {
    return status.toLowerCase();
  },
  set() {},
});
</script>
<style lang="sass" scoped>
#card_container
    padding: 1rem
    background-color: transparent
.info
  color: white
  padding: 0 0 0 1rem
  line-height: normal
  .name
    font-weight: 900
  .status
    &-active
      color: #8BE79A
    &-inactive
      color: #F47B7B
  .location
    color: #888888
</style>
