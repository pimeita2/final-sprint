<template>
  <section class="event-description-container">
    <input class="invaitor-name" @blur="updateInvaitorName" v-model="titleData.invaitorName">
    <input class="event-name" @blur="updateEventName" v-model="titleData.eventName">
    <input class="short-description" @blur="updateShortDescription" v-model="titleData.shortDescription">  
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
.event-description-container h3 {
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