<template>
  <section class="template-editor-section">
    <div class="editor-bckground-section" >
      <p class="icon-bkground-editor">&#x25A7;</p>
      <h4 class="h4-bkground-editor">Bkground</h4>
    </div>
    <hr>

    <div>
     <div class="editor-socialMedia-section" >
      <i class="fas fa-share-square icon-socialMedia-editor"></i>
      <h4 class="h4-socialMedia-editor">Social Media</h4>
    </div>

    <div class="socialMedia-options-section">
      <i class="fab fa-facebook-square"></i>
      <!-- <input type="text"/> -->
      <br>
      <i class="fab fa-twitter-square"></i>
      <!-- <input type="text"/> -->
      <br>
      <i class="fab fa-linkedin"></i>
      <!-- <input type="text"/> -->
      <br>
     <i class="fab fa-instagram"></i>
      <!-- <input type="text"/> -->
      <br>

    </div>
    </div>
    <hr>

     <div class="editor-uploadMap-section" >
      <i class="fas fa-map-marked-alt"></i>
      <h4 class="h4-uploadMap-editor">Upload Map</h4>
    </div>
    <hr>

     <div class="editor-uploadImg-section" >
     <i class="far fa-image"></i>
      <h4 class="h4-uploadImg-editor">Upload Img</h4>
    </div>
    <hr>

       <a href="/"> <div class="editor-home-section" >
     <i class="fa fa-home"></i>
      <h4 class="h4-home-editor">Come Back</h4>
    </div></a>






  </section>
</template>

<script>
import editBkg from "@/components/edit-components/EditBkg.vue";
import editTxt from "@/components/edit-components/EditTxt.vue";
import homePage from "@/views/Home.vue";

export default {
  components: {
    editBkg
    
  },
  props: ["currCmpPart"],
  created() {},

  data() {
    return {
      showBkgMenu: false,
      showUploadMenu: false
     
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
.template-editor-section{
    color: rgb(182, 178, 178);
    position: fixed;
    padding: 10px;
    left: 0;
    width: 150px;
    top: 0;
    height: 100%;
    background-color: #3f4652;
    z-index: 1;
    box-sizing: border-box;
}
hr{
    border: 1px solid rgb(182, 178, 178);
    margin-bottom: 25px;
}
.icon-bkground-editor,
.icon-socialMedia-editor,
.fa-map-marked-alt,
.fa-image,
.fa-home
{
  font-size: 20px;
}

.editor-bckground-section,
.editor-socialMedia-section,
.editor-uploadImg-section,
.editor-uploadMap-section,
.editor-home-section{
  padding-bottom: 10px;
  cursor: pointer;  
  font-family: 'Acme';
}

.editor-bckground-section:hover,
.editor-socialMedia-section:hover,
.editor-uploadImg-section:hover,
.editor-uploadMap-section:hover,
.editor-home-section:hover
{
  color:#fff
}

.editor-home-section{
  text-decoration:none;
  color:rgb(182, 178, 178);
}

</style>
