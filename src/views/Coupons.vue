<template>
 <div class="container">
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal(true, item)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in coupons" :key="index">
        <td>{{item.title}}</td>
        <td>{{item.percent}}</td>
        <td>{{date(item.due_date)}}</td>
        <td>
          <span  class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未起用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="opendelmodal(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <CouponModal ref="couponmodal"
  :coupon="tempCoupon"
  @update-coupon="updateCoupon"></CouponModal>

  <DelCouponModal ref="delcouponmodal"
  :coupon="tempCoupon"
  @del-coupon="delcoupon"></DelCouponModal>

  <ToastMessages></ToastMessages>
</template>

<script>
import CouponModal from '../components/CouponModal.vue'
import DelCouponModal from '../components/DelCouponModal.vue'
import ToastMessages from '../components/ToastMessages.vue'
import { date } from '../methods/filters.js'
export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {},
      isLoading: false,
      isNew: ''
    }
  },
  inject: ['emitter'],
  components: { CouponModal, DelCouponModal, ToastMessages },
  methods: {
    date,
    getCoupons () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.axios.get(url)
        .then(res => {
          console.log(res)
          this.coupons = res.data.coupons
          this.isLoading = false
        })
    },
    updateCoupon (item) {
      // 這是新增
      let httpmethods = 'post'
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      // 這邊是修改
      if (!this.isNew) {
        httpmethods = 'put'
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      }
      this.axios[httpmethods](url, { data: item })
        .then(res => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '優惠券更新成功!'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '優惠券更新失敗><',
              content: res.data.message.join('、')
            })
          }
          console.log(res)
          const couponModal = this.$refs.couponmodal
          couponModal.hidemodal()
          this.getCoupons()
        })
    },
    openModal (isNew, item) {
      console.log(isNew, item)
      if (isNew) {
        this.tempCoupon = {}
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      const couponModal = this.$refs.couponmodal
      couponModal.showmodal()
    },
    opendelmodal (item) {
      this.tempCoupon = { ...item }
      const delcouponmodal = this.$refs.delcouponmodal
      delcouponmodal.showModal()
    },
    delcoupon (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      this.axios.delete(url)
        .then(res => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '優惠券刪除成功!'
            })
          }
          const delcouponmodal = this.$refs.delcouponmodal
          delcouponmodal.hideModal()
          this.getCoupons()
        })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
