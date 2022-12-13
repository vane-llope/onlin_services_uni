<template>
<div class="container">
    <div class="row">
        <div class="col-sm-5">
            <listOfComponents />
        </div>
        <div class="col-sm-7">

            <h1 class="text-center"><strong>پسورد تصادفی</strong></h1>
            <div class="mt-1 text-center">
                <div class="card card-body ">
                    <p>{{ result }}</p>
                </div>
            </div>
            <div class="my-3">
                <input class="form-range w-100" type="range" min="1" max="26" v-model="length" id="myRange" />
            </div>
            <div class="text-end">

                <input class="form-control-range" type="number" id="length" min="4" max="26" v-model="length" />

                <label class="lengthLabel">طول پسورد</label>
                <div class="mt-2">
                    <label> شامل حروف کوچک بشود</label>
                    <input type="checkbox" class="form-check-input bg-primary" checked v-model="checkedLowercase" />
                </div>
                <div class="mt-2">
                    <label> شامل حروف بزرگ بشود</label>
                    <input type="checkbox" class="form-check-input bg-primary" checked v-model="checkedUppercase" />
                </div>
                <div class="mt-2">
                    <label>شامل عدد بشود</label>
                    <input type="checkbox" class="form-check-input bg-primary" checked v-model="checkedNumbers" />
                </div>
                <div class="mt2">
                    <label> شامل نشانه ها بشود</label>
                    <input type="checkbox" class="form-check-input bg-primary" checked v-model="checkedSymbols" />
                </div>
            </div>
            <div class="mt-3">
                <button class="btn btn-primary col-12 text-center text-light" type="button" id="generate" @click="Generate">
                    تایید
                </button>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import listOfComponents from "../../components/listOfComponent.vue";
export default {
    name: "passwordGenerator",
     components: {
    listOfComponents,
  },
    data: function () {
        return {
            checkedLowercase: true,
            checkedUppercase: true,
            checkedNumbers: true,
            checkedSymbols: true,
            length: "",
            result: "پسورد",
            chechedArray: [],

            test: '',
        };
    },
    methods: {
        Generate() {
            this.result = "";
            if (
                this.checkedLowercase == false &&
                this.checkedUppercase == false &&
                this.checkedNumbers == false &&
                this.checkedSymbols == false
            )
                this.result = "لطفا یکی از گزینه ها رو انتخاب کنید";
            else if (this.length == "") this.result = "لطفا طول رمز را تعیین کنید";
            else if(this.length>27) this.result = "طول رمز باید کمتر از 26 انتخاب شود"
            else {
                for (let i = this.length; i > 0; i--) {
                    this.CheckFunctionArray();
                    this.result +=
                        this.chechedArray[
                            Math.floor(Math.random() * this.chechedArray.length)
                        ];
                }
            }
        },
        //mount checkArray
        CheckFunctionArray() {
            this.chechedArray = [];
            if (this.checkedLowercase) this.chechedArray.push(this.getRandomLower());
            if (this.checkedUppercase) this.chechedArray.push(this.getRandomUpper());
            if (this.checkedNumbers) this.chechedArray.push(this.getRandomNumber());
            if (this.checkedSymbols) this.chechedArray.push(this.getRandomSymbol());
        },
        getRandomNumber() {
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        },
        // Generator functions
        getRandomLower() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        },
        getRandomUpper() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        },
        getRandomSymbol() {
            // symbol = "!@$%^&*()_+=-*|/`~<>,.?:;";
            const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
            return symbol[Math.floor(Math.random() * symbol.length)];
        },
        callcomp(x) {
            this.$emit('comp', x);
        }
    },

};
</script>

