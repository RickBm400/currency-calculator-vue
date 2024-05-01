<template>
  <div id="dashboard_container">
    <v-row no-gutters class="row">
      <v-col class="cols_graphs" cols="9"> Graphs </v-col>
      <v-col cols="3">
        <v-col class="cols_coins" style="height: 70%">Coins</v-col>
        <v-col class="cols_contacts overflow-y-auto" style="height: 30%">
          <ContactItem/>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts" setup>
import ContactItem from './components/ContactItem.vue';
</script>
<style lang="sass" scoped>
#dashboard_container
  @include big-shoulders()
  background-color: #202124
  color: white
  width: 100vw
  .row
    height: 100vh
  .cols
    padding: 16px
    &_graphs
      padding: 12px
    &_coins
      background-color: green
    &_contacts
      padding: 16px
      &::-webkit-scrollbar
        width: 5px
      &::-webkit-scrollbar-thumb
        background: #333334
</style>
