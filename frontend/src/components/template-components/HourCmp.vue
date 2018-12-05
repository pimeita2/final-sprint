<template>
  <section class="time-container">
   
   
      <input
        class="time"
        type="time"
        v-model="data.txt"
        @click="connectToEditor('hour')"
        :class="{'select-box-border': isSelected}"
       :style="data.css"
              @focusout ="isSelected = false"
      >
    
   
  </section>
</template>  n     

<script>
export default {
  props: {
    data: Object
  },
  data(){
    return{
       isSelected: false

    }
  },
  methods: {
    connectToEditor(cmpPart) {
      this.isSelected = true;
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", cmpPart);
      this.$emit("showEditor", { kind: "text" });

    }
  },
  computed: {

  }
};
</script>

<style>
.select-box-border{
  border:1px dashed black;
}

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
