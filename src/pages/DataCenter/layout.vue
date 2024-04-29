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
  <div class="d-flex" id="global_container">
    <nav id="navigation_container" class="d-flex flex-column">
      <section>
        <UserCard
          :name="userInfo.name"
          :location="userInfo.location"
          :status="userInfo.status"
        />

        <hr class="mt-6" style="border: 1px solid #888888" />
        <ul class="items">
          <v-hover
            v-for="(item, i) in sidebarMenu"
            :key="i"
            v-slot="{ isHovering, props }"
            open-delay="100"
          >
            <li :class="`${isHovering ? 'items-active' : ''}`" v-bind="props">
              {{ item.title }}
            </li>
          </v-hover>
        </ul>
      </section>
      <section class="mt-auto description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
        fugiat perspiciatis? Explicabo autem ex dolor natus doloribus illum
        fugiat voluptate animi.
      </section>
    </nav>
    <router-view />
  </div>
</template>
<style lang="sass" scoped>

#navigation_container
    @include big-shoulders
    background-color: #333334
    color: white
    width: calc( 300px  )
    padding: $vertical-padding
    .items
      list-style: none
      margin-top: 3rem
      font-size: 1.25rem
      color: #888888
      &-active
        cursor: pointer
        color: white
        transform: translateX(3rem)
    .description
      font-size: .8rem
      color: white
</style>
