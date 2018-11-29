<template>
  <section>
    <div class="edit-bkg-section">
      <!-- MAYBE use the color picker component? -->
      <!-- <form>

      <input class="bkg-picker" @change="handleChange" type="color" v-model="bgc" @click="foo"/> 
      </form>
            <input class="bkg-picker" @input="handleChange"> -->

      <input class="bkg-picker" type="color" v-model="bgc" @change="handleChange"/>
      <!-- <span
            @click="$emit('close')"
            class="close-edit-bkg-section"
            title="Close Modal"
          >&times;</span> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bgc: "#ff9a90"
    };
  },
  methods: {
    handleChange() {
      // console.log(this.bgc);
      this.$emit("styleUpdate", {
        field: "backgroundColor",
        css: { backgroundColor: this.bgc },
      });
    },
    // foo(){
    //   console.log('clicked');
      
    // }
  }
};
</script>

<style>
.edit-bkg-section {
  display: block;
  position: fixed;
  left: 100px;
  top: 130px;
  width: 20%;
  height: 12%;
  overflow: auto;
  background-color: #4d4d4d;
  border-radius: 0px 10px 10px 0px;
}
.bkg-picker {
  margin: 20px;
  border-radius: 3px;
}


.close-edit-bkg-section {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 15px;
    font-weight: bold;
}

.close-edit-bkg-section:hover,
.close-edit-bkg-section:focus {
    color: red;
    cursor: pointer;
}
</style>
