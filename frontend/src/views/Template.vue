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
    <publish-modal v-if="show" @close="close" :invite-id="inviteId"></publish-modal>
    <general-template @connectToCmpPart="connectToCmpPart" @showEditor="showEditor"></general-template>
  </section>
</template>

<script>
import TemplateEditor from "@/components/TemplateEditor.vue";
import EditTxt from "@/components/edit-components/EditTxt.vue";
import EditBgc from "@/components/edit-components/EditBkg.vue";
import inviteService from "@/services/inviteService";
import publishModal from "@/components/PublishModal.vue";
import EditMap from "@/components/edit-components/EditMap.vue";
import GeneralTemplate from "@/components/templates/GeneralTemplate.vue";
export default {
  data() {
    return {
      currCmpPart: "", // it is id!!!!!!!!!!!!!!!!!!!
      showTxtMenu: false,
      showBgcMenu: false,
      showMapMenu: false,
      show: false,
      inviteId: ""
    };
  },
  components: {
    TemplateEditor,
    EditTxt,
    EditBgc,
    publishModal,
    EditMap,
    GeneralTemplate
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
    connectToCmpPart(cmpPart, inviteId) {
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
      // this.show = true;
      inviteService
        .add({
          cmps: this.dynamicCmps,
          generalStyle:this.generalStyle,
          templateId:this.currInviteCreated,
          creatorId: 123456.0,
          modifiedAt: Date.now(),
          attends: []
        })
        .then(invite => {
          console.log("invite was added successfully", invite)
          this.inviteId = invite._id
          this.show = true;
        });
    },
    styleUpdate({ field, css, kind }) {
      // console.log("in template editor ", field, css);
      // console.log("the cmp is ->> ", this.currCmpPart);
      if (kind !== "text" && kind !== "cmp") {
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