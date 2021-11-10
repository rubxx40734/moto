<template>
      <div ref="carousel"
  id="carouselExampleControlsNoTouching" class="carousel slide container-fluid position-relative p-0" data-bs-touch="false" data-bs-interval="false">
  <h1 class="position-absolute top-50 start-50
  spaceTitle translate-middle title p-5">人生苦短 必須拉轉</h1>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/banner-adv.jpg" class="d-block w-100 banner" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/banner-cb650r.jpg" class="d-block w-100 banner" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/banner-tmax.jpg" class="d-block w-100 banner" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/banner-mt09.jpg" class="d-block w-100 banner" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/banner-t100.jpg" class="d-block w-100 banner" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style>
.banner{
  height: 500px;
  object-fit: cover;
  object-position: center;
}
.title{
  z-index: 99;
  font-family: 'Zen Kurenaido', sans-serif;
  font-weight: 800;
  background-color: rgba(196, 206, 214, 0.863);
  opacity: 0.6;
}
</style>

<script>

import Carousel from 'bootstrap/js/dist/carousel'

export default {
  data () {
    return {
      carousel: {}
    }
  },
  methods: {

  },
  mounted () {
    const myCarousel = this.$refs.carousel
    this.carousel = new Carousel(myCarousel)
  }

}
</script>
