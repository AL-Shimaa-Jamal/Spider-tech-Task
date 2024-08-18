<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LandingPage from './views/LandingPage.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
    <div class="main">

        <NavBar/>
        <LandingPage/>
    </div>

</template>

<style scoped>
.main{
    position: relative;
}
</style>