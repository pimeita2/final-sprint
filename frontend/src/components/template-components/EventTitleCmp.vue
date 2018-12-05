
<template>
  <section class="event-title-container">
    <textarea
      rows="1"
      class="event-name"
      v-model="data.txt"
      :class="{'select-box-border': isSelected}"
           :style="data.css"

      @click="connectToEditor()"
      @focusout ="isSelected = false"
      @input="updateEventName($event, id)"
    />
    <!-- <P>{{data.txt}}</P> -->
  </section>
</template>
<script>
export default {
  props: {
    data: Object,
    id: String
  },

  data() {
    return {};
  },
  created() {},
  methods: {
    connectToEditor() {
      this.isSelected = true;
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "text" });
    },
    updateEventName(ev, cmpId) {
      var newTxt = ev.target.value;
      this.$store.dispatch({type:"updateTxt", newTxt, cmpId});
      // templateService.saveData(newInvaitorName);
    }
  },
  computed: {},
  components: {}
};
</script>

<style>
</style>