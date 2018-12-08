<template>
  <section class="template">
    <template-editor :currCmpPart="currCmpPart" @showEditor="showEditor" @publish="publish"></template-editor>
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
    <edit-map
      class="edit-toolbox"
      v-if="showMapMenu"
      @closeEditor="closeEditor"
      @mapUpdate="mapUpdate"
    ></edit-map>
    <div class="spacenr"></div>
    <publish-modal v-if="show" :id="id" @close="close"></publish-modal>
    <router-view @connectToCmpPart="connectToCmpPart" @showEditor="showEditor"/>
  </section>
</template>

<script>
import TemplateEditor from "@/components/TemplateEditor.vue";
import EditTxt from "@/components/edit-components/EditTxt.vue";
import EditBgc from "@/components/edit-components/EditBkg.vue";
import templateService from "@/services/templateService";
import publishModal from "@/components/PublishModal.vue";
import EditMap from "@/components/edit-components/EditMap.vue";
export default {
  data() {
    return {
      currCmpPart: "", // it is id!!!!!!!!!!!!!!!!!!!
      showTxtMenu: false,
      showBgcMenu: false,
      showMapMenu: false,
      show: false,
      id: "1p" // general id
    };
  },
  components: {
    TemplateEditor,
    EditTxt,
    EditBgc,
    publishModal,
    EditMap
  },
  computed: {
    dynamicCmps() {
      return this.$store.getters.dynamicCmps;
    },
    generalStyle() {
      return this.$store.getters.generalStyle;
    }
  },
  methods: {
    connectToCmpPart(cmpPart) {
      this.currCmpPart = cmpPart;
    },
    showEditor(cmp) {
      if (cmp.kind === "text") {
        this.showTxtMenu = true;
        this.showBgcMenu = false;
        this.showMapMenu = false;
      } else if (cmp.kind === "background") {
        this.showBgcMenu = true;
        this.showTxtMenu = false;
        this.showMapMenu = false;
      } else if (cmp.kind === "map") {
        this.showBgcMenu = false;
        this.showTxtMenu = false;
        this.showMapMenu = true;
      }
    },
    closeEditor() {
      this.showTxtMenu = false;
      this.$store.dispatch("removeEditingFrame");
      this.showBgcMenu = false;
    },
    close() {
      this.show = false;
      console.log("in template close modal");
    },
    publish() {
      console.log("publish button has been clicked");
      this.show = true;
      templateService
        .add({
          id: "1p",
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
    mapUpdate({ field, data }) {
      this.$store.dispatch({
        type: "setUserMap",
        field,
        data,
        currCmpPart: this.currCmpPart
      });
    },
    styleUpdate({ field, css }) {
      console.log("in template editor", field, css);
      if (this.currCmpPart !== "text" && this.currCmpPart !== "cmp") {
        // it is id now!! so how works?
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