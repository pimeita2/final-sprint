<template>
  <section class="time-container">
    <div >
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
      console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", cmpPart);
      this.$emit("showEditor", { kind: "text" });
    }
  }
};
</script>

<style>
.time-container {
  width: 117px;
  padding: 0;
  height: 36px;
}
.time-input {
    height: 36px;

  background-color: #f1f1f1;
  letter-spacing: 1px;
  border-radius: 4px;
  font-family: Asap condensed;
  text-align: center;
  font-size: 1rem;
}
</style>
