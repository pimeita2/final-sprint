<template>
  <section class="date-time-container">
    <div>
      <datepicker
        class="date-container"
        placeholder="Date ('d-m-Y')"
        :config="{ dateFormat: 'd-m-Y', static: true }"
        v-model="data.txt"
        @click="connectToEditor('day')"
        :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size+'px'}"
        @focusout="isSelected = false"
      ></datepicker>
    </div>
    <div class="time-container">
      <input
        type="text"
        v-model="data.txt"
        placeholder="00:00"
        @click="connectToEditor('hour')"
        class="time-input"
        :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size}"
        @focusout="isSelected = false"
      >
    </div>
    <!-- :class="{'select-box-border': isSelected}" -->
  </section>
</template>

<script>
import Datepicker from "vue-bulma-datepicker";

export default {
  props: {
    data: Object
  },
  data() {
    return {
      isSelected: false
    };
  },
  methods: {
    connectToEditor(cmpPart) {
      this.isSelected = true;
      this.$emit("connectToCmpPart", cmpPart);
      this.$emit("showEditor", { kind: "text" });
    }
  },
  components: {
    Datepicker
  }
};
</script>

<style>

.date-time-container{
  display: flex;
  align-content: space-between;
  
}
.select-box-border {
  border: 1px dashed black;
}
.date-container {
  width: 100px;
  margin: 0 100px;
  /* border: 1px solid #ccc; */
}
.time-container {
  padding: 0;
  height: 36px;
  /* border: 1px solid #ccc; */
}
.time-input {
  width: 117px;
  height: 36px;
  background-color: #f1f1f1;
  letter-spacing: 1px;
  border-radius: 4px;
  font-family: Asap condensed;
  text-align: center;
  font-size: 1rem;
}
</style>
