<template>
    <Navbar></Navbar>
    <Header></Header>
    <router-view></router-view>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'
// import emitter from '../methods/emitter.js'
import mitt from 'mitt'
const emitter = mitt()

export default {
  components: { Navbar, Header },
  provide () {
    return {
      emitter
    }
  },
  created () {

  }
}
</script>
