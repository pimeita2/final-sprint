<template>
  <section class="event-description-container">
    <input
      class="invaitor-name"
      v-model="data.txt"
      :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontWeight:data.css.fontWeight,
              fontSize:data.css.fontSize}"
      @click="connectToEditor('invaitorName')"
      @input="updateInvaitorName($event)"
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
    return {};
  },
  created() {},
  methods: {
    connectToEditor(cmpPart) {
      console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", cmpPart);
      this.$emit("showEditor", { kind: "text" });
    },
    updateInvaitorName(ev) {
      var newInvaitorName = ev.target.value;
      console.log(newInvaitorName);
      // this.$store.dispatch({ : "" });// changing to is edit true
      templateService.saveData(newInvaitorName);
    }
  },
  computed: {


  },
  components: {
    
  }
};
</script>

<style>

/* .invaitor-name {
  text-align: center;
  font-size: 14px;
  font-family: "Satisfy", cursive;
  text-transform: uppercase;
  margin-bottom: 7px;
  color: rgb(153, 49, 54);
} */


</style>