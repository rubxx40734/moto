<template>
    <Navdashboard></Navdashboard>
    <router-view></router-view>
</template>

<script>
import Navdashboard from '../components/Navdashboard.vue'
import emitter from '../methods/emitter.js'
export default {
  components: { Navdashboard },
  provide () {
    return {
      emitter
    }
  },
  created () {
    // 文件參考https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    var token = document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 文件參考https://github.com/axios/axios/search?q=axios.defaults.headers.common
    this.axios.defaults.headers.common.Authorization = token

    const api = `${process.env.VUE_APP_API}api/user/check`
    this.axios.post(api)
      .then((res) => {
        // 如果這邊沒cookie紀錄 會跳轉到登入頁面
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
