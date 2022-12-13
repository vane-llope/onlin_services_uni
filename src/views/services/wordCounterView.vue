<template>
<div class="container " >
    <div class="row">
        <div class="col-sm-5">
            <listOfComponents />
        </div>
        <div class="col-sm-7">
            <h1 class="text-center h2">شمارش کاراکتر,کلمه و جمله</h1>
            <textarea class="form-control text-center w-100 h-75" type="" placeholder="متن خود را وارد کنید" v-model="text" />
            <div>
          <div class="mt-3">
            <button
              class="btn btn-primary col-12 text-center text-light"
              type="button"
              @click="count">
              تایید
            </button>
          </div>
        </div>

        <div class="mt-3 mb-5 text-center h-75">
          <div class="card card-body w-100 ">
            <div class="d-flex justify-content-between">
            <p>تعداد کاراکتر: {{ char }}</p>
            <p>تعداد کلمه: {{ word }}</p>
            <p>تعداد جمله: {{ sentence }}</p>
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
      text: [],
      char: 0,
      word: 0,
      sentence: 0,
    };
  },
  methods: {
    count() {
      this.char = this.text.length;
      if (this.text[this.text.length - 1] != ".") this.text += ".";
      this.word = 0;
      this.sentence = 0;
      let i;
      for (i = 0; i < this.text.length; i++) {
        if (this.text[i] == " ") this.word += 1;
        if (this.text[i] == ".") {
          this.sentence += 1;
        }
      }
      this.word += 1;
      if(this.word==0) this.word =1
      
    },
    callcomp(x) {
      this.$emit("comp", x);
    },
  },
};
</script>
