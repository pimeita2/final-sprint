<template>
  <section>
    <div class="address-details">
      <input
        class="address"
        v-model="data.txt"
        :class="{'select-box-border': isSelected}"
        @click="connectToEditor()"
        :style="data.css"
        @focusout="isSelected=false"
      >
    </div>
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
  },
};
</script>

<style>
.address {
  margin: 5px;
  text-transform: capitalize;
  color: black;
  width:100%;
}
.select-box-border {
  border: 1px dashed black;
}
</style>