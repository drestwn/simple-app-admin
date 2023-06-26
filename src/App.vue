<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />

  <section class="container-fluid" id="home-section">
    <div class="row">
      <SideBar />
      <RouterView />
      <Footer />
    </div>
  </section>
</template>

<style scoped></style>
