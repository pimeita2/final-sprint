<template>
  <section class="edit-txt-section" @connectToCmpPart="connectToCmpPart">
    <p @click="handleAlignment" class="align-icon edit-type-icon">
     
      <i class="fa fa-align-left edit-icon-txt" @click.stop="handleAlignment('left')"></i>
     
      <i class="fa fa-align-center edit-icon-txt" @click.stop="handleAlignment('center')"></i>

      <i class="fa fa-align-right edit-icon-txt" @click.stop="handleAlignment('right')"></i>
    </p>

    <p @click="handleFont" class="font-icon">
      <i class="fa fa-font edit-icon-font"></i>
      <select  class="select-font" @click="handleAlignment">
        <option value="font" disable-selection>font</option>
        <option value="coral">coral</option>
        <option value="arial">arial</option>
        <option value="david">david</option>
        <option value="cursive">cursive</option>
     </select>
    </p>

    <input 
      class="textColor-icon"
      type="color"
      @change="handleColor"
      value="#ff0000"
      @click="clicked"
    >
    
    <p @click="handleSize" class="textSize-icon">
      <!-- <img src="../../assets/biger.png" alt="text size">
      <img src="../../assets/small.png" alt="text size"> -->
      <i class="fa fa-text-height"></i>
    </p>

      <p @click="handleBold" class="textBold-icon">
      <i class="fa fa-bold"></i>
    </p>
  </section>
</template>


<script>
export default {
  props: ["currCmpPart"],
  data() {
    return {
     isBold:false,
      
    };
  },
  created() {
    //  console.log('in edit txt we work on', this.currCmpPart);
  },
  methods: {
    connectToCmpPart(cmpPart) {
      // console.log("connect to", cmpPart);
    },
    handleAlignment(align) {
      // console.log('handleAlignment', align);
      this.$emit("styleTextUpdate", {
        field: "textAlign",
        css: { textAlign: align }
      });
    },
    handleFont(event) {
      const fontSelected=event.target.value;
      // console.log('font chosen', fontSelected);
      this.$emit("styleTextUpdate", {
        field: "fontFamily",
        css: { fontFamily: fontSelected }
      });
    },
    clicked() {
      // console.log("was clicked");
    },
    handleColor(event) {
      // console.log("in color:", event.target.value);
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
    },
    handleBold(){
        this.isBold=!this.isBold;
       let weight;
       if(this.isBold===true)     weight='bold';
       else weight='normal';
        this.$emit("styleTextUpdate", {
        field: "fontWeight",
        css: { fontWeight: weight }
      });

    }
  }
};
</script>

<style>
.edit-txt-section {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    position: fixed;
    left: 100px;
    top: 0px;
    width: 100%;
    height: 7%;
    overflow: auto;
    background-color: rgb(256,256,256);
    border-radius: 0px 10px 10px 0px;
    border-bottom: 1px solid rgb(190, 190, 190);
}

.edit-type-icon{
  width: 20%;
}

.edit-icon-txt{
  margin: 0 5px;
  font-size: 20px;
  color: #232323;
}

.edit-icon-font{
  font-size: 20px;
  color: #232323;
}

.select-font{
  display: inline-block;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 15px;
  padding: 4px;
  padding-right: 25px;
}

.font-icon{
  margin: 10px 0;
}


.edit-txt-section img {
  height: 25px;
  width: 25px;
  cursor: pointer;
}
.align-icon,
.font-icon,
.textColor-icon,
.textSize-icon,
.textBold-icon{
  border-radius: 3px;
  cursor: pointer;
}

.textSize-icon{
   color: #232323;
   font-size: 18px;
   margin: auto 0;
}
.textBold-icon{
   color: #232323;
   font-size: 18px;
   margin: 10px 45px;
}

.align-icon img {
  height: 25px;
  width: 25px;
  margin: 0 10px;
}

.textColor-icon {
  margin: 10px 35px;
  height: 25px;
  width: 25px;
}
</style>
