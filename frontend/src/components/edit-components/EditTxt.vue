<template>
  <section class="edit-txt-section" @connectToCmpPart="connectToCmpPart">
      <p @click="handleAlignment" class="align-icon">
        <img
          src="../../assets/align-left.svg"
          @click.stop="handleAlignment('left')"
          alt="align left"
        >
        <img
          src="../../assets/align-center.png"
          @click.stop="handleAlignment('center')"
          alt="align center"
        >
        <img
          src="../../assets/align-right.png"
          @click.stop="handleAlignment('right')"
          alt="align right"
        >
      </p>
      <p @click="handleFont" class="font-icon">
        <img src="../../assets/fonts.png" alt="font">
        <select>
          <option value="font" disable-selection>font</option>
          <option value="coral">coral</option>
          <option value="arial">arial</option>
          <option value="david">david</option>
          <option value="cursive">cursive</option>
        </select>
      </p>
      <!-- <p @click="handleColor" class="textColor-icon"> -->
      <!-- <img src="../../assets/textColor.png"> -->
      <input
        class="textColor-icon"
        type="color"
        @change="handleColor"
        value="#ff0000"
        >
      <!-- </p> -->
      <p class="textSize-icon">
        <img src="../../assets/biger.png" alt="text size" @click.stop="handleSize(1)">
        <img src="../../assets/small.png" alt="text size" @click.stop="handleSize(-1)">
      </p>
    
  </section>
</template>


<script>
export default {
  props: ["currCmpPart"],
  data() {
    return {
      // align: "center",
      // fontFamily: "arial",
      // color: "#FFFFFF",
      // fontSize: 16
    };
  },
  created() {
    //  console.log('in edit txt we work on', this.currCmpPart);
  },
  methods: {
    connectToCmpPart(cmpPart) {
      console.log("Connect to", cmpPart);
      this.currCmpPart=cmpPart;
    },
    handleAlignment(align) {
      console.log("handleAlignment", align);
      this.$emit("styleTextUpdate", {
        field: "textAlign",
        css: { textAlign: align }
      });
    },
    handleFont(event) {
      const fontSelected = event.target.value;
      console.log("font chosen", fontSelected);
      this.$emit("styleTextUpdate", {
        field: "fontFamily",
        css: { fontFamily: fontSelected }
      });
    },
    handleSize(sizeChange) {
      const currCmpObj=this.textStyle.find(obj=>obj.cmpPartName===this.currCmpPart);
      // console.log(currCmpObj, currCmpObj.style.fontSize, typeof sizeChange);
      const newFontSize =  currCmpObj.style.fontSize + sizeChange;
      console.log( currCmpObj.style.fontSize);
     this.$emit("styleTextUpdate", {
        field: "fontSize",
        css: { fontSize:newFontSize}
      });
    },
    handleColor(event) {
      console.log("in color:", event.target.value);
      this.color = event.target.value;
      this.$emit("styleTextUpdate", {
        field: "color",
        css: { color: this.color }
      });
    }
  },
  computed:{
  textStyle() {
      return this.$store.getters.getUserStyle;
    }
  }
};

</script>

<style>
.edit-txt-section div {
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 130px;
  top: 130px;
  /* width: 20%; */
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
  margin: 15px;
  border-radius: 3px;
  cursor: pointer;
}

.textSize-icon img {
  margin: 0 10px;
}

.align-icon img {
  height: 25px;
  width: 25px;
  margin: 0 10px;
}

.textColor-icon {
  margin: 5px;
  height: 25px;
  width: 25px;
}
</style>
