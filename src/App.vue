<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <section class="container-fluid" id="home-section">
    <div class="row">
      <NavBar />
      <SideBar />
      <RouterView />
      <Footer />
    </div>
  </section>
</template>

<style scoped></style>
