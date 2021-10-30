<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1"
   ref="modal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">將此產品移除!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        您確定要將 <span class="text-danger">{{ tempProduct.title}}</span> 刪除嗎?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary"
        @click="$emit('del-product', this.tempProduct)">確認</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: {},
      tempProduct: {}
    }
  },
  props: { product: {} },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }

}
</script>
