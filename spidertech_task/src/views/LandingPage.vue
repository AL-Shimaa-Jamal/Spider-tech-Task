<template>
  <div class="main w-100 mt-2">
    <div class="d-none d-lg-block">
      <img src="/image 26.svg" alt="" />
    </div>
    <div class="text-center info ">
      <h2 class="d-block">
        Enhancing everything related to women's charm and allure is our mission.
      </h2>
      <a href="/contactUs" class="btn  ">
        Contact us
      </a>
    </div>
    <div class="d-none d-lg-block">
      <img src="/image 25.svg" alt="" />
    </div>
  </div>
</template>
<script>

</script>
 <style scoped>
.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

}
.main div {
  width: fit-content;
}
h2 {
  width: 500px;
  font-size: 44px;
  font-weight: 500;
  line-height: 66px;
  text-align: center;
}
.btn{
margin: 20px 0;
background-color: rgba(222, 235, 246, 1);
color: black;
border-radius: 20px;
transition: all .4s ease-in-out;
}
.btn:hover{
background-color: rgb(174, 208, 238);
transform: scale(1.2,1.2);
}
@media screen and (max-width:960px) {
  .info{
    width:100% !important;
    display: flex;
    justify-content: center;
    align-items:center ;
    flex-direction: column;
  }
}
</style>