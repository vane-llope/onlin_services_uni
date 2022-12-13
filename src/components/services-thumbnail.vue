<template>
<div class="container">
    <div class="row">
        <div class=" col-sm-3 col-6" v-for="service in services" :key="service.id">
           <router-link :to="`/services/${service.name}`" class="nav-link ">
            <div class="m-2" role='button'>
            <img class="w-50" :src="require(`@/assets/icons/${service.img}`)" alt="" />
            <p>{{service.pname}}</p>
             </div>
            </router-link> 

         
        </div>
    </div>
</div>
</template>

<script>
export default {
 computed:{
  services(){
    return this.$store.state.services;
  }
 }

};
</script>

