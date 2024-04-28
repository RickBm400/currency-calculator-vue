<script setup>
import UserCard from './components/UserCard.vue';

let userInfo = {
  name: 'Darius Loca',
  status: 'Active',
  location: 'Camboya',
};
</script>
<template>
  <div class="d-flex">
    <nav id="navigation_container">
      <UserCard
        :name="userInfo.name"
        :location="userInfo.location"
        :status="userInfo.status"
      />
    </nav>
    <router-view style="width: 100vw; height: 100vh" />
  </div>
</template>
<style lang="sass" scoped>
$vertical-padding: 1rem

#navigation_container
    @include big-shoulders
    background-color: #333334
    color: white
    width: calc( 300px - $vertical-padding )
    padding: $vertical-padding
</style>
