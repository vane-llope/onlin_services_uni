<template>
<div>
<div class="container introimg  d-none d-xl-block d-xxl-none">
  <div class="dark-mode"></div>
  </div>
  <img class="w-75 d-lg-none" src="../assets/images/phone-hero.png" alt="">
  <br>
  
<div class="container  ">
  <p class="container text-center h4" >این
    <span class="web">وبسایت</span>
     با هدف ارائه محاسبات و ابزارهای آنلاین شروع به کار کرده است  ابزارهایی که هر جایی ممکن است مورد نیاز باشد 
    
    در این سایت میتوانید انواع محاسبات را به سهولت انجام دهید
     </p>
  </div>  
    <hr class="my-4">
</div>
</template>


<script>
export default {
  computed:{
  hearoIMG(){
    return this.$store.state.hearoIMG;
  }
 },
}
</script>
