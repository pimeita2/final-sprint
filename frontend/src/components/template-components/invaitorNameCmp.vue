<template>
  <section class="event-description-container">
    <input
      class="invaitor-name"
      v-model="data.txt"
      :class="{'select-box-border': isSelected}"
      :style="data.css"
      @click="connectToEditor()"
      @input="updateInvaitorName($event, id)"
      @focusout="isSelected=false"
    >
  </section>
</template>
<script>
import templateService from "@/services/templateService.js";
import userLogin from "@/components/UserLogin.vue";

export default {
  props: {
    data: Object,
    id: String
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
    }
  },
  computed: {},
  components: {}
};
</script>

<style>
.select-box-border {
  border: 1px dashed black;
}
</style>