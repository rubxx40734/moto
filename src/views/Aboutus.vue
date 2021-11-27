<template>
  <Loading :active="isLoading"></Loading>
  <Navbar></Navbar>
  <div class="container">
    <h1 class="mt-5 mb-5 title text-center">哈士騎重機</h1>
    <div class="row mb-5">
      <div class="col-md-5">
        <img src="../assets/about.jpg" alt="" class="w-100" />
      </div>
      <div class="col-md-7 d-flex flex-column justify-content-center">
        <p class="fw-bold lh-base fs-5">
          我們是一群熱愛重機的八年級生，也剛好我們店狗也是哈士奇，所以才取名為
          哈士騎重機。<br />希望能藉由重機的短期租賃服務，讓還在猶豫該買什麼車款或者不知道自己
          適合什麼車款的人，有一個能夠短期騎乘的管道，並且認識各個車種的調性。
          <br />我們也提倡騎帥不騎快的原則，希望大家能夠快快樂樂出門，平平安安回家。我們也精細保養
          店內各車種，為了讓消費者駕馭一台真正的好車。
        </p>
      </div>
    </div>
    <h2 class="text-center fw-bold fs-1 mb-3">聯繫我們</h2>
    <div class="row mb-5">
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <ul class="text-center p-3 fw-bold lh-base fs-5">
          <li class="mb-2">實體店面:新北市蘆洲區長榮路76號</li>
          <li class="mb-2">營業時間:周一至周日 早上9點 到 晚上10點</li>
          <li class="mb-2">連絡電話: 0921-286-922</li>
          <li class="mb-2">市話: (02)-8285-3356</li>
        </ul>
      </div>
      <div class="col-md-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5421645033725!2d121.46044981360693!3d25.083502342462296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8b0ca9a4c75%3A0x572b8e2536a7248b!2zMjQ35paw5YyX5biC6JiG5rSy5Y2A6ZW35qau6LevNzbomZ8!5e0!3m2!1szh-TW!2stw!4v1637768632909!5m2!1szh-TW!2stw"
          class="w-100 h-350"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <h3 class="text-center fw-bold fs-1">提供寶貴意見</h3>
    <div class="row mb-3 d-flex justify-content-center">
      <div class="col-md-6">
        <!-- <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">電子郵件</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="請輸入信箱" required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">姓名</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="請輸入姓名" required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">電話</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="請輸入電話" required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >您的意見</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1" placeholder="請輸入內容" required
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">送出</button>
        </form> -->
          <Form v-slot="{ errors}" class="row g-3 mb-1 p-md-3 p-0 d-block d-md-flex justify-content-center"
   @submit="createorder">
    <div class="col-md-12">
      <label for="name" class="form-label">姓名</label>
       <Field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name"
                  ></Field>
             <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="col-md-12">
      <label for="tel" class="form-label">電話</label>
      <Field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" :rules="isphone"
                   v-model="form.user.tel"
                  ></Field>
             <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="col-md-12">
      <label for="email" class="form-label">信箱</label>
      <Field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入 Email"
                   rules="email|required" v-model="form.user.email"></Field>
                  <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="form-floating col-md-12 mt-4">
      <textarea
        class="form-control h-200"
        id="floatingTextarea"
      ></textarea>
      <label for="floatingTextarea">請輸入寶貴意見</label>
    </div>
    <div class="col-md-12 text-end">
      <button type="submit" class="btn btn-primary ms-3">送出資料</button>
    </div>
  </Form>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
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
      }
    }
  },
  components: { Navbar, Footer },
  methods: {},
  created () {}
}
</script>
