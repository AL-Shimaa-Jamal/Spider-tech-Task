<template>
  <div class="d-flex justify-content-between About">
    <div class="d-none d-lg-block">
      <img src="/image 44.svg" alt="" />
    </div>
    <div class="aboutContent ms-5 ps-4">
      <h3 class="text-capitalize d-block mb-5">about us</h3>
      <p class="d-block pt-5 w-75">
        From ancient times to the present day, our journey continues to bring
        the best to the modern woman. We draw inspiration from our rich heritage
        and blend it with contemporary touches to offer you a diverse range of
        products that reflect the elegance and sophistication of the past with a
        modern twist.
      </p>
      <div>
        <h4>Values</h4>
        <ul class="list-unstyled">
          <li>Sustainability</li>
          <li>Women's Empowerment</li>
          <li>Innovation and Creativity</li>
          <li>Excellent Customer Service</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.About {
  margin: 17% 0;
}
h3 {
  font-size: 140px;
  font-weight: 100;
  line-height: 128.8px;
}
p {
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
h4 {
  font-size: 48px;
  font-weight: 700;
  line-height: 44.16px;
  margin: 5% 0;
}
ul li {
  width: 80%;
  padding: 10px 16px;
  margin: 2% 0;
  border-top-left-radius: 12px;
  background: rgba(244, 244, 244, 1);
  transition: all .5s ease-in-out;
}
ul li:hover {
transform: scale(1.1,1.1);
}
/*  responce */
@media screen and (max-width: 1100px) {
  .About {
    margin: 30% 0;
  }
  h3 {
    font-size: 70px;
    font-weight: 100;
    line-height: 100.8px;
  }

  h4 {
    font-size: 29px;
  }
}
@media screen and (max-width: 815px) {
  h3 {
    font-size: 70px;
    line-height: 11.8px;
  }
}
</style>