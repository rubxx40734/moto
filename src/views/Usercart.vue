<template>
<Loading :active="isLoading"></Loading>
  <h1 class="text-center mt-5"  id="title">車款總覽</h1>
  <div class="container mt-5 mb-5">
    <ToastMessages></ToastMessages>
    <div class="row">
      <div class="col-md-3 mb-3 mb-md-0">
        <ul class="list-group">
          <li class="list-group-item btn btn-primary mb-4 mb-md-0" type="button" :class="{ 'bg-primary': this.mototype === '全部商品'}" @click="getCarts">
            全部商品
          </li>
          <li class="list-group-item btn btn-primary mb-4 mb-md-0" type="button" :class="{ 'bg-primary': this.mototype === '運動跑車'}" @click="getSport">
            運動跑車
          </li>
          <li class="list-group-item btn btn-primary mb-4 mb-md-0" type="button" :class="{ 'bg-primary': this.mototype === '街車'}" @click="getStree">
            街車
          </li>
          <li class="list-group-item btn btn-primary mb-4 mb-md-0" type="button" :class="{ 'bg-primary': this.mototype === '越野，跨界'}" @click="getOffroad">
            越野，跨界
          </li>
          <li class="list-group-item btn btn-primary mb-4 mb-md-0" type="button" :class="{ 'bg-primary': this.mototype === '人身部品'}" @click="getSafebody">
            人身部品
          </li>
        </ul>
      </div>
      <div class="col-md-9">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <!-- <ToastMessages></ToastMessages> -->
          <div class="col" v-for="(item, index) in carts" :key="item.id" >
            <div class="card h-100 position-relative">
              <img
                :src="item.imageUrl"
                class="card-img-top h-200 bgCover card-img"
              />
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.description }}</p>
                <div class="price d-flex justify-content-between">
                  <p class="text-decoration-line-through">原價$ {{item.origin_price}}</p>
                  <p>特價$ {{item.price}}</p>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <button type="button" class="btn btn-primary btn-sm"
                @click="getproductid(item.id)">更多介紹</button>

                <button type="button" class="btn btn-primary"
                @click="addcart(item.id)" :disabled="this.status.lodingitem === item.id">
                  <div v-if="this.status.lodingitem === item.id" class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden"></span>
                  </div>我要騎這台!</button>

                <span class="badge rounded-pill bg-danger
            position-absolute top-0 end-0">{{item.unit}}</span>
                <button type="button" class="btn btn-sm btn-outline-warning
            position-absolute top-0 start-0" @click="collet(index)"
            :title="item.title">
            <i class="bi bi-heart"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <button type="button" v-if="this.heartlength != 0"
    class="btn btn-outline-light bg-dark rounded-3 p-2 position-fixed bottom-0 end-0 me-3 mb-6"
   @click="addheart">
   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
     {{ heartlength }}</span>
   <i class="bi bi-heart fs-2"></i>
   </button>

  <button type="button" class="btn btn-outline-light bg-dark rounded-3 p-2 position-fixed bottom-0 end-0 me-3 mb-4"
   @click="openoffcanvas">
   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
     {{ sendorderlength }}</span>
   <i class="bi bi-cart3 fs-2"></i>
   </button>
   <Modal ref="colletmodal" :heartdata="pct" @remove="removelocalhost"></Modal>
   <Pagination v-if="pagination" :pages="pagination" @update-page="getCarts"></Pagination>
  <Footer></Footer>
  <Cartoffcanvas ref="cartoffcanvas"></Cartoffcanvas>

</template>

<script>
import ToastMessages from '../components/ToastMessages.vue'
import Footer from '../components/Footer.vue'
import Cartoffcanvas from '../components/Cartoffcanvas.vue'
import Pagination from '../components/Pagination.vue'
import Modal from '../components/Collet.vue'

export default {
  data () {
    return {
      carts: [],
      mototype: '',
      isLoading: false,
      status: {
        lodingitem: ''
      },
      sendorderlength: '',
      pagination: {},
      pct: [],
      localpct: [],
      heartlength: '',
      locolhost: []
    }
  },
  components: { Footer, ToastMessages, Cartoffcanvas, Pagination, Modal },
  inject: ['emitter'],
  methods: {
    getCarts (page = 1) {
      this.alltype = true
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.axios.get(url).then(res => {
        this.pagination = res.data.pagination
        this.carts = res.data.products
        this.mototype = '全部商品'
        this.isLoading = false
        // 這邊用來讓視窗滾到指定的位置 非常重要~ 這招要記得
        const scrollDiv = document.querySelector('#title').offsetTop
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' })
      })
    },
    getSport () {
      this.mototype = '運動跑車'
      this.carts = []
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url)
        .then(res => {
          console.log(res)
          const data = res.data.products
          data.forEach((item) => {
            if (item.category === '運動跑車') {
              this.carts.push(item)
              this.pagination = ''
              this.isLoading = false
            }
          })
        })
    },
    getStree () {
      this.mototype = '街車'
      this.carts = []
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url)
        .then(res => {
          console.log(res)
          const data = res.data.products
          data.forEach((item) => {
            if (item.category === '街車') {
              this.carts.push(item)
              this.pagination = ''
              this.isLoading = false
            }
          })
        })
    },
    getOffroad () {
      this.mototype = '越野，跨界'
      this.carts = []
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url)
        .then(res => {
          console.log(res)
          const data = res.data.products
          data.forEach((item) => {
            if (item.category === '越野，跨界') {
              this.carts.push(item)
              this.pagination = ''
              this.isLoading = false
            }
          })
        })
    },
    getSafebody () {
      this.mototype = '人身部品'
      this.carts = []
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url)
        .then(res => {
          console.log(res)
          const data = res.data.products
          data.forEach((item) => {
            if (item.category === '人身部品') {
              this.carts.push(item)
              this.pagination = ''
              this.isLoading = false
            }
          })
        })
    },
    getproductid (id) {
      this.$router.push(`/user/product/${id}`)
    },
    collet (index) {
      console.log(this.carts[index].title)
      const obj = {}
      obj.title = this.carts[index].title
      obj.img = this.carts[index].imageUrl
      this.pct.push(obj)
      this.emitter.emit('push-message', {
        style: 'success',
        title: '已加入收藏٩(⚙ᴗ⚙)۶'
      })
      console.log(this.pct.length)
      this.heartlength = this.pct.length
      localStorage.setItem('love', JSON.stringify(this.pct))
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
          this.onlycreatedcartlength()
        })
    },
    openoffcanvas () {
      this.$refs.cartoffcanvas.getorders()
      this.$refs.cartoffcanvas.showoffcanvas()
    },
    onlycreatedcartlength () {
      this.$refs.cartoffcanvas.getorders()
    },
    addheart () {
      this.$refs.colletmodal.openmodal()
    },
    removelocalhost () {
      localStorage.removeItem('love')
      this.emitter.emit('push-message', {
        style: 'danger',
        title: '已清空收藏列表><'
      })
      this.pct = []
      this.heartlength = 0
    }
  },
  mounted () {
    this.localpct = JSON.parse(localStorage.getItem(('love')))
    console.log(this.localpct)
    if (this.localpct != null) {
      this.localpct.forEach(item => {
        this.pct.push(item)
        this.heartlength = this.pct.length
      })
    }
  },
  created () {
    this.getCarts()
    this.emitter.on('send', data => {
      this.sendorderlength = data
    })
  }
}
</script>
