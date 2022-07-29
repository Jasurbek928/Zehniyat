<template>
  <div style="max-width: 1000px; margin: auto; padding: 20px;  max-height: 400px;">
    <div>  
      <carousel-3d :controls-visible="true"
        :controls-prev-html="'&#10092; '"
        :controls-next-html="'&#10093;'"
        :controls-width="30"
        :controls-height="60"
        :clickable="false"
        :perspective="0"
        :space="400"
        :display="3"
        :height="400"
        :border="0"
        :width="280">
        <slide :index="0">
           <img style="height: 100%;" src="../assets/phone/1.svg" alt="">
        </slide>
        <slide :index="1">
           <img style="height: 100%;" src="../assets/phone/2.svg" alt="">
        </slide>
        <slide :index="2">
           <img style="height: 100%;" src="../assets/phone/3.svg" alt="">
        </slide>
        </carousel-3d>

    </div>
    <div
      style="
        transform: translateY(-150px);
        display: flex;
        justify-content: center;  
        z-index:-1;
        position: relative;
      "
    >
      <img src="../assets/Ellipse 39.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: 3,
    };
  },
};
</script>

<style>
.carousel-3d-slide {
  background: #0000;
  width: 100px;
}
.carousel-3d-controls{
    background-color: red;
}
</style>
