<template>
  <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> -->
  <Loading :active="isLoading"></Loading>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    ref="offcanvas"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h4 id="offcanvasRightLabel">訂單資訊</h4>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <button
      type="button"
      class="button btn btn-danger w-100"
      @click="deleteall"
      v-if="carts.total != 0"
    >
      清除購物車
    </button>
    <div class="offcanvas-body">
      <div class="table-responsive">
        <template v-if="carts.total != 0">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">車種</th>
                <th scope="col">單位/張</th>
                <th scope="col">價格</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody v-for="item in carts.carts" :key="item.id">
              <tr>
                <th scope="row">{{ item.product.title }}<br>
                <p class="text-success fs-7" v-if="carts.total > carts.final_total">9折!</p></th>
                <td>
                  <div class="input-group input-group-sm">
                    <input
                      type="number"
                      class="form-control"
                      min="1"
                      @change="updatecart(item)"
                      v-model.number="item.qty"
                      :disabled="item.id === this.status.lodingitem"
                    />
                  </div>
                </td>
                <td><p v-if="carts.total == carts.final_total">{{ currency(item.total) }}</p>
                <p v-if="carts.total > carts.final_total"><span class="text-success fs-7">折扣價</span>{{ currency(item.final_total) }}</p></td>
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="deletecart(item)">
                  <i class="bi bi-trash"></i>
                </button>
              </tr>
            </tbody>
          </table>
        </template>
        <!-- <table class="table">
          <thead>
            <tr>
              <th scope="col">車種</th>
              <th scope="col">單位/張</th>
              <th scope="col">價格</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-for="item in carts.carts" :key="item.id">
            <tr>
              <th scope="row">{{ item.product.title }}</th>
              <td>
                <div class="input-group input-group-sm">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    @change="updatecart(item)"
                    v-model.number="item.qty"
                    :disabled="item.id === this.status.lodingitem"
                  />
                </div>
              </td>
              <td>{{ currency(item.final_total) }}</td>
              <button
                type="button"
                class="btn btn-warning"
                @click="deletecart(item)"
              >
                <i class="bi bi-trash"></i>
              </button>
            </tr>
          </tbody>
        </table> -->
        <h5 v-else>您還沒選購租車券喔!</h5>
        <div class="input-group mb-3" v-if="carts.total != 0">
            <input type="text" class="form-control" placeholder="請輸入優惠券" v-model="this.couponcode">
            <button class="btn btn-outline-secondary" type="button"
            @click="addcoupon" id="button-addon2">套用優惠券</button>
        </div>
        <p class="text-end fs-5" v-if="carts.total != 0">
          總計$ {{ currency(carts.total) }}
        </p>
        <p class="text-end fs-5" v-if="carts.total > carts.final_total">
          <span class="text-success fw-bold fs-7">以使用優惠券</span>
          折扣價$ {{ currency(carts.final_total) }}
        </p>
        <div class="d-flex justify-content-md-end mt-5">
            <!-- <router-link to="/checkout/form" v-if="carts.total != 0">
                <button type="button" class="btn btn-primary">結帳去!</button>
            </router-link> -->
             <button type="button" class="btn btn-primary" @click.prevent="gotocheckout"
             v-if="carts.total != 0">結帳去!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import { currency } from '../methods/filters.js'

export default {
  data () {
    return {
      offcanvas: {},
      carts: {},
      cartslength: '',
      isLoading: false,
      status: {
        lodingitem: ''
      },
      couponcode: ''
    }
  },
  inject: ['emitter'],
  methods: {
    currency,
    showoffcanvas () {
      this.offcanvas.show()
    },
    getorders () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(url).then(res => {
        // console.log(res.data.data.carts.length)
        this.carts = res.data.data
        this.cartslength = res.data.data.carts.length
        this.isLoading = false
      })
    },
    updatecart (item) {
      this.status.lodingitem = item.id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const obj = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.axios.put(url, { data: obj }).then(res => {
        console.log(res)
        this.status.lodingitem = ''
        this.getorders()
      })
    },
    deletecart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.axios.delete(url).then(res => {
        console.log(res)
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '刪除單筆成功!'
          })
        }
        this.getorders()
      })
    },
    deleteall () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.axios.delete(url).then(res => {
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已清空購物車><'
          })
        }
        this.getorders()
      })
    },
    addcoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const obj = {
        code: this.couponcode
      }
      this.axios.post(url, { data: obj })
        .then(res => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '已套用優惠券'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: res.data.message
            })
          }
          this.couponcode = ''
          this.getorders()
        })
    },
    gotocheckout () {
      this.offcanvas.hide()
      this.$router.push('/checkout/form')
    }
  },
  created () {
    this.getorders()
    // this.emitter.emit('send', this.cartslength)
    // this.$emit('send', this.cartslength)
  },
  beforeUpdate () {
    this.emitter.emit('send', this.cartslength)
    // this.$emit('send', this.cartslength)
  },
  mounted () {
    const myOffcanvas = this.$refs.offcanvas
    this.offcanvas = new Offcanvas(myOffcanvas)
  }
}
</script>
