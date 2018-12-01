<template>
  <section class="event-description-container">
    <input
      class="invaitor-name"
      v-model="data.invaitorName"
      :style="{color: this.titleStyle[0].style.color,
              textAlign:this.titleStyle[0].style.textAlign,
              fontFamily:this.titleStyle[0].style.fontFamily}"

      @click="connectToEditor('invaitorName')"
    >
    <textarea
      class="event-name"
      v-model="data.eventName"
      :style="{color: this.titleStyle[1].style.color,
              textAlign:this.titleStyle[1].style.textAlign,
              fontFamily:this.titleStyle[1].style.fontFamily}"
      @click="connectToEditor('eventName')"
    />
    <input
      class="short-description"
      v-model="data.shortDescription"
      :style="{color: this.titleStyle[2].style.color,
              textAlign:this.titleStyle[2].style.textAlign,
              fontFamily:this.titleStyle[2].style.fontFamily}"
      @click="connectToEditor('shortDescription')"
    >

  </section>
</template>
<script>
export default {
  props:{
    data:Object
  },
  data() {
    return {

        }
    
  },
  created() {
    console.log();
    //  @blur="updateInvaitorName"
    //   @blur="updateEventName"
    //    @blur="updateShortDescription"

  },
    methods: {
      connectToEditor(cmpPart){
        console.log('in connect to editor', cmpPart);
        this.$emit("connectToCmpPart", cmpPart);
      },
      // style(cmpPart){
      //    console.log('In binding style:', cmpPart);
      //    const currStyle=this.titleStyle.find(obj=>{
      //        if(obj.cmpPartName===cmpPart) return obj;
      //    })
      //    console.log('in style binding', currStyle.cmpPartName, currStyle.style);

      // }
    }, 
  computed: {
    titleData() {
      return this.$store.getters.getData;
    },
    titleStyle(){
      return this.$store.getters.getUserStyle;
    },
    styleInvaitorName(){
      console.log(this.titleStyle[0].style.color);
        color: this.titleStyle[0].style.color
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