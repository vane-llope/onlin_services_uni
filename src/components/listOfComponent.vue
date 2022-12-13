<template>

    <div class="container d-none d-xl-block d-xxl-none" >
        <div class="tableM">
          <table class="table-bordered table table-striped table-hover">
            <thead>
              <tr class="text-center ">
                <th class="h1 text-bold"> ابزار ها </th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="service in services" :key="service.id" role="button">
                <td> <router-link :to="`/services/${service.name}`" class="text-decoration-none h6 ">{{service.pname}}</router-link> </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>


<script>
export default {
computed:{
  services(){
    return this.$store.state.services;
  }
 },
  methods: {
    choosenComponent(name){
        alert(name);
    }
  },
};
</script>