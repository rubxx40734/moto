<template>
<Loading :active="isLoading"></Loading>
  <div class="row justify-content-center">
    <div class="col-md-12 col-lg-10 py-6 px-7 border bg-secondary rounded-5">
      <p class="fs-5 text-white mb-3 mt-3 fs-4 text-center">訂單資訊</p>
      <div class="table-responsive">
        <table class="table table-border bg-light text-maintxt">
          <thead>
            <tr>
              <th scope="col">車種</th>
              <th scope="col" class="">車券數量</th>
              <th scope="col" class="bg-primar">等級</th>
              <th scope="col" class="">價格</th>
              <th scope="col" class="">優惠券代碼 / 折扣%</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}</td>
              <td class="text-danger">{{ item.product.unit }}</td>
              <td>$ {{ currency(item.final_total) }}</td>
              <td class="text-success" v-if="item.coupon">
                {{ item.coupon.title }} / {{ item.coupon.percent }}
              </td>
              <td v-else>
                無折扣
              </td>
            </tr>
            <tr scope="row">
              <td colspan="5" class="text-end p-2 fs-4">
                總金額 $ {{ currency(this.order.total) }}
              </td>
            </tr>
            <tr scope="row">
              <td colspan="2" class="text-center">姓名</td>
              <td colspan="3">{{ this.user.name }}</td>
            </tr>
            <tr scope="row">
              <td colspan="2" class="text-center">電話</td>
              <td colspan="3">{{ this.user.tel }}</td>
            </tr>
            <tr scope="row">
              <td colspan="2" class="text-center">信箱</td>
              <td colspan="3">{{ this.user.email }}</td>
            </tr>
            <tr scope="row">
              <td colspan="2" class="text-center">住址</td>
              <td colspan="3">{{ this.user.address }}</td>
            </tr>
            <tr scope="row">
              <td colspan="2" class="text-center">付款狀態</td>
               <td colspan="3" class="text-success fw-bold fs-4" v-if="this.message">付款完成</td>
              <td colspan="3" v-else class="text-danger fw-bold fs-4">尚未付款</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-10 d-flex flex-row-reverse">
       <button type="button" class="btn btn-success mb-3 text-end mt-4"
         @click="gotocart" v-if="this.message">繼續選購</button>
        <button type="button" class="btn btn-danger mb-3 text-end mt-4"
         @click="payorder" v-else>確認付款</button>
    </div>
  </div>
</template>

<script>
import emitter from '../methods/emitter.js'
import { currency } from '../methods/filters.js'
export default {
  data () {
    return {
      id: '',
      order: {},
      user: {},
      message: '',
      isLoading: false
    }
  },
  methods: {
    currency,
    emitter,
    getoneorder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.id}`
      this.axios.get(url).then(res => {
        console.log(res.data.order.products)
        this.order = res.data.order
        console.log(this.order.is_paid)
        this.message = this.order.is_paid
        this.user = res.data.order.user
        this.isLoading = false
      })
    },
    payorder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.id}`
      this.axios.post(url)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.message = res.data.message
            this.isLoading = false
          }
        })
    },
    gotocart () {
      this.$router.push('/user/cart')
    }
  },
  created () {
    this.id = this.$route.params.orderId
    this.getoneorder()
  }
}
</script>
