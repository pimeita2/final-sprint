<template>
  <section class="event-details-container">
    <div class="address-details">
      <input
        class="address"
        v-model="cmp.data.txt"
        :class="{'select-box-border': isSelected}"
        @click="connectToEditor()"
        :style="cmp.data.css"
        @focusout="isSelected=false"
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cmp: Object
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
      this.$emit("connectToCmpPart", this.cmp.id);
      this.$emit("showEditor", { kind: "text" });
    }
    //  updateData(ev, cmpPart) { // how the make name of var as name of new var?
    //   var {cmpPart} = ev.target.value;
    //   templateService.saveData(cmpPart, cmpPart);
    // },
  },
  computed: {
    // addressStyle() {
    //   return this.$store.getters.getUserStyle;
    // }
  }
};
</script>

<style>
.address-details input {
  margin: 5px;
  color: rgb(153, 49, 54);
  text-transform: capitalize;
  width: 55%;
}

.select-box-border {
  border: 1px dashed black;
}
</style>