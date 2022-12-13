<template>
<div class="container">
    <div class="row">
        <div class="col-sm-5">
           <listOfComponents />
        </div>
        <div class="col-sm-7 text-center ">
                <p id="clock" class="h1"></p>
                <!--per-->
                <div class="d-flex justify-content-between mt-5">
                    <p id="perL"></p>
                    <p id="perN"></p>
                </div>
                <!--eng-->
                <div class="d-flex justify-content-between">
                    <p id="engL"></p>
                    <p id="engN"></p>
                </div>
                <!--hijri-->
                <div class="d-flex justify-content-between">
                    <p id="hijriL"></p>
                    <p id="hijriN"></p>
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
  methods: {
    callcomp(x) {
      this.$emit("comp", x);
    },
  },
  mounted() {
    let myClock = () => {
      let myDate = new Date();
      //clock
      let clock = document.querySelector("#clock");
      clock.textContent =
        myDate.getHours() +
        " : " +
        myDate.getMinutes() +
        " : " +
        myDate.getSeconds();
    };
    setInterval(myClock, 1000);

    const event = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    document.querySelector("#perL").textContent = event.toLocaleDateString(
      "per-fa",
      options
    );
    document.querySelector("#perN").textContent =
      event.toLocaleDateString("per-fs");

    document.querySelector("#engL").textContent = event.toLocaleDateString(
      undefined,
      options
    );
    document.querySelector("#engN").textContent =
      event.toLocaleDateString("en-us");

    document.querySelector("#hijriL").textContent = event.toLocaleDateString(
      "ar-sa",
      options
    );
    document.querySelector("#hijriN").textContent =
      event.toLocaleDateString("ar-sa");
  },
};
</script>
