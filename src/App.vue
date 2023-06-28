<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"></RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
