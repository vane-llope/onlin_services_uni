<template>
<div class="container">
    <div class="row">
        <div class="col-sm-5">
            <listOfComponents />
        </div>
        <div class="col-sm-7">
            <h1 class="text-center">تبدیل به ریال و تومان</h1>
             <!--<div class="mt-2 d-flex justify-content-around">
                <div >
                    <label>  تبدیل به ریال </label>
                    <input type="checkbox" class="form-check-input bg-primary" v-model="rial" />
                </div>
                  <div class="mt-2">
                    <label> تبدیل به تومان </label>
                    <input type="checkbox" class="form-check-input bg-primary"  v-model="toman" />
                </div>
                 </div>-->

         
                 
            
         
            <input class="form-control text-center mt-4 darkothercopm" type="number" placeholder="عدد را وارد کنید" v-model="number" />
            
            <div>
                <div class="mt-3 d-flex justify-content-around">
                    <button class="btn btn-primary text-center text-light mt-2 col-6" type="button" @click="shiftToRial({number})">
                        به ریال
                    </button>
                     <button class="btn btn-primary text-center text-light mt-2 col-6" type="button" @click="shiftToToman({number})">
                        به تومان
                    </button>
                </div>

                <div class="mt-3 text-center" style="min-height: 120px ">
                    <div class="card card-body " style="width: 100%">
                        <p>{{ result }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Num2persian from '../../../node_modules/num2persian'
import listOfComponents from "../../components/listOfComponent.vue";
export default {
    name: "numToLetter",
    components: {
        listOfComponents,
    },
    data: function () {
        return {
            number: "",
            result: "",
        }
    },
    methods: {
        shiftToRial(x) {
            var rial = (x.number.toString()) + 0
            this.result = Num2persian(rial) + " ریال ";
        },
        shiftToToman(x) {
            var toman  = x.number.toString().substr(0, x.number.toString().length-1); 
            this.result = Num2persian(toman) + " تومان ";
        }
    }
}
</script>
