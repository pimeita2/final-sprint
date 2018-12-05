<template>
  <section class="date-container">
    <input
      class="date"
      v-model="cmp.data.txt"
      type="date"
      @click="connectToEditor()"
         :style="cmp.data.css"

    >
    <datepicker
      placeholder="European Format ('d-m-Y')"
      :config="{ dateFormat: 'd-m-Y', static: true }"
    ></datepicker>
        <!-- <input
          class="date"
          v-model="data.txt"
          :class="{'select-box-border': isSelected}"
          type="date"
          @click="connectToEditor('day')"
          :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size}"
              @focusout ="isSelected = false"
        > -->
  </section>
</template>

<script>
import Datepicker from "vue-bulma-datepicker";

export default {
  props: {
    cmp: Object
  },
  data(){
    return{
      isSelected:false,
    }
  },
  methods: {
    connectToEditor() {
      this.isSelected=true;
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", this.cmp.id);
      this.$emit("showEditor", { kind: "text" });
    }
  },
  components: {
    Datepicker
  }
};
</script>

<style>
.date-container input {
  margin: 5px;
  color: rgb(153, 49, 54);
  text-transform: capitalize;
  display: flex;
  justify-content: start;
  margin: 0 2px;
}

.date-container {
  width: 40%;
  display: flex;
}

.select-box-border{
  border:1px dashed black;
}

</style>
