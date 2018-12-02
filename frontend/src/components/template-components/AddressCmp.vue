<template>
  <section class="event-details-container">
    <div class="address-details">
      <input
        class="address"
        v-model="data.txt"
        @click="connectToEditor('address')"
        :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size+'px'}"
      >
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
}

</style>