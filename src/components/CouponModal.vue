<template>
      <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增優惠券</h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input type="text" class="form-control" id="title"
                   placeholder="請輸入標題" v-model="tempCoupons.title">
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input type="text" class="form-control" id="coupon_code"
                   v-model="tempCoupons.code" placeholder="請輸入優惠碼">
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date"
                   v-model="due_date">
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input type="number" class="form-control" id="price"
                   v-model="tempCoupons.percent" placeholder="請輸入折扣百分比">
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                     v-model="tempCoupons.is_enabled"
                     :true-value="1"
                     :false-value="0"
                     id="is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary"
                  @click="$emit('update-coupon', this.tempCoupons)">更新優惠券
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { date } from '../methods/filters.js'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      modal: {},
      tempCoupons: {},
      due_date: ''
    }
  },
  props: {
    coupon: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    coupon () {
      this.tempCoupons = this.coupon
      // 轉換成 YYYY-MM-DD
      if (this.tempCoupons.due_date) {
        const dateAndTime = new Date(this.tempCoupons.due_date * 1000)
          .toISOString().split('T')
        this.due_date = dateAndTime[0]
      }

      // // 下面中刮弧這行是解構賦值的寫法 等同於下面這行
      // [this.due_date] = dateAndTime
    },
    due_date () {
      this.tempCoupons.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  components: {},
  methods: {
    date,
    showmodal () {
      this.modal.show()
    },
    hidemodal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
