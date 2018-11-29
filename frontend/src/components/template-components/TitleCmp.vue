<template>
  <section class="event-description-container">
    <input class="invaitor-name" v-model="titleData.invaitorName" @click="connectToEditor">
    <input class="event-name" v-model="titleData.eventName">
    <input class="short-description" v-model="titleData.shortDescription">  
  </section>
</template>
<script>
export default {
  data() {
    return {
      };
  },

  created(){
    console.log();
//  @blur="updateInvaitorName"
//   @blur="updateEventName"
//    @blur="updateShortDescription"
  },
    methods: {
      connectToEditor(){
        
      }
    }, 
  computed: {
    titleData(){
      return this.$store.getters.getData;
    },
  }
};
</script>

<style>
.event-description-container {
  padding: 10px;
}
.event-description-container:hover{
  cursor: all-scroll;
}
.invaitor-name {
  font-size: 14px;
  font-family: "Satisfy", cursive;
  text-transform: uppercase;
}
.event-name {
  margin: 18px;
  font-size: 34px;
  font-weight: bold;
}
.short-description {
  background-color: rgb(153, 49, 54);
  font-size: 12px;
  color: white;
}
</style>