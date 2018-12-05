<template>
  <section>
    <div class="address-details">
      <input
        class="address"
        v-model="data.txt"
        :style="data.css"
        @click="connectToEditor()"
        @input="updateName($event, id)"
        :class="{'select-box-border': isOnEdit}"
        @focus="updateEditStatus"
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
    id: String
  },
  methods: {
    connectToEditor() {
      this.isSelected = true;
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "text" });
    },
       updateName(ev, cmpId) {
      var newTxt = ev.target.value;
      this.$store.dispatch({ type: "updateTxt", newTxt, cmpId });
      // templateService.saveData(newInvaitorName);
    },
    updateEditStatus() {
      this.$store.dispatch("changeEditingStatus", { id: this.id });
    }
  },
  computed: {
     isOnEdit() {
      return this.$store.getters.currenEditing === this.id;
    }
  }
};
</script>

<style>
.address {
  margin: 5px;
  text-transform: capitalize;
  color: black;
  width: 100%;
}
.select-box-border {
  border: 1px dashed black;
}
</style>