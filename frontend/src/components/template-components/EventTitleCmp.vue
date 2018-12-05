
<template>
  <section class="event-title-container">
    <textarea
      rows="1"
      class="event-name"
      v-model="data.txt"
      :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontWeight:data.css.fontWeight,
              fontSize:data.css.fontSize+'px'}"
      @click="connectToEditor('eventTitle')"
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
    connectToEditor(cmpPart) {
      console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", cmpPart);
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