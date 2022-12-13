<template>
    <div>
 <!--intro-->
 <div class="container introimg">
   <img  src="../assets/images/intro.jpg" alt="">
 </div>
<div class="container intro ">
  <h1 class="container text-center" style="line-height:30px">این
    <span class="web">وبسایت</span>
     با هدف ارائه محاسبات و ابزارهای آنلاین شروع به کار کرده است  ابزارهایی که هر جایی ممکن است مورد نیاز باشد 
    
    در این سایت میتوانید انواع محاسبات را به سهولت انجام دهید
     </h1>
    
</div>
<!--services-->
<div class="container mt-4 text-center">
  <hr>
  <h2 class="text-center mt-5 mb-5" >ابزار ها</h2>
  <div class="container ">
      <!--row1-->
       <div class="row mt-5">
    <div class="col-md mb-5 cmpnt darkothercopm" @click="component='numToLetter'; callcomp();" >
       <img src="../assets/icons/NL.png" alt="">
      <p>تبدیل عدد به حروف </p>
    </div>
    <div class="col-md  mb-5 cmpnt darkothercopm"  @click="component='passwordGenerator'; callcomp();">
      <img src="../assets/icons/lock.png" alt="">
     <p>پسورد تصادفی</p>
    </div>
    <div class="col-md  mb-5 cmpnt darkothercopm"  @click="component='melicode'; callcomp();">
     <img src="../assets/icons/identity.png" alt="">
     <p>صحت کد ملی</p>
    </div>
     <div class="col-md  mb-5 cmpnt darkothercopm" @click="component='engToPer'; callcomp();">
       <img src="../assets/icons/EtP.png" alt="">
      <p>تبدیل عدد فارسی به انگلیسی</p>
    </div>
  </div>
  <!--row2-->
  <div class="row mt-5">
    <!--<div class="col-md mb-5 cmpnt"  @click="component='birth'; callcomp();">
       <img src="../assets/icons/bearth.png" alt="">
      <p>محاسبه ی سن</p>
      <p  class="cexplain">به میلادی شمسی و قمری</p>
    </div>-->
    <div class="col-md  mb-5 cmpnt darkothercopm"  @click="component='date'; callcomp();">
      <img src="../assets/icons/Calendar.png" alt="">
     <p> تاریخ امروز</p>
     <p  class="cexplain">به میلادی شمسی و قمری</p>
    </div>
     <div class="col-md  mb-5 cmpnt darkothercopm"  @click="component='percentage'; callcomp();">
     <img src="../assets/icons/perspective.png" alt="">
     <p>محاسبه ی درصد</p>
      <p  class="cexplain"> محاسبه ی افزایش یا کاهش درصد حقوق، قیمت و غیره </p>
    </div>
    <div class="col-md  mb-5 cmpnt darkothercopm "  @click="component='MBI'; callcomp();">
     <img src="../assets/icons/wight.png" alt="">
     <p>  شاخص توده ی بدنی</p>
      <p  class="cexplain">MBI</p>
    </div>
     <div class="col-md  mb-5 cmpnt darkothercopm"  @click="component='typoStuff'; callcomp();">
       <img src="../assets/icons/typo.png" alt="" >
      <p>شمارش تعداد کاراکتر,کلمه و جمله</p>
      <p  class="cexplain"></p>
    </div>
  </div>
  </div>
  <div class="container comment d-flex">
      <img src="../assets/images/comment.png" alt="">  
    <div class="mt-5">
      <img class=" icon" src="../assets/icons/message.png" alt="">
    <p class="text-end " > 
      شما می توانید برای کمک به ما جهت بهتر شدن امکانات و ابزار های آنلاین 
     یا افزودن ابزار های جدید ویا موارد دیگر
      
      نظرات، پیشنهادات و انتقادات خود را برای ما ارسال کنید
      </p>
      <br>
  </div>
  </div>
</div>
    </div>
</template>
<script>
export default {
    name:'mainpage',
    data() {
      return {
        component:'',
      }
    },
    methods: {
      callcomp(){
        this.$emit('comp',this.component);
      }
    },
    mounted() {
      console.log(this.image)
    },
}
</script>