<template>
  <section class="event-details-container">
    <div class="address-details">
      <input
        class="address"
        v-model="data.txt"
        :class="{'select-box-border': isSelected}"
        @click="connectToEditor('location' , $event)"
        :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size}"
              @focusout ="isSelected=false"
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data(){
    return{
      isSelected:false,
    }
  },
  methods: {
    connectToEditor(cmpPart, ev) {
      this.isSelected=true;
      console.log(ev, ev.target.rect);
      this.$emit("connectToCmpPart", cmpPart);
      this.$emit("showEditor", { kind: "text" });

    }
  },
};
</script>

<style>
.address-details input {
  margin: 5px;
  color: black;
  width:100%;
  font-size: 20px;
}

.select-box-border{
  border:1px dashed black;
}

</style>