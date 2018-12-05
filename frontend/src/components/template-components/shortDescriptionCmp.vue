<template>
  <section class="short-description-container">
       <input
      class="short-description"
      v-model="cmp.data.txt"
      :class="{'select-box-border': isSelected}"
      :style="cmp.data.css"
      @click="connectToEditor()"
      @focusout ="isSelected = false"
      @input="updateShortDescription($event)"
    > 
    

  </section>
</template>
<script>
import templateService from "@/services/templateService.js";
import userLogin from "@/components/UserLogin.vue";

export default {
  props: {
    cmp: Object
  },
  data() {
    return {
      isSelected: false,
    };
  },
  created() {},
  methods: {
    connectToEditor() {
      this.isSelected = true;
      this.$emit("connectToCmpPart", this.cmp.id);
      this.$emit("showEditor", { kind: "text" });
    },
    updateShortDescription(ev) {
      var newShortDescription = ev.target.value;
      templateService.saveData(newShortDescription);
    }
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
/* .short-description {
  background-color: rgb(153, 49, 54);
  font-size: 12px;
  color: white;
  max-width: 300px;
  width: 100%;
  text-align: center;
}
.short-description-container {
  padding: 10px; */
  /* color: rgb(153, 49, 54); */
/* }
.short-description-container:hover {
  cursor: all-scroll;
} */
</style>
