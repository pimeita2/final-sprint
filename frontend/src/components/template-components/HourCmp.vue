<template>
  <section class="time-container">
   
   
      <input
        class="time"
        type="time"
        v-model="data.txt"
        @click="connectToEditor('hour')"
        :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size+'px'}"
      >
    
   
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
      this.$emit("showEditor", { kind: "text" });

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
    display: flex;
  /* justify-content: start; */
  margin: 0 2px;
  width:40%;
  /* font-size: 18px; */
}


.time-container{
  width:40%;
  display: flex;
  float: right;
}
</style>
