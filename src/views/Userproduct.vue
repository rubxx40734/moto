<template>
   <Loading :active="isLoading"></Loading>
  <!-- <div class="container">
    <h1 class="text-center mt-5 mb-5">車款介紹</h1>
    <div class="row mb-5 border border-5 p-3 rounded position-relative">
        <div class="col-md-5">
            <img :src="product.imageUrl" class="h-350 bgcover card-img mb-5 mb-md-0">
        </div>
        <div class="col-md-7">
            <h3 class="mb-3">{{product.title}}</h3>
            <h4 class="mb-3 fs-5">{{product.description}}</h4>
            <p class="mb-5 content">{{product.content}}</p>
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
                  </div>馬上租!</button>
            </div>
        </div>
    </div>
  </div> -->
  <div class="container">
    <div class="row mt-5">
       <div class="col-md-6 ">
        <img :src="product.imageUrl" alt="" class="h-350 bgCover mb-3 mb-md-0 card-img">
      </div>
      <div class="col-md-6">
        <h1 class="ff-r2">{{product.title}}</h1>
        <div class="badge d-md-flex d-block">
          <div class="badgegroup1 mb-2 mb-md-0 text-start">
             <span class="badge me-2 bg-danger fs-6">{{product.unit}}</span>
             <span class="badge me-2 bg-danger fs-6">{{product.category}}</span>
          </div>
          <div class="badgegrou text-start">
              <span class="badge me-2 bg-primary fs-6">會員專屬優惠</span>
              <span class="badge me-2 bg-primary fs-6">精細保養</span>
              <span class="badge me-2 bg-primary fs-6">進口</span>
          </div>
        </div>
        <h2 class="mt-3">基本數據</h2>
        <p class="mt-3">{{product.description}}</p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 mt-5">
        <h2 class="mt-3"><i class="bi bi-megaphone-fill fs-3 text-info"></i> 詳細介紹</h2>
        <h3 class="fs-6 lh-lg">{{product.content}}</h3>
      </div>
      <div class="col-md-6 mt-5">
        <h2 class="mt-3"><i class="bi bi-exclamation-diamond-fill fs-3 text-warning"></i>注意事項</h2>
        <p>禁止在非鋪裝道路騎乘(off-road)、孤輪、空檔拉轉、過度超速等等</p>
        <p>新手不建議騎乘 600 <i class="bi bi-badge-cc"></i> 以上大牌量重機</p>
        <p>租車須簽本票(還車完即歸回),價格為 NT$ <span class="text-danger">{{ currency(200*product.price)}}</span></p>
        <p>租車時間 <span class="text-danger">PM 9:00 ~ AM 21:30</span></p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6"></div>
      <div class="col-md-6 d-flex justify-content-between align-items-end
        border border-5 p-3 rounded">
        <div class="price">
           <del>原價NT $ {{currency(product.origin_price)}}</del>
           <p class="mb-0 fs-3 text-danger">特價 NT $ {{currency(product.price)}}</p>
        </div>
        <div class="gobuy">
           <button type="button" class="btn btn-primary"
                @click="addcart(this.id)" :disabled="this.status.lodingitem === this.id">
                  <div v-if="this.status.lodingitem === this.id" class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden"></span>
              </div>馬上租!
            </button>
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
