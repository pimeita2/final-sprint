

<template>
  <section class="event-title-container">
    <textarea rows=1
      class="event-name"
      v-model="data.txt"
      :class="{'select-box-border': isSelected}"
      :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontWeight:data.css.fontWeight,
              fontSize:data.css.fontSize}"
      @click="connectToEditor('eventTitle')"
      @focusout ="isSelected = false"
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
    return {
      isSelected: false,
    };
  },
  created() {},
  methods: {
    connectToEditor(cmpPart) {
      this.isSelected = true;
      // console.log("in connect to editor", cmpPart);
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
.select-box-border{
  border:1px dashed black;
}

</style>