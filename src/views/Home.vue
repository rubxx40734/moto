<template>
   <Navbar></Navbar>
  <div ref="carousel"
  id="carouselExampleControlsNoTouching" class="carousel slide container-fluid position-relative" data-bs-touch="false" data-bs-interval="false">
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

<div class="fix container mt-5">
  <div class="row mb-5" data-aos="fade-right" data-aos-duration="2000">
    <div class="col-md-6">
      <img src="../assets/fix2.jpg" alt="" class="h-350 w-100 bgCover card-img">
    </div>
    <div class="col-md-6 border d-flex flex-column justify-content-center">
      <h2 class="text-center">用心照顧每台車 讓您猶如試乘新車</h2>
      <p>我們對於重機保養絕對不馬虎，機油只使用國際大廠美孚機油與mobil機油，例行性小保養與大保養
        定時施工。消耗品只用原廠部品，絕非大陸次級品，再加上定期打蠟與鍍膜，能讓出租車保有一定行車質感，
        讓您在短期承租期間，享受人車合一的喜悅，騎著騎著嘴角甚至會不自覺上揚呢。
      </p>
    </div>
  </div>
  <div class="row" data-aos="fade-left" data-aos-duration="2000">
    <div class="col-md-6 border d-flex flex-column justify-content-center">
      <h2 class="text-center">頂級人身部品也租的到</h2>
      <p>騎重機想要全身防摔衣帥一波 但又不想花大錢嗎?<br>
      我們提供各大廠的人身部品，凡舉AGV、SHOEL、Arai甚至連DAINESE防摔衣都有。出租完畢一律做紅外線消毒，
      並且我們備有法國進口安全帽蒸氣箱。衛生問題不需擔心，我們替您嚴格把關!
      </p>
    </div>
    <div class="col-md-6">
      <img src="../assets/fix4.jpg" alt="" class="h-350 w-100 bgCoverBottom card-img">
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-4 box">
        <router-link to="/dashboard"><img class="cover-fit h-300 w-100" src="../assets/home1.jpg" alt=""></router-link>
    </div>
    <div class="col-md-4 box">
      <router-link to="/dashboard"><img class="cover-fit h-300 w-100" src="../assets/home1.jpg" alt=""></router-link>
    </div>
    <div class="col-md-4 box">
      <router-link to="/dashboard"><img class="cover-fit h-300 w-100" src="../assets/home1.jpg" alt=""></router-link>
    </div>
  </div>
</div>
</template>

<style>

.box{
  overflow: hidden;
}
img{
  transition: .5s;
}
.box:hover img{
  transform: scale(1.2);
  cursor: pointer;
}
.cover-fit{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
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
import Navbar from '../components/Navbar.vue'

export default {
  data () {
    return {
      carousel: {}
    }
  },
  components: { Navbar },
  methods: {

  },
  mounted () {
    var myCarousel = this.$refs.carousel
    this.carousel = new Carousel(myCarousel)
  }

}
</script>
