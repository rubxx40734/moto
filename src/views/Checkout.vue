<template>
  <Navbar></Navbar>
  <div class="container p-5">
     <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  data () {
    return {}
  },
  components: { Navbar, Footer },
  methods: {},
  created () {}
}
</script>
