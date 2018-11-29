<template>
  <section class="edit-txt-section" @connectToCmpPart="connectToCmpPart">
    <p @click="handleAlignment" class="align-icon">&#x25A8;</p>
    <p @click="handleFont" class="font-icon">&#x25A8;</p>
    <!-- <p @click="handleColor" class="textColor-icon"> -->
    <!-- <img src="../../assets/textColor.png"> -->
    <input
      class="textColor-icon"
      type="color"
      @change="handleColor"
      value="#ff0000"
      @click="clicked"
    >
    <!-- </p> -->
    <p @click="handleSize" class="textSize-icon">&#x25A8;</p>
  </section>
</template>


<script>
export default {
    props:['currCmpPart'],
  data() {
    return {
      align: "center",
      fontFamily: "arial",
      color: "#FFFFFF",
      fontSize: 16
    };
  },
  created(){
    //  console.log('in edit txt we work on', this.currCmpPart);
  },
  methods: {
    connectToCmpPart(cmpPart) {
        console.log('connect to', cmpPart)
    },
    handleAlignment() {
      this.$emit("styleTextUpdate", {
        field: "textAlign",
        css: { textAlign: this.align }
      });
    },
    handleFont() {
      this.$emit("styleTextUpdate", {
        field: "fontFamily",
        css: { fontFamily: this.fontFamily }
      });
    },
    clicked() {
      console.log("was clicked");
    },
    handleColor(event) {
      console.log("in color:", event.target.value);
      this.color = event.target.value;
      this.$emit("styleTextUpdate", {
        field: "color",
        css: { color: this.color }
      });
    },
    handleSize() {
      this.$emit("styleTextUpdate", {
        field: "fontSize",
        css: { fontSize: this.fontSize }
      });
    }
  }
};
</script>

<style>
.edit-txt-section {
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 118px;
  top: 130px;
  width: 20%;
  height: 12%;
  overflow: auto;
  background-color: #4d4d4d;
  border-radius: 0px 10px 10px 0px;
}

.edit-txt-section img {
  height: 25px;
  width: 25px;
  cursor: pointer;
}
.align-icon,
.font-icon,
.textColor-icon,
.textSize-icon {
  margin: 20px;
  border-radius: 3px;
}

.textColor-icon {
  margin: 5px;
}
</style>
