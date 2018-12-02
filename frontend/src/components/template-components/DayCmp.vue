<template>
  <section class="date-container">
    <div class="date-details">
      <p class="date">
        <input
          class="date"
          v-model="data.txt"
          type="date"
          @click="connectToEditor('date')"
          :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size+'px'}"
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    connectToEditor(cmpPart) {
      console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", cmpPart);
    }
  },
  computed: {
    // dateStyle() {
    //   return this.$store.getters.getUserStyle;
    // }
  }
};
</script>

<style>
.date-details input {
  margin: 5px;
  color: rgb(153, 49, 54);
  text-transform: capitalize;
}
.date {
  display: flex;
  justify-content: start;
  margin: 0 2px;
}

.date input {
  margin: 0 5px;
}
</style>
