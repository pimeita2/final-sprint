

<template>
  <section class="event-title-container">
    <textarea rows=1
      class="event-name"
      v-model="cmp.data.txt"
      :class="{'select-box-border': isSelected}"
           :style="cmp.data.css"

      @click="connectToEditor()"
      @focusout ="isSelected = false"
      @input="updateEventName($event)"
    />

  </section>
</template>
<script>
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
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", this.cmp.id);
      this.$emit("showEditor", { kind: "text" });
    },
    updateEventName(ev) {
      var newInvaitorName = ev.target.value;
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
.select-box-border{
  border:1px dashed black;
}

</style>