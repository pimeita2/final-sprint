<template>
  <section class="time-container">
    <div >
      <input
        type="text"
        v-model="data.txt"
        @click="connectToEditor('hour')"
        :class="{'select-box-border': isSelected}"
       :style="data.css"
              @focusout ="isSelected = false"
               placeholder="00:00"
      >
    </div>
    <!-- :class="{'select-box-border': isSelected}" -->
  </section>
</template>      

<script>
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
  methods: {
    connectToEditor() {
      this.isSelected = true;
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", this.id);
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
