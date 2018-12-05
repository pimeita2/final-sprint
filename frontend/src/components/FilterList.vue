

<template>

 <form class="filter">

     <label>
         <input class="search-input" type="search"  placeholder="Search Design...">
     </label>
     
     <i class="fas fa-search"></i>
      <h6>Filter By:</h6>
     <label>
         <input type="checkbox" value="lastCreated">Last Created
     </label>
      <label>
         <input type="checkbox" value="lastCreated">By Rank
     </label>
      <label>
         <input type="checkbox" value="lastCreated">Most Used
     </label>
      
 </form>
</template>

<script>
// import userLogin from '@/components/UserLogin.vue'

export default {
    components:{
     
    },

    data(){
      return {
      
      }
    },
    methods:{
      
      }
    }
</script>


<style>
 .filter{
     width:200px;
     border-right: 2px solid lightgrey;
 }

.search-input{
  border: 2px solid lightgray;
  border-radius: 6px;
  padding: 5px;
}

 .filter label{
  margin: 10px 20px;
  padding: 0 20px;
  
 }
</style>