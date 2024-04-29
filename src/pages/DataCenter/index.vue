<template>
  <div id="dashboard_container">
    <v-row no-gutters class="row">
      <v-col class="cols" style="padding: 12px" cols="9"> ola </v-col>
      <v-col>
        <v-col class="aut" style="height: calc(70% - 24px)">red</v-col>
        <v-col class="aut" style="height: calc(30% - 24px)">one</v-col>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="sass" scoped>
#dashboard_container
  @include big-shoulders()
  background-color: #202124
  color: white
  width: 100vw
  .row
    height: 100vh
  .cols
    margin: 16px
    background-color: #333334
  .aut
    margin-block: 16px
    background-color: #333334
</style>
