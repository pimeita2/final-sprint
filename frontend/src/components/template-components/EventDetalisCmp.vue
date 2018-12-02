<template>
  <section class="event-details-container">
    <div class="event-details">
      <p class="date-time">
        <input
          class="date"
          v-model="data.date"
          type="date"
          @click="connectToEditor('date')"
          :style="{color: this.detailsStyle[3].style.color,
              textAlign:this.detailsStyle[3].style.textAlign,
              fontFamily:this.detailsStyle[3].style.fontFamily,
              fontSize:this.detailsStyle[3].style.size+'px'}"
        >
        <input
          class="time"
          type="time"
          v-model="data.time"
          @click="connectToEditor('time')"
          :style="{color: this.detailsStyle[4].style.color,
              textAlign:this.detailsStyle[4].style.textAlign,
              fontFamily:this.detailsStyle[4].style.fontFamily,
              fontSize:this.detailsStyle[4].style.size+'px'}"
        >
      </p>
      <input
        class="address"
        v-model="data.address"
        @click="connectToEditor('address')"
        :style="{color: this.detailsStyle[5].style.color,
              textAlign:this.detailsStyle[5].style.textAlign,
              fontFamily:this.detailsStyle[5].style.fontFamily,
              fontSize:this.detailsStyle[5].style.size+'px'}"
      >
      <!-- {{data.address}} -->
      <!-- @input="updateData($event, 'address')" -->
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
      this.$emit("showEditor", {kind:'text'});
    }
    //  updateData(ev, cmpPart) { // how the make name of var as name of new var?
    //   var {cmpPart} = ev.target.value;
    //   templateService.saveData(cmpPart, cmpPart);
    // },
  },
  computed: {
    detailsStyle() {
      return this.$store.getters.getUserStyle;
    }
  }
};
</script>

<style>
.event-details input {
  margin: 5px;
  color: rgb(153, 49, 54);
  text-transform: capitalize;
}
.date-time {
  display: flex;
  justify-content: start;
  margin: 0 2px;
}

.date-time input {
  margin: 0 5px;
}
</style>