<template>
  <section class="edit-txt-section" @connectToCmpPart="connectToCmpPart">
    <p @click="handleAlignment" class="align-icon edit-type-icon">
      <i class="fa fa-align-left edit-icon-txt" @click.stop="handleAlignment('left')"></i>
      
      <i class="fa fa-align-center edit-icon-txt" @click.stop="handleAlignment('center')"></i>
      
      <i class="fa fa-align-right edit-icon-txt" @click.stop="handleAlignment('right')"></i>
    </p>
    <p @click="handleFont" class="font-icon">
      <i class="fa fa-font edit-icon-font"></i>
      <select class="select-font">
        <option value="font" disable-selection>font</option>
        <option value="Quicksand">Quicksand</option>
        <option value="AsapCondensed">AsapCondensed</option>
        <option value="Merriweather">Merriweather</option>
        <option value="Oswald">Oswald</option>
      </select>
    </p>
    <input class="textColor-icon" type="color" @change="handleColor" value="#ff0000">

    <p @click="handleSize" class="textSize-icon">
      <i class="fa fa-text-height" @click.stop="handleSize(1)"></i>
      <i class="fa fa-text-height" @click.stop="handleSize(-1)"></i>
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
     
    };
  },
  created() {
   
  },
  methods: {
    connectToCmpPart(cmpPart) {
      // console.log("Connect to", cmpPart);
      this.currCmpPart = cmpPart;
    },
    handleAlignment(align) {
      // console.log("handleAlignment", align);
      this.$emit("styleTextUpdate", {
        field: "textAlign",
        css: { textAlign: align }
      });
    },
    handleFont(event) {
      const fontSelected = event.target.value;
      // console.log("font chosen", fontSelected);
      this.$emit("styleTextUpdate", {
        field: "fontFamily",
        css: { fontFamily: fontSelected }
      });
    },
    handleSize(sizeChange) {
      const currCmpObj = this.cmps.find(cmp => {
        return cmp.type === this.currCmpPart;
      });
      let numb=+(currCmpObj.data.css.fontSize.substring(0, currCmpObj.data.css.fontSize.length-2));
      // console.log(numb, typeof numb);
      const newFontSize = numb +sizeChange ;

      this.$emit("styleTextUpdate", {
        field: "fontSize",
        css: { fontSize: newFontSize+'px' }
      });
    },
    handleColor(event) {
      // console.log("in color:", event.target.value);
      this.color = event.target.value;
      this.$emit("styleTextUpdate", {
        field: "color",
        css: { color: this.color }
      });
    },
    handleBold() {
      this.isBold = !this.isBold;
      let weight;
      if (this.isBold === true) weight = "bold";
      else weight = "normal";
      this.$emit("styleTextUpdate", {
        field: "fontWeight",
        css: { fontWeight: weight }
      });
    }
  },
  computed: {
    cmps() {
      return this.$store.getters.dynamicCmps;
    }
  }
};
</script>

<style>
.edit-txt-section {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: column; 
  width:200px;
  height: 215px;
  overflow: auto;
  background-image: linear-gradient(to top, #f3f3f3, #ffffff, #f3f3f3 ); 
  border-radius: 10px;

}

.edit-type-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.edit-icon-txt {
  margin: 0 5px;
  font-size: 20px;
  color: #464545;
}

.edit-icon-font {
  font-size: 20px;
  color: #464545;
  position: relative;
  top: 3px;
}

.select-font {
  display: inline-block;
  box-shadow: -2px 2px 5px lightblue;
  /* border: 1px solid rgb(190, 190, 190); */
  border-radius: 5px;
  padding: 4px;
  padding-right: 25px;
  margin-left: 8px;
}

.font-icon {
  margin: 15px 0;
}

/* .edit-txt-section img {
  height: 25px;
  width: 25px;
  cursor: pointer;
} */
.align-icon,
.font-icon,
.textColor-icon,
.textSize-icon,
.textBold-icon {
  border-radius: 3px;
  cursor: pointer;
  flex-flow: row;
  margin:0 auto;
  /* padding:10px; */
}

.textSize-icon {
  color: #232323;
  font-size: 18px;
  margin: 0 auto;
  padding:10px;
}
.textBold-icon {
  color: #232323;
  font-size: 18px;
  margin: 10px 45px;
}

.align-icon {
  padding:10px;
}

.textColor-icon {
  height: 25px;
  width: 25px;
  padding:12px;
}
.fa-text-height {
  margin: 5px 15px;
}

</style>
