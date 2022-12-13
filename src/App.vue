<template>

<div class="container">
  <div class="row">
    <div class="col-12"> <navBar/></div>
    <div class="col-12"> <router-view/> </div>
    <div class="col-12">  <contactUs/></div>
  </div>
 

 
  </div>
</template>

<script>
import contactUs from "./components/contactUs.vue"
import navBar from "./components/navbarComponent.vue"
export default {
  components:{contactUs,navBar},

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
/*transitions*/
/*** fade ***/
  .fade-enter-from{
    opacity: 0;
  }
  .fade-enter-active ,  .fade-leave-active{
    transition: opacity 0.5s ease-out;
  }
  .fade-leave-to{
    opacity: 0;
  }
/*** slide Fade ***/
   .slide-fade-enter-from{
    opacity: 0;
    transform: translateX(-500px);
  }
   
  .slide-fade-enter-active ,  .slide-fade-leave-active{
    transition: all 0.5s ease-out;
  }
  .slide-fade-leave-to{
    opacity: 0;
       transform: translateX(1000px);
  }
</style>
