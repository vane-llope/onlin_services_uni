<template>
<nav class="nav my-3 d-flex justify-content-between">
<div class="d-flex flex-row">
  <div class="p-2"><div class="form-check form-switch ">
        <input type="checkbox"  class=" form-check-input h4 " role="switch" @click="myFunction()" >
        </div></div>
  <div class="p-2"> <router-link :to="`/`" class="text-decoration-none h5 me-3 mt-1"  data-bs-toggle="modal" data-bs-target="#exampleModal">دربارهما</router-link></div>
  <div class="p-2"> <router-link :to="`/`" class="text-decoration-none h5 me-4 mt-1">خانه</router-link> </div>
</div>
<div class="d-flex flex-row-reverse">
  <div class="p-2">  <h1 class=" h3">ابزارهای آنلاین</h1></div>
</div>
<!-- Modal-->
<div class="modal fade text-light" style="--bs-bg-opacity: .5;" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">درباره ی ما</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-end bg-dark " >
         <p>
          بخش های متنوع این وبسایت شامل تولید پسورد تصادفی,بررسی صحت کد ملی,تبدیل عدد فارسی و انکلیسی,تبدیل عدد به حروف,شمارش کاراکتر,کلمه و جمله,محاسبه ی شاخص توده ی بدنی و نمایش تاریخ روز و ... میباشد
        </p>
        <p>
          این وبسایت با هدف ارائه محاسبات و ابزارهای آنلاین شروع به کار کرده است ابزارهایی که هر جایی ممکن است مورد نیاز باشد در این سایت میتوانید انواع محاسبات را به سهولت انجام دهید
        </p>
      </div>
      <div class="modal-footer">
        <button type="button"  class="btn " data-bs-dismiss="modal">Close</button>
      </div>
  </div>
</div>
</nav>
</template>

<script>
export default {
   methods: {
            myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
     
    },
    computed:{
  services(){
    return this.$store.state.services;
  },
   
}
}
</script>

<style lang="scss" >


body a{
  color: black;
}


.dark-mode {
    background-color: #0f1316;
    color: #ffffff;
}

.dark-mode a{
  color:#ffffff
}

.dark-mode th{
  color: #ffffff;
}

.dark-mode .card p{
  color: #0f1316;
}

.dark-mode ul,li{
  color: #ffffff;
}
  .introimg  {
     background-image: url(../assets/images/intro.jpg);
     width: 50%;
  margin-left: 25%;

  height: 400px;
  background-repeat: no-repeat;
  }
  .dark-mode .introimg {

  background-image: url(../assets/images/introDark.jpg);
   width: 50%;
  margin-left: 25%;

  height: 400px;
  background-repeat: no-repeat;
}

.dark-mode .introimg img {
  display: none;
}




</style>
