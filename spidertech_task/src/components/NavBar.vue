<template>
  <div class="main  fixedNav">
    <!-- logo and language  -->
    <div
      class="logo-lang d-flex justify-content-between align-items-center p-2" >
      <div class="logo">
        <img src="/Logo.svg" alt="logo" width="90%" />
      </div>
      <div class="lang">
        <select name="Language" id="">
          <option class="p-2 mb-3 " value="English">English</option>
          <option class="p-2 mb-3 " value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
    <!-- links and media links -->
    <div class="nav d-flex justify-content-between ms-3 me-3 ">
      <div class="d-flex ">
        <ul class="list-unstyled  " v-for="rout in Routers" :key="rout.name">
          <li>
            <router-link to="./" class="m-2 text-decoration-none text-dark">
              {{ rout.meta.title }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-between  ">
        <ul class=" list-unstyled d-flex  social">
          <li>
            <a href="http://www.twitter.com" target="_blank" >
              <img src="/twitter.svg" alt="">
            </a>
          </li>
          <li>
            <a href="http://www.facebook.com" target="_blank" >
            <img src="/facebook.svg" alt="">
          </a>
          </li>
          <li>
            <a href="http://www.instgram.com" target="_blank" >
              <img src="/instagram.svg" alt="">
            </a>
          </li>
        </ul>
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
select{
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
}
select:hover{
border-bottom:1px solid black ;
font-weight: 500;
letter-spacing: 1.2px;
}
.social li{
cursor: pointer;
  margin: 4%;

}
a img{
  width: 20px;
  transition: all .6s ease-in-out;
}
a img:hover{
transform: scale(1.2,1.2);
box-shadow: 5px 5px 10px gainsboro;
}

</style>