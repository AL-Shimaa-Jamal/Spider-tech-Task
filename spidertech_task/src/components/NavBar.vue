<template>
  <div class="main fixedNav">
    <!-- logo and language  -->
    <div
      class="logo-lang d-flex justify-content-between align-items-center p-2"
    >
      <div class="logo">
        <img src="/Logo.svg" alt="logo" width="90%" />
      </div>
      <div class="lang">
        <select name="Language" id="">
          <option class="p-2 mb-3" value="English">English</option>
          <option class="p-2 mb-3" value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
    <!-- links and media links -->
    <div class="navbar navbar-expand-lg ms-3 me-3">
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#Content"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="Content">
        <div class="d-lg-flex justify-content-between  w-100">
          <!-- Router Links -->
          <div class="d-lg-flex">
            <ul class="list-unstyled d-lg-flex">
              <li v-for="rout in Routers" :key="rout.name">
                <router-link
                  :to="rout.path"
                  class="m-2 text-decoration-none text-dark nav-link"
                >
                  {{ rout.meta.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <!-- Social Media Links -->
          <div class="d-flex ">
            <ul class="list-unstyled d-flex social">
              <li>
                <a href="http://www.twitter.com" target="_blank">
                  <img src="/twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="http://www.facebook.com" target="_blank">
                  <img src="/facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="http://www.instgram.com" target="_blank">
                  <img src="/instagram.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 2px -2px gray;
}
select {
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
}
select:hover {
  border-bottom: 1px solid black;
  font-weight: 500;
  letter-spacing: 1.2px;
}
.social li {
  cursor: pointer;
  margin: 4%;
}
a img {
  width: 20px;
  transition: all 0.6s ease-in-out;
}
a img:hover {
  transform: scale(1.2, 1.2);
  box-shadow: 5px 5px 10px gainsboro;
}
@media screen and (max-width:820px) {
  .logo{
    width: 35%;
  }
}
</style>