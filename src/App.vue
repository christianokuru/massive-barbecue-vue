<script setup>
import Navbar from './components/custom/Navbar.vue';
import Footer from './components/custom/Footer.vue';
</script>

<template>
  <div>
    <navbar />
    <router-view />
    <Footer />
    <!-- Render the active route's component -->

  </div>
</template>
