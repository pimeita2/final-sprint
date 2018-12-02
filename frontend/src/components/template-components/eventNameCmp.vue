

<template>
  <section class="event-name">
    <textarea
      class="event-name"
      v-model="data.eventName"
      :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontWeight:data.css.fontWeight,
              fontSize:data.css.fontSize+'px'}"
      @click="connectToEditor('eventName')"
      @input="updateEventName($event)"
    />
  </section>
</template>
<script>
export default {
  props: {
    data: Object
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
.event-name {
  /* padding: 18px; */
  font-size: 34px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: rgb(153, 49, 54);
  max-width: 300px;
}
</style>