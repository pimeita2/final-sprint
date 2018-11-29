<template>
  <section class="event-description-container">
    <input class="invaitor-name" v-model="titleData.invaitorName" @click="connectToEditor">
    <textarea class="event-name" v-model="titleData.eventName"/>
    <input class="short-description" v-model="titleData.shortDescription">
  </section>
</template>
<script>
export default {
 props:{
    data: Object
  },
  created() {
    console.log();
    //  @blur="updateInvaitorName"
    //  @blur="updateEventName"
    //  @blur="updateShortDescription"
  },
    methods: {
      connectToEditor(){
        
      }
    }, 
  computed: {
    titleData() {
      return this.$store.getters.getData;
    }
  }
};
</script>

<style>
.event-description-container {
  padding: 10px;
  /* color: rgb(153, 49, 54); */
}
.event-description-container:hover {
  cursor: all-scroll;
}
.invaitor-name {
  text-align: center;
  font-size: 14px;
  /* font-family: "Satisfy", cursive; */
  text-transform: uppercase;
  margin-bottom: 7px;
  color: rgb(153, 49, 54);
}
.event-name {
  /* padding: 18px; */
  font-size: 34px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: rgb(153, 49, 54);
  max-width: 300px;
}
.short-description {
  background-color: rgb(153, 49, 54);
  font-size: 12px;
  color: white;
  max-width: 300px;
  width: 100%;
  text-align: center;
}
</style>