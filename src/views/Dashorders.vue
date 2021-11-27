<template>
  <div class="container">
      <button type="button" class="btn btn-danger text-end mt-3"
      @click="deleteallorders">刪除全部訂單</button>
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">姓名</th>
          <th scope="col">付款時間</th>
          <th scope="col">價格</th>
          <th scope="col">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <th scope="row">{{item.user.name}}</th>
          <td>{{this.date(item.paid_date)}}</td>
          <td>{{item.total}}</td>
          <td v-if="item.is_paid" class="text-success">是</td>
          <td v-else class="text-danger">否</td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @update-page="getorder"></Pagination>
  </div>
</template>

<script>
import { date } from '../methods/filters.js'
import Pagination from '../components/Pagination.vue'

export default {
  data () {
    return {
      pagination: {},
      orders: []
    }
  },
  components: { Pagination },
  inject: ['emitter'],
  methods: {
    date,
    getorder (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.axios
        .get(api)
        .then(res => {
          console.log(res.data)
          this.pagination = res.data.pagination
          this.orders = res.data.orders
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteallorders () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.axios.delete(api)
        .then(res => {
          console.log(res)
          this.getorder()
        })
    }
  },
  created () {
    this.getorder()
  }
}
</script>
