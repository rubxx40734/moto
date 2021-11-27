<template>
    <nav class="navbar navbar-expand-lg bg-primary navbar-light">
  <div class="container-fluid fw-bold font-monospace">
    <a class="navbar-brand text-secondary fs-2 texthover title2" href="#">哈士騎重機</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-end">
        <li class="nav-item fw-bold">
          <router-link to="/user/cart" class="nav-link active text-secondary texthover" aria-current="page">車款總覽</router-link>
        </li>
        <li class="nav-item fw-bold">
           <router-link to="/know" class="nav-link active text-secondary texthover" aria-current="page">租車須知</router-link>
        </li>
        <li class="nav-item fw-bold">
           <router-link to="/aboutus" class="nav-link active text-secondary texthover" aria-current="page">關於我們</router-link>
        </li>
        <li class="nav-item fw-bold">
          <a class="nav-link text-secondary texthover" href="#" @click.prevent="gotodashboard">後台管理</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style>
.texthover:hover{
  background: rgb(186, 201, 201);
  border-radius: 10px;
}
.title2{
  z-index: 99;
  font-family: 'Zen Kurenaido', sans-serif;
  font-weight: 900;
  opacity: 0.8;
}
</style>
<script>

export default {
  methods: {
    gotodashboard () {
      this.$router.push('/dashboard/products')
    },
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
