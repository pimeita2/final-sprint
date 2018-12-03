<template>
  <section class="template">
    <!-- <div class="template"> -->
    <template-editor :currCmpPart="currCmpPart"></template-editor>
    <edit-txt :currCmpPart="currCmpPart" v-if="showTxtMenu" @styleTextUpdate="styleUpdate"></edit-txt>
    <edit-bgc v-if="showBgcMenu" @showEditor="showEditor" @styleUpdate="styleUpdate"></edit-bgc>

    <!-- <component :is="currEditCmp" :data="data"/> -->
    <div class="spacer"></div>
    <router-view @connectToCmpPart="connectToCmpPart" @showEditor="showEditor"/>
    <!-- </div> -->
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
      console.log("in template +editor page", cmpPart);
      this.currCmpPart = cmpPart;
    },
    showEditor(cmp) {
      if (cmp.kind === "text") {
        this.showTxtMenu = true;
        this.showBgcMenu = false;
      }
      if (cmp.kind === "background") {
        this.showBgcMenu = true;
        this.showTxtMenu = false;
      }
    },
    styleUpdate({ field, css }) {
      console.log("in template editor", field, css);
      this.$store.dispatch({
        type: "setUserStyleOfCmp",
        field,
        css,
        currCmpPart: this.currCmpPart
      });
      if (field === "background")
        this.$store.dispatch({ type: "setBackgroundStyle", field, css });
    }
  }
};
</script>

<style>
.template {
  display: flex;
  background: rgb(189, 187, 187, 0.5);
}
.spacer {
  flex-grow: 0.5;
}
</style>
