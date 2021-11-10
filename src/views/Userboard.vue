<template>
    <Navbar></Navbar>
    <Header></Header>
    <router-view></router-view>
    <ToastMessage></ToastMessage>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'
import emitter from '../methods/emitter.js'
import ToastMessage from '../components/ToastMessages.vue'

export default {
  components: { Navbar, Header, ToastMessage },
  provide () {
    return {
      emitter
    }
  },
  created () {

  }
}
</script>
