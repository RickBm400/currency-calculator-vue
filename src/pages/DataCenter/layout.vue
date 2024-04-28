<script setup>
import UserCard from './components/UserCard.vue';
import { sidebarMenu } from './constants/labels';

let userInfo = {
  name: 'Darius',
  status: 'Inactive',
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

      <hr class="mt-6" style="border: 1px solid #888888; margin-inline: 1rem" />
      <ul class="items">
        <v-hover
          v-for="(item, i) in sidebarMenu"
          :key="i"
          v-slot="{ isHovering, props }"
        >
          <li :class="`${isHovering ? 'items-active' : ''}`" v-bind="props">
            {{ item.title }}
          </li>
        </v-hover>
      </ul>
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
    .items
      list-style: none
      margin-top: 3rem
      font-size: 1.25rem
      color: #888888
      padding-inline: $vertical-padding
      &-active
        cursor: pointer
        color: white
        transform:translateX(3rem)
</style>
