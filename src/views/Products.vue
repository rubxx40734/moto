<template>
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-5 container">
      <div class="button btn btn-primary" type="button"
      @click="openModal(true)">
        新增一個產品
      </div>
    </div>
    <table class="table mt-4 container">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="item in products" :key="item.id">
      <td>{{item.category}}</td>
      <td>{{item.title}}</td>
      <td class="text-right">
        {{ currency(item.origin_price) }}
      </td>
      <td class="text-right">
        {{ currency(item.price) }}
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-success" v-else>停用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm"
          @click="openModal(false, item)">編輯</button>
          <button class="btn btn-outline-danger btn-sm"
          @click="opendelmodal(item)">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<ProductModal ref="productModal"
v-bind:product="tempProduct"
@update-product="updateProduct"></ProductModal>

<DelModal ref="delModal"
:product="tempProduct"
@del-product="delProduct"></DelModal>

<ToastMessages></ToastMessages>

<Pagination :pages="pagination"
@update-page="getProducts"></Pagination>

</template>

<script>
import { currency } from '../methods/filters.js'
import ProductModal from '../components/ProductsModal.vue'
import DelModal from '../components/DelModal.vue'
import ToastMessages from '../components/ToastMessages.vue'
import Pagination from '../components/Pagination.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    ToastMessages,
    Pagination
  },
  inject: ['emitter'],
  methods: {
    currency,
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    closeModal () {
      this.tempProduct = {}
      const productComponent = this.$refs.productModal
      productComponent.hideModal()
    },
    opendelmodal (item) {
      this.tempProduct = { ...item }
      const delModal = this.$refs.delModal
      delModal.showModal()
    },
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.isLoading = true
      this.axios.get(api)
        .then(res => {
          console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
    },
    updateProduct (item) {
      this.tempProduct = item
      this.isLoading = true
      // 這是新增的方法
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethods = 'post'

      // 這邊是編輯的方法
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethods = 'put'
      }

      this.axios[httpMethods](api, { data: this.tempProduct })
        .then(res => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗><',
              content: res.data.message.join('、')
            })
          }
          this.closeModal()
          this.tempProduct = {}
          this.isLoading = false
          this.getProducts()
        })
    },
    delProduct (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      this.axios.delete(url)
        .then(res => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '刪除產品成功 ^_^'
            })
          }
          console.log(res)
          const delmodal = this.$refs.delModal
          delmodal.hideModal()
          this.getProducts()
        })
    }

  },
  created () {
    this.getProducts()
  }
}
</script>
