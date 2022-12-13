<template>
  <div class="about">
    <div class="w-25 m-auto d-flex mb-5">
      <input v-model="sth" class="form-control " type="text">
      <button class="btn btn-success " @click="addToList">Add</button>
      <button class="btn btn-info " @click="sortList">Sort the list</button>
    </div>
    <transition-group name="list-pop-up" tag="ul" class="list-group " appear>
     <li class="list-group-item w-25 m-auto list-group-item-action" v-for="title in myList" :key="title" @click="deleteTitle(title)" >
       {{ title}}
      </li>
    </transition-group>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      myList:[
       /* {id:1,name:"title1"},
        {id:2,name:"atitle4"},
        {id:3,name:"title3"}*/
        "zahra","elham","javad","fariba"
      ],
      sth:''
    }
  },
  methods: {
    addToList(){
      this.myList.push(this.sth)
    },
    deleteTitle(id){
      console.log(id)
      var index = parseInt(this.myList.indexOf(id))
      console.log(index)
      this.myList.slice(1,3)
      console.log(this.myList)
    },
    sortList(){
      this.myList.sort()
    }
  },
}
</script>
