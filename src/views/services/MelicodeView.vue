<template>
<div class="container">
  <div class="row">
  <div class="col-sm-5">
    <listOfComponents/>
  </div>
<div class="col-sm-7">
            <h1 class="text-center">تشخیص صحت کد ملی</h1>
            <input class="form-control text-center  mt-3" type="text" placeholder="کد خود را وارد کنید" v-model="checkedResult" />
            <div>
                <div class="mt-3">
                    <button class="btn btn-primary col-12 text-center text-light" type="button" @click="testCode">
                        تایید
                    </button>
                </div>
            </div>
            <div class="mt-3 text-center ">
                <div class="card card-body " >
                    <p>{{ msg }}</p>
                </div>
            </div>
    </div>
 </div>  
  </div>
</template>

<script>
import listOfComponents from "../../components/listOfComponent.vue";
export default {
    name: "MeliCode",
    components:{listOfComponents},
    data: function () {
        return {
            checkedResult: "",
            msg: "لطفا کد مورد نظر را وارد و تایید کنید",
        };
    },

    methods: {
        testCode() {
            if (this.EnglishNumber()) {
              if(this.checkedResult[0]==0){
                if (this.checkedResult.length == 10) {
                    if (this.controlNumber()) {
                        this.msg = "کد صحیح است";
                    } else this.msg = "کد نامعتبر است";
                } else this.msg = "ده رقم باید وارد شود";
            }else this.msg = "کد نامعتبر است";
            }
            
        },
        controlNumber() {
            let result = 0;
            let j = this.checkedResult.length;
            for (let i = 0; i < this.checkedResult.length - 1; i++) {
                result += this.checkedResult[i] * j;
                j--;
            }
            result = Math.floor(result % 11);

            if (result >= 2) {
                result = 11 - result;
            }

            if (result == this.checkedResult[this.checkedResult.length - 1])
                return true;
            else return false;
        },
        EnglishNumber() {
            const pn = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

            for (let z = 0; z < 11; z++) {
                if (this.checkedResult.includes(pn[z], 0)) {
                    this.msg = "لطفا اعداد را به انگلیسی تغییر دهید";
                    return false;
                }
            }
            return true;
        },
        callcomp(x) {
            this.$emit("comp", x);
        },
    },
};
</script>
