<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-primary">後台管理系統</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <router-link to="/dashboard/products" class="nav-link">產品</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/orders" class="nav-link">訂單</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/coupons" class="nav-link">優惠券</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/" class="nav-link">首頁</router-link>
        </li>
       <a href="#" @click.prevent="logout" class="nav-link">登出</a>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.axios.post(api)
        .then(res => {
          console.log(res)
          this.$router.push('/login')
        })
    }
  }
}
</script>
