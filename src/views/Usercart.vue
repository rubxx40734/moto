<template>
<Loading :active="isLoading"></Loading>
  <h1 class="text-center mt-5">車款總覽</h1>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-3">
        <ul class="list-group">
          <li class="list-group-item btn btn-primary" type="button" :class="{ 'bg-primary': this.mototype === '全部商品'}" @click="getCarts">
            全部商品
          </li>
          <li class="list-group-item btn btn-primary" type="button" :class="{ 'bg-primary': this.mototype === '運動跑車'}" @click="getSport">
            運動跑車
          </li>
          <li class="list-group-item btn btn-primary" type="button" :class="{ 'bg-primary': this.mototype === '街車'}" @click="getStree">
            街車
          </li>
          <li class="list-group-item btn btn-primary" type="button" :class="{ 'bg-primary': this.mototype === '越野，跨界'}" @click="getOffroad">
            越野，跨界
          </li>
          <li class="list-group-item btn btn-primary" type="button" :class="{ 'bg-primary': this.mototype === '人身部品'}" @click="getSafebody">
            人身部品
          </li>
        </ul>
      </div>
      <div class="col-md-9">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="item in carts" :key="item.id">
            <div class="card h-100 position-relative">
              <img
                :src="item.imageUrl"
                class="card-img-top h-200 bgCover card-img"
              />
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.description }}</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>

</template>

<script>

import Footer from '../components/Footer.vue'

export default {
  data () {
    return {
      carts: [],
      mototype: '',
      isLoading: false,
      status: {
        lodingitem: ''
      }
    }
  },
  components: { Footer },
  inject: ['emitter'],
  methods: {
    getCarts () {
      this.alltype = true
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url).then(res => {
        console.log(res)
        this.carts = res.data.products
        this.mototype = '全部商品'
        this.isLoading = false
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
              this.isLoading = false
            }
          })
        })
    },
    getproductid (id) {
      this.$router.push(`/user/product/${id}`)
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
    this.getCarts()
  }
}
</script>
