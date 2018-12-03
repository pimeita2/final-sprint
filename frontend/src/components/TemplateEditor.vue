<template>
  <section>
    <div class="edit-section icon-btn">
      <!-- <a class="bkground-edit icon-btn" @click="showBkgMenu=!showBkgMenu">
        <edit-bkg v-if="showBkgMenu" @styleUpdate="styleUpdate"></edit-bkg>
        <p class="bkground-icon">&#x25A8;</p>
        <h4 class="h4-template-edit">Bkground</h4>
      </a>-->
      <a class="bkground-edit icon-btn" @click="showBkgMenu=true">
        <edit-bkg v-if="showBkgMenu" @styleUpdate="styleUpdate"></edit-bkg>
        <span class="bkground-edit-icon">
          <p class="bkground-icon">&#x25A8;</p>
          <h4 class="h4-template-edit">Bkground</h4>
        </span>
      </a>

      <!-- <hr>
      <div class="template-edit icon-btn">
        <p class="template-icon">&#9704;</p>
        <h4 class="h4-template-edit">Template</h4>
      </div>-->
      <hr>
      <div class="delete-edit icon-btn">
        <i class="fa fa-trash"></i>
        <h4 class="h4-delete-edit">Delete</h4>
      </div>

      <hr>
      <a class="upload-edit" @click="showUploadMenu=true">
        <edit-upload v-if="showUploadMenu" @styleUpdate="styleUpdate"></edit-upload>
        <i class="fa fa-cloud-upload"></i>
        <h4 class="h4-uploadImg-edit">Upload Img</h4>
      </a>

      <hr>
      <a class="backHome-page">
        <span class="back-home-icon">
          <i class="fa fa-home"></i>
          <a class="backHome-page-a" href="/"><h4 class="h4-backHome-page">Go Home</h4></a>
        </span>
      </a>
    </div>
  </section>
</template>

<script>
import editBkg from "@/components/edit-components/EditBkg.vue";
// import editUpload from "@/components/edit-components/EditUploadBgc.vue";
import editTxt from "@/components/edit-components/EditTxt.vue";
import homePage from "@/views/Home.vue";

export default {
  components: {
    editBkg
    // editUpload,
    // editTxt
  },
  props: ["currCmpPart"],
  created() {},

  data() {
    return {
      showBkgMenu: false,
      showUploadMenu: false
      // showTxtMenu: false
    };
  },
  methods: {
    styleUpdate({ field, css }) {
      console.log("in template editor", field, css);
      if (field === "background")
        this.$store.dispatch({ type: "setBackgroundStyle", field, css });
        else{
      this.$store.dispatch({
        type: "setUserStyleOfCmp",
        field,
        css,
        currCmpPart: this.currCmpPart
         });
    }},
    
  }
};
</script>

<style>
.edit-section {
  height: 100%;
  width: 100px;
  background: #232323;
  position: relative;
  color: rgb(182, 159, 159);
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.T-icon {
  font-family: "Merriweather", serif;
  cursor: pointer;
  margin-bottom: 0;
  font-size: 20px;
}

.backHome-page-a{
  text-decoration: none;
  color:rgb(182, 159, 159);
}

.h4-text-edit,
.h4-template-edit,
.h4-delete-edit,
.h4-uploadImg-edit,
.h4-backHome-page {
  font-size: 15px;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  padding: 0;
  margin-top: 2px;
}

hr {
  border: 0;
  height: 1px;
  width: 70%;
  background-image: linear-gradient(
    to right,
    rgba(222, 222, 222, 0),
    rgba(222, 222, 222, 0.75),
    rgba(222, 222, 222, 0)
  );
}

.text-edit-icon:hover,
.bkground-edit-icon:hover,
.template-edit:hover,
.delete-edit:hover,
.upload-edit:hover,
.backHome-page:hover {
  color: ghostwhite;
}
.icon-btn {
  padding: 5px;
}
.fa-trash {
  font-size: 25px;
  cursor: pointer;
}
.fa-cloud-upload {
  font-size: 25px;
  cursor: pointer;
}
.bkground-icon {
  margin: 0;
  font-size: 25px;
  cursor: pointer;
}
.back-home-icon {
  margin: 0;
  font-size: 25px;
  cursor: pointer;
}
.template-icon {
  margin: 0;
  font-size: 25px;
  cursor: pointer;
}
.bkground-edit {
  background: none;
  border: none;
  color: rgb(182, 159, 159);
}
.delete-edit {
  background: none;
  border: none;
  color: rgb(182, 159, 159);
  margin-bottom: 4px;
}

.download-btn {
  padding: 20px;
  display: block;
  background-color: #4d4d4d;
  color: white;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 60px;
  border: none;
  border-radius: 10px 0px 0px 10px;
  cursor: pointer;
}

.fa-download {
  font-size: 20px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.download-socialMedia {
  padding: 22.5px;
  display: block;
  background-color: #4d4d4d;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  border-left: solid white;
}
</style>
