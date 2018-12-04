<template>
  <section class="date-container">
        <input
          class="date"
          v-model="data.txt"
          :class="{'select-box-border': isSelected}"
          type="date"
          @click="connectToEditor('day')"
          :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size+'px'}"
              @focusout ="isSelected = false"
        >
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data(){
    return{
      isSelected:false,
    }
  },
  methods: {
    connectToEditor(cmpPart) {
      this.isSelected=true;
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
.date-container input {
  margin: 5px;
  color: rgb(153, 49, 54);
  text-transform: capitalize;
  display: flex;
  justify-content: start;
  margin: 0 2px;
}

.date-container{
  width:40%;
  display: flex;
}

.select-box-border{
  border:1px dashed black;
}

</style>
