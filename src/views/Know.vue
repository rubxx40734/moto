<template>
   <Loading :active="isLoading"></Loading>
   <Navbar></Navbar>
    <div class="container mb-5">
        <h1 class="text-center mt-5 mb-5">租車須知</h1>
        <div class="row background p-3 rounded-5">
            <div class="col-md-5 mb-3 mb-md-0">
                 <img src="../assets/slow.jpg" alt="" class="w-100">
            </div>
            <div class="col-md-7">
                <ul>
                    <li class="mb-2">◎承租人須持有中華民國國民身分證及監理單位認可之<span class="text-danger">大型重機(普通重機)</span>駕照正本且須年滿20歲(普通重機須年滿18歲)，供出租人查核。</li>
                    <li class="mb-2">◎如因可歸責於承租人之事由致本機車毀損達<span class="text-danger">無法修復程度者</span>，承租人應照當時市價賠償。</li>
                    <li class="mb-2">◎租賃本車輛及隨車配備，實際里程數，還車里程，油表用量，出還車日期時間、車身外觀。</li>
                    <li class="mb-2">◎如本車輛發生擦撞、毀損及失竊時，除有不能向警察機關報案之情形外，承租人應<span class="text-danger">立即報案並通知出租人後送合格修理廠修理</span>，如因可歸責於承租人之事由所生之拖車費、修理費、車輛維修期間之租金、均由承租人負擔。</li>
                    <li class="mb-2">◎因本契約發生訴訟時，甲乙雙方同意以台北士林地方法院為管轄法院。</li>
                    <li class="mb-2">◎承租人不得從事賽車行為或與他車於道路競駛、蛇行及違反道路最高速限且如因違反肇致租賃<span class="text-danger">車輛被吊扣牌照期間</span>，應將車輛交付出租人 保管，惟此期間，承租人依然應依約給付租金，如承租人或允許之第三人於使用本車涉有酒駕行為，致本車強制險保費依法令提高時，<span class="text-danger">增加之保費應由承租人全數負擔</span>，如造成對方嚴重傷亡(包含財損、工作等損失)，由承租人自行負擔與出租人無涉。</li>
                </ul>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<style lang="scss">
.background{
    background-color: rgb(224, 222, 222);
}
</style>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  data () {
    return {

    }
  },
  components: { Navbar, Footer },
  methods: {

  },
  created () {

  }
}
</script>
