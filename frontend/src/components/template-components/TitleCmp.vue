<template>
  <section class="event-description-container">
    <input
      class="invaitor-name"
      v-model="data.invaitorName"
      :style="{color: this.titleStyle[0].style.color,
              textAlign:this.titleStyle[0].style.textAlign,
              fontFamily:this.titleStyle[0].style.fontFamily,
              fontWeight:this.titleStyle[0].style.fontWeight,
              fontSize:this.titleStyle[0].style.fontSize+'px'}"

      @click="connectToEditor('invaitorName')"
      @input="updateInvaitorName($event)"
    >
    <textarea
      class="event-name"
      v-model="data.eventName"
      :style="{color: this.titleStyle[1].style.color,
              textAlign:this.titleStyle[1].style.textAlign,
              fontFamily:this.titleStyle[1].style.fontFamily,
              fontWeight:this.titleStyle[1].style.fontWeight,
              fontSize:this.titleStyle[1].style.fontSize+'px'}"
      @click="connectToEditor('eventName')"
      @input="updateEventName($event)"
    />
    <input
      class="short-description"
      v-model="data.shortDescription"
      :style="{color: this.titleStyle[2].style.color,
              textAlign:this.titleStyle[2].style.textAlign,
              fontFamily:this.titleStyle[2].style.fontFamily,
              fontWeight:this.titleStyle[2].style.fontWeight,
              fontSize:this.titleStyle[2].style.fontSize+'px'}"
      @click="connectToEditor('shortDescription')"
      @input="updateShortDescription($event)"
    >

  </section>
</template>
<script>
import templateService from "@/services/templateService.js";
import userLogin from "@/components/UserLogin.vue";

export default {
  props: {
    data: Object
  },
  data() {
    return {
      // invitorName: ''
    };
  },
  created() {
    //to do only overide value if we found them for user
    var invitorName = templateService.query("invitorName")
    // this.invitorName = invitorName

  },
  methods: {
    connectToEditor(cmpPart) {
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", cmpPart);
    },
    updateInvaitorName(ev) {
      alert("kuku");
      var newInvaitorName = ev.target.value;
      console.log(newInvaitorName);
      // this.$store.dispatch({ : "" });// changing to is edit true
      templateService.saveData("invaitorName", newInvaitorName);
    },
    updateEventName(ev) {
      var newEventName = ev.target.value;
      // console.log(newEventName);
      templateService.saveData("eventName", newEventName);
    },
    updateShortDescription(ev) {
      var newShortDescription = ev.target.value;
      templateService.saveData("shortDescription", newShortDescription);
    }
    // style(cmpPart){
    //    console.log('In binding style:', cmpPart);
    //    const currStyle=this.titleStyle.find(obj=>{
    //        if(obj.cmpPartName===cmpPart) return obj;
    //    })
    //    console.log('in style binding', currStyle.cmpPartName, currStyle.style);
    // }
  },
  computed: {
    titleStyle() {
      return this.$store.getters.getUserStyle;
    }
    // styleInvaitorName(){
    //   console.log(this.titleStyle[0].style.color);
    //     color: this.titleStyle[0].style.color
    //    }
  },
  components: {
    templateService
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