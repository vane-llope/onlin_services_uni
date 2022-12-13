<template>
<div class="container">
    <div class="row">
        <div class="col-sm-5">
            <listOfComponents />
        </div>
        <div class="col-sm-7">
            <h1 class="text-center mb-3" style="font-size: 22px">
                محاسبه ی افزایش یا کاهش درصد حقوق، قیمت و غیره
            </h1>
            <input class="form-control text-center mt-3 " type="text" placeholder=" ٪ درصد تغییر" v-model="percent" />
            <input class="form-control text-center mt-3 " type="text" placeholder=" عدد " v-model="num" />

            <div class="mt-4 mb-3">
                <button class="btn btn-primary col-12 text-center text-light" type="button" @click="calculate">
                    تایید
                </button>
            </div>
            <div class="row">
                <div class="mt-3 col-4  text-center">
                    <div class="card card-body " style="width: 100%">
                        <p class="text-center ">نتیجه ی افزایش درصد</p>
                        <p>{{ inc }}</p>
                    </div>
                </div>

                <div class="mt-3 col-4 text-center">
                    <div class="card card-body " style="width: 100%">
                        <p class="text-center ">نتیجه ی کاهش درصد</p>
                        <p>{{ dec }}</p>
                    </div>
                </div>

                <div class="mt-3 col-4 text-center">
                    <div class="card card-body " style="width: 100%">
                        <p class="text-center">میزان تغییر</p>
                        <p>{{ change }}</p>
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
     components: {
    listOfComponents,
  },
  data() {
    return {
      num: "",
      percent: "",
      inc: "",
      dec: "",
      change: "",
    };
  },
  methods: {
    callcomp(x) {
      this.$emit("comp", x);
    },
    calculate() {
      this.percent = parseFloat(this.percent / 100);
      this.change = parseFloat(this.num) * parseFloat(this.percent);
      this.inc = parseFloat(this.num) + parseFloat(this.change);
      this.dec = parseFloat(this.num) - parseFloat(this.change);
    },
  },
};
</script>
