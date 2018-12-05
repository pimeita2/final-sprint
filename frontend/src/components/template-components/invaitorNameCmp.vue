<template>
  <section class="event-description-container">
    <input
      class="invaitor-name"
      v-model="data.txt"
      :class="{'select-box-border': isSelected}"
      :style="data.css"
      @click="connectToEditor()"
      @focusout ="isSelected = false"
      @input="updateInvaitorName($event, id)"
    >

  </section>
</template>
<script>
import templateService from "@/services/templateService.js";
import userLogin from "@/components/UserLogin.vue";

export default {
  props: {
    data: Object,
    id:String
  },
 
  data() {
    return {
      isSelected: false
    };
  },
  created() {},
  methods: {
    connectToEditor() {
      this.isSelected = true;
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "text" });
    },
    updateInvaitorName(ev) {
      var newInvaitorName = ev.target.value;
      // this.$store.dispatch({ : "" });// changing to is edit true
      templateService.saveData(newInvaitorName);
    },
   
  },
  computed: {


  },
  components: {
    
  }
};
</script>

<style>

.select-box-border{
  border:1px dashed black;
}
.invaitor-name{
  width:100%;
}

/* .invaitor-name {
  text-align: center;
  font-size: 14px;
  font-family: "Satisfy", cursive;
  text-transform: uppercase;
  margin-bottom: 7px;
  color: rgb(153, 49, 54);
} */


</style>