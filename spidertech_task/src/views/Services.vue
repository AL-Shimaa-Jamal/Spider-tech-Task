<template>
  <section class="main">
    <div class="d-flex justify-content-center p-2 m-4">
      <img src="/Frame 120.svg" alt="" />
    </div>
    <div class="container p-3 m-3 d-flex justify-content-center">
      <p class="w-75 text-center">
        GOOCHIE is a leading Chinese brand in permanent makeup, founded in 1996.
        It offers a variety of devices and pigments to meet global market needs,
        with a wide network of agents in over 64 countries. The brand focuses on
        providing high-quality products and professional, safe services to users
        worldwide​.
      </p>
    </div>
    <div class="container bg-light slid">
      <h3>Duogel Product Showcase</h3>
      <ul class="list-unstyled d-flex justify-content-between p-2">
        <li v-for="(link, i) in links" :key="i">
          <a href="" :class="{ clicked  : notClick }" @click="hoverStyle">{{
            link
          }}</a>
        </li>
      </ul>
      <div>
        <ul class="cards d-flex justify-content-center align-items-center">
          <li v-for="(img, i) in images" :key="i" class="text-center">
            <img :src="img.src" :alt="img.alt" class="d-block" />
            <span class="p-2 w-100">{{ img.description }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      links: [
        "Devices",
        "UV gel nail polishes",
        "Nail art",
        "Accessories",
        "UV Gels",
        "Liquids / Preparations",
        "Care",
        "Disinfection / Hygiene",
        "Acrylics",
        "Outlet",
        "Collections",
      ],
      images: [
        {
          src: "/new-duo-sugar-lemon.webp.svg",
          alt: "image",
          description: "New Due Sugar lemon",
        },
        {
          src: "/new-duo-gabki-do-ombre.webp.svg",
          alt: "image",
          description: "New Due Ombre Sponges",
        },
        {
          src: "/folia-transferowa-silver-01.webp.svg",
          alt: "image",
          description: "Folia Transferowa silver 01",
        },
        {
          src: "/new-duo-sugar-lemon.webp.svg",
          alt: "image",
          description: "New Due Sugar lemon",
        },
        {
          src: "/new-duo-gabki-do-ombre.webp.svg",
          alt: "image",
          description: "New Due Ombre Sponges",
        },
        {
          src: "/folia-transferowa-silver-01.webp.svg",
          alt: "image",
          description: "Folia Transferowa silver 01",
        },
        {
          src: "/new-duo-sugar-lemon.webp.svg",
          alt: "image",
          description: "New Due Sugar lemon",
        },
        {
          src: "/new-duo-gabki-do-ombre.webp.svg",
          alt: "image",
          description: "New Due Ombre Sponges",
        },
        {
          src: "/folia-transferowa-silver-01.webp.svg",
          alt: "image",
          description: "Folia Transferowa silver 01",
        },
        {
          src: "/new-duo-sugar-lemon.webp.svg",
          alt: "image",
          description: "New Due Sugar lemon",
        },
        {
          src: "/new-duo-gabki-do-ombre.webp.svg",
          alt: "image",
          description: "New Due Ombre Sponges",
        },
        {
          src: "/folia-transferowa-silver-01.webp.svg",
          alt: "image",
          description: "Folia Transferowa silver 01",
        },
      ],
      notClick: false,
    };
  },
  methods: {
    hoverStyle() {
      this.notClick = !this.notClick;
    },
  },
};
</script>
<style scoped>
.main {
  background-color: rgba(222, 235, 246, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.slid {
  border-radius: 20px;
  padding: 2%;
  overflow-x: scroll;
}
li {
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.3);
  margin: 0 10px;
}
.cards li {
  list-style: none;
  background-color: rgba(244, 244, 244, 1);
  padding: 4%;
  font-weight: 500;
  line-height: 20.24px;
  text-align: left;
  border-radius: 16px;
}
.clicked {
  background-color: rgba(222, 235, 246, 1);
  color: black;
  transform: scale(1.1, 1.1);
}
</style>