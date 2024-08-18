<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import LandingPage from "./views/LandingPage.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Partenar from "./views/Partenar.vue";
import ContactUs from "./views/ContactUs.vue";
</script>

<template>
  <div class="main">
    <NavBar />
    <LandingPage />
    <About />
    <Services />
    <Partenar />
    <ContactUs />
  </div>
</template>

<style scoped>
.main {
  position: relative;
  overflow: hidden;
}
</style>