<template>
  <section class="template">
    <template-editor :currCmpPart="currCmpPart" @showEditor="showEditor" @publish="publish" @close="show=false"></template-editor>
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
      @closeEditor="closeEditor"
      @styleUpdate="styleUpdate"
    ></edit-bgc>
    <div class="spacenr"></div>
    <publish-modal v-if="show" @publish="publish" :id="id"></publish-modal>
    <router-view @connectToCmpPart="connectToCmpPart" @showEditor="showEditor"/>
  </section>
</template>

<script>
import TemplateEditor from "@/components/TemplateEditor.vue";
import EditTxt from "@/components/edit-components/EditTxt.vue";
import EditBgc from "@/components/edit-components/EditBkg.vue";
import templateService from "@/services/templateService";
import publishModal from '@/components/PublishModal.vue';


export default {
  data() {
    return {
      currCmpPart: "",
      showTxtMenu: false,
      showBgcMenu: false,
      show: false,
      id: '1p'
    };
  },
  components: {
    TemplateEditor,
    EditTxt,
    EditBgc,
    publishModal
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
      this.showBgcMenu = false;
    },
        publish() {
      console.log('publish button has been clicked');
      this.show = true;
      templateService
        .add({
          id:'1p',
          cmps: this.dynamicCmps,
          base: {
            name: "first"
          },
          name: "Puki's birrthday",
          modified: Date.now(),
          creatorId: "abc123"
        })
        .then(template =>
          console.log("template was added successfully", template)
        );
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