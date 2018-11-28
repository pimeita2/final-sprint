<template>
  <section>
    <div class="edit-section">
      <div class="text-edit" @click="showTxtMenu=true">
        <edit-txt v-if="showTxtMenu" @close="showTxtMenu=false"></edit-txt>
        <h3 class="T-icon">T</h3>
        <h4 class="h4-text-edit">Text</h4>
      </div>

      <a class="bkground-edit" @click="showBkgMenu=true">
        <edit-bkg v-if="showBkgMenu" @close="showBkgMenu=false" @styleUpdate="styleUpdate"></edit-bkg>
        <p class="bkground-icon">&#x25A8;</p>
        <h4 class="h4-template-edit">Bkground</h4>
      </a>

      <div class="template-edit">
        <p class="template-icon">&#9704;</p>
        <h4 class="h4-template-edit">Template</h4>
      </div>

      <div class="delete-edit">
        <i class="fa fa-trash"></i>
        <h4 class="h4-template-edit">Delete</h4>
      </div>

      <a class="upload-edit" @click="showUploadMenu=true">
        <edit-upload v-if="showUploadMenu" @close="showUploadMenu=false"></edit-upload>
        <i class="fa fa-cloud-upload"></i>
        <h4 class="h4-template-edit">upload Img</h4>
      </a>
    </div>
  </section>
</template>

<script>
// import templateService from '../services/templateService.js'
import editBkg from "@/components/edit-components/EditBkg.vue";
import editUpload from "@/components/edit-components/EditUpload.vue";
import editTxt from "@/components/edit-components/EditTxt.vue";

export default {
  components: {
    editBkg,
    editUpload,
    editTxt
  },
  data() {
    return {
      showBkgMenu: false,
      showUploadMenu: false,
      showTxtMenu: false
    };
  },
  methods: {
    styleUpdate({field, css}) {
     this.$store.dispatch({type:'setUserStyle', field, css})
    }
  }
};
</script>

<style>
.edit-section {
  height: 100%;
  width: 100px;
  background: #4d4d4d;
  position: relative;
  color: rgb(182, 159, 159);
  border-radius: 10px;
}

.T-icon {
  font-family: "Merriweather", serif;
  cursor: pointer;
  margin-bottom: 0;
  font-size: 20px;
}

h4 {
  font-size: 15px;
  font-family: sans-serif;
  cursor: pointer;
  padding: 0;
  margin-top: 2px;
}
.text-edit:hover,
.bkground-edit:hover,
.template-edit:hover,
.delete-edit:hover,
.upload-edit:hover {
  color: ghostwhite;
}
div {
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
/* .delete-edit{
    background:none;
    border:none;
    color:rgb(182, 159, 159);
    margin-bottom: 4px;
} */
</style>
