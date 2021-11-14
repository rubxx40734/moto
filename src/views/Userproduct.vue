<template>
   <Loading :active="isLoading"></Loading>
  <div class="container">
    <h1 class="text-center mt-5 mb-5">車款介紹</h1>
    <div class="row mb-5 border border-5 p-3 rounded position-relative">
        <div class="col-md-5">
            <img :src="product.imageUrl" class="h-350 bgcover card-img mb-5 mb-md-0">
        </div>
        <div class="col-md-7">
            <h3 class="mb-3">{{product.title}}</h3>
            <h4 class="mb-3">{{product.description}}</h4>
            <p class="mb-5">{{product.content}}</p>
            <span class="badge rounded-pill bg-danger fs-5
            position-absolute top-0 end-0">{{product.unit}}</span>
            <div class="gotobuy d-flex justify-content-between">
                <div class="price d-flex">
                    <div class="hightprice d-md-flex">
                        <p class="me-3"><del>原價 $ {{currency(product.origin_price)}}</del></p>
                        <h5>現在只要 $ {{currency(product.price)}}</h5>
                    </div>
                    <div class="lowpric"></div>
                </div>
                  <button type="button" class="btn btn-primary"
                @click="addcart(this.id)" :disabled="this.status.lodingitem === this.id">
                  <div v-if="this.status.lodingitem === this.id" class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden"></span>
                  </div>我要騎這台!</button>
            </div>
        </div>
    </div>
  </div>
  <ToastMessages></ToastMessages>
  <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer.vue'
import ToastMessages from '../components/ToastMessages.vue'
import { currency } from '../methods/filters.js'

export default {
  data () {
    return {
      id: '',
      product: {},
      isLoading: false,
      status: {
        lodingitem: ''
      }
    }
  },
  components: { Footer, ToastMessages },
  inject: ['emitter'],
  methods: {
    currency,
    getoneproduct () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.axios.get(url).then(res => {
        console.log(res)
        this.product = res.data.product
        this.isLoading = false
      })
    },
    addcart (id) {
      this.status.lodingitem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.axios.post(url, { data: cart })
        .then(res => {
          this.status.lodingitem = ''
          console.log(res)
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '已將租車券加入購物車!'
            })
          } else {
            this.rmitter.emit('pish-message', {
              style: 'danger',
              title: '加入購物車失敗><',
              content: res.data.message.join('、')
            })
          }
        })
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getoneproduct()
  }
}
</script>
