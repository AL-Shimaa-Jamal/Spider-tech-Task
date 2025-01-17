import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import About from '../views/About.vue'
import Services from '@/views/Services.vue'
import Partenar from '@/views/Partenar.vue'
import ContactUs from '@/views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
      meta:{
        title:"Home"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{
        title:"About"
      }
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      meta:{
        title:"services"
      }
    },
    {
      path: '/Partenar',
      name: 'partenar',
      component: Partenar,
      meta:{
        title:"Partenar"
      }
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUs,
      meta:{
        title:"Contact Us"
      }
    },
   
  ],
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        };
      } else {
        return { top: 0 };
      }
    },
  })



export default router

