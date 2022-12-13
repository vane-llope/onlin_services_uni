<template>
<div class="container">
    <div class="row">
        <div class="col-sm-5">
            <listOfComponents />
        </div>
        <div class="col-sm-7">
            <h1 class="text-center">تبدیل عدد به حروف</h1>
            <input class="form-control text-center mt-4 " type="number" placeholder="عدد را وارد کنید" v-model="number" />
            <div>
                <div class="mt-3">
                    <button class="btn btn-primary col-12 text-center text-light mt-2" type="button" @click="changeNumber">
                        تایید
                    </button>
                </div>

                <div class="mt-3 text-center" style="min-height: 120px ">
                    <div class="card card-body " style="width: 100%">
                        <p>{{ resultN }}</p>
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
    }},
    computed:{
      resultN(){
         return Num2persian(this.number);
      }
    }
    }
</script>
