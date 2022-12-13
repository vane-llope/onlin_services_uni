<template>
<div class="container">
    <div class="row">
  <div class="col-sm-5">
    <listOfComponents/>
  </div>
<div class="col-sm-7">
            <h1 class="text-center">MBI محاسبه ی</h1>
            <input class="form-control text-center " type="text" placeholder="وزن خود را به واحد کیلو گرم وارد کنید به طور مثال 70" v-model="Weight" />
            <input class="form-control text-center mt-3 " type="text" placeholder="قد خود را (به واحد متر) وارد کنید به طور مثال 1.80" v-model="Height" />

            <div>
                <div class="mt-5">
                    <button class="btn btn-primary col-12 text-center text-light" type="button" @click="calculate">
                        تایید
                    </button>
                </div>
            </div>

            <div class="mt-3 text-center" style="min-height: 120px">
                <div class="card card-body " style="width: 100%">
                    <p>{{ result }}</p>
                </div>
            </div>
 <div class="col-12 mt-1">
        <div class="text-center" style="min-height: 120px">
            <div class="text-end ">
                <p>
                    طبق گفته سازمان سلامت جهانی شاخص توده بدنی مناسب برای بزرگسالان بین
                    ۱۸.۵ تا ۲۴.۵ تعیین شده است
                </p>
                افرادی که 25 تا 29 هستند دارای اضافه وزن بوده وافرادی که بالاتر از ۳۰
                باشند، جزء افراد چاق به حساب می آیند افرادی که 40 به بالا هستند، از
                چاقی مفرط رنج می برند
                <p>
                    شاخص توده بدنی خانمها و آقایان به همین صورت محاسبه شده و هیچ تفاوتی
                    با یکدیگر ندارند
                </p>
                <p>
                    حدود ۱.۵ میلیون از جمعیت بزرگسالان بالای ۲۰ سال (حدود ۳۴ درصد از
                    جمعیت بزرگسالان جهان) از چاقی و اضافه وزن رنج می برند. انتظار می رود
                    که این جمعیت تا سال ۲۰۳۰ به ۳ میلیون نفر برسد
                </p>
            </div>
        </div>
    </div>



</div>
    </div>
  
    
   
</div>
</template>

<script>
import listOfComponents from "../../components/listOfComponent.vue";
export default {
  name: "MBI",
  data() {
    return {
      Weight: "",
      Height: "",
      result: "",
    };
  },
  components: {
    listOfComponents,
  },
  methods: {
    calculate() {
      if(this.Weight == "" || this.Height == "") this.result  = "لطفا اطلاعات خود را به طور کامل وارد کنید"
      else this.result = this.Weight / (this.Height * this.Height);
    },
    callcomp(x) {
      this.$emit("comp", x);
    },
  },
};
</script>
