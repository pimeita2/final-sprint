<template>
  <section>
    <div class="time-details">
    <p class="time">
      <input
        class="time"
        type="time"
        v-model="data.txt"
        @click="connectToEditor('time')"
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

  }
};
</script>

<style>
.time-details input {
  margin: 5px;
  color: rgb(153, 49, 54);
  text-transform: capitalize;
}
.time {
  display: flex;
  justify-content: start;
  margin: 0 2px;
}

.time input {
  margin: 0 5px;
}
</style>
