<template>
 <h1 class="mt-5 mb-5 text-center">請填寫資料</h1>
  <Form v-slot="{ errors}" class="row g-3 mb-5 p-md-5 p-0 border d-block d-md-flex justify-content-center"
   @submit="createorder">
    <div class="col-md-4">
      <label for="name" class="form-label">收件人姓名</label>
       <Field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name"
                  ></Field>
             <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="col-md-4">
      <label for="tel" class="form-label">收件人電話</label>
      <Field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" :rules="isphone"
                   v-model="form.user.tel"
                  ></Field>
             <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="col-md-8">
      <label for="email" class="form-label">信箱</label>
      <Field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入 Email"
                   rules="email|required" v-model="form.user.email"></Field>
                  <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="col-md-8">
      <label for="address" class="form-label">地址</label>
      <Field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address"
                  ></Field>
             <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="form-floating col-md-8 mt-4">
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea"
      ></textarea>
      <label for="floatingTextarea">留言或備註</label>
    </div>
    <div class="col-md-8 text-end">
      <button type="button" class="btn btn-primary" @click="gobackshop">回購物車</button>
      <button type="submit" class="btn btn-success ms-3">送出資料</button>
    </div>
  </Form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: true
    }
  },
  methods: {
    isphone (value) {
      const MobileReg = /^(09)[0-9]{8}$/
      return MobileReg.test(value) ? true : '需填寫正確手機格式><'
    },
    createorder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const obj = this.form
      this.axios.post(url, { data: obj })
        .then(res => {
          console.log(res)
          this.$router.push(`/checkout/order/${res.data.orderId}`)
        })
    },
    gobackshop () {
      this.$router.push('/user/cart')
    }
  },
  created () {

  }
}
</script>
