<template>
  <div class="main shadow fixedNav">
    <div
      class="logo-lang d-flex justify-content-between align-items-center p-3"
    >
      <div class="logo">
        <img src="/Logo.svg" alt="logo" />
      </div>
      <div class="lang">
        <select name="Language" id="">
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
    <div class="nav">
      <ul class="list-unstyled d-flex" v-for="rout in Routers" :key="rout.name">
        <li>
          <router-link to="./" class="m-2 text-decoration-none text-dark">
            {{ rout.meta.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Routers: [],
    };
  },
  methods: {},
  mounted() {
    this.Routers = this.$router.options.routes;
  },
};
</script>
<style scoped>
.fixedNav {
  position: fixed;
  z-index: 1;
  width: 100vw;
}
</style>