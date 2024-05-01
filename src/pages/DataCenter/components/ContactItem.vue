<template>
  <div class="d-flex" v-for="contact, i in contactList" :key="contact.id">
    <div
        class="d-flex">
      <v-avatar size="40" rounded="lg">
        <v-img src="img/nft_logo.png" alt="kayframe"></v-img>
      </v-avatar>
      <div style="line-height: normal;" class="d-flex flex-column justify-center ml-2">
        <h1 class="name">{{ contact.name }}</h1>
        <h3 class="location">{{ contact.description }}</h3>
      </div>
    </div>
    <div class="ml-auto">
      <v-btn icon="mdi-message-text" color="white" variant="text"/>
      <v-btn icon="mdi-wallet" color="white" variant="text"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { contacts } from '../constants/testItems';

let contactList = contacts;
</script>
<style lang="sass">
.name
    font-weight: 900
    font-size: 1rem
.status
    font-size: .8rem
    &-active
        color: #8BE79A
    &-inactive
        color: #F47B7B
.location
    font-size: .7rem
    color: #888888
</style>
