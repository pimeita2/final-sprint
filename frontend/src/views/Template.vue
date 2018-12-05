<template>
  <section class="template">
    <template-editor :currCmpPart="currCmpPart"></template-editor>
    <edit-txt
      class="edit-toolbox"
      :currCmpPart="currCmpPart"
      v-if="showTxtMenu"
      @closeEditor="closeEditor"
      @styleTextUpdate="styleUpdate"
    ></edit-txt>
    <edit-bgc
      class="edit-toolbox"
      v-if="showBgcMenu"
      @showEditor="showEditor"
      @styleUpdate="styleUpdate"
    ></edit-bgc>
    <div class="spacenr"></div>
    <router-view @connectToCmpPart="connectToCmpPart" @showEditor="showEditor"/>
  </section>
</template>

<script>
import TemplateEditor from "@/components/TemplateEditor.vue";
import EditTxt from "@/components/edit-components/EditTxt.vue";
import EditBgc from "@/components/edit-components/EditBkg.vue";
export default {
  data() {
    return {
      currCmpPart: "",
      showTxtMenu: false,
      showBgcMenu: false
    };
  },
  components: {
    TemplateEditor,
    EditTxt,
    EditBgc
  },
  methods: {
    connectToCmpPart(cmpPart) {
      this.currCmpPart = cmpPart;
    },
    showEditor(cmp) {
      if (cmp.kind === "text") {
        this.showTxtMenu = true;
        this.showBgcMenu = false;
      } else if (cmp.kind === "background") {
        this.showBgcMenu = true;
        this.showTxtMenu = false;
      }
    },
    closeEditor() {
      this.showTxtMenu = false;
    },
   
    styleUpdate({ field, css }) {
      console.log("in template editor", field, css);
      if (this.currCmpPart === "background") {
        this.$store.dispatch({
          type: "setGenralStyle",
          field,
          css
        });
      } else {
        this.$store.dispatch({
          type: "setUserStyleOfCmp",
          field,
          css,
          currCmpPart: this.currCmpPart
        });
      }
    }
  }
};
</script>

<style>
.template {
  display: flex;
  background: rgb(189, 187, 187, 0.5);
  height: 120vh;
}
.spacer {
  flex-grow: 0.5;
}
.edit-toolbox {
  position: absolute;
  top: 23%;
  left: 76%;
}
</style>