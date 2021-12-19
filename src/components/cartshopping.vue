<template>
      <button type="button" class="btn btn-outline-light bg-dark rounded-3 p-2 position-fixed bottom-0 end-0 me-3 mb-4"
   @click="openoffcanvas">
   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
     {{ sendorderlength }}</span>
   <i class="bi bi-cart3 fs-1"></i>
   </button>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['sendorderlength'],
  methods: {
    openmodal () {
      this.$emit('openmodal')
    }
  }
}
</script>
