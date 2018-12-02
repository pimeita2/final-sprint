<template>
  <section class="template">
    <!-- <div class="template"> -->
    <template-editor :currCmpPart="currCmpPart"></template-editor>
    <edit-txt :currCmpPart="currCmpPart" v-if="showTxtMenu" @styleTextUpdate="styleUpdate"></edit-txt>

    <div class="spacer"></div>
    <router-view @connectToCmpPart="connectToCmpPart" @showEditor="showEditor"/>
    <!-- </div> -->

    
  </section>

</template>

<script>
import TemplateEditor from "@/components/TemplateEditor.vue";
import EditTxt from "@/components/edit-components/EditTxt.vue";
export default {
  data() {
    return {
      currCmpPart: "",
      showTxtMenu: false
    };
  },
  components: {
    TemplateEditor,
    EditTxt
  },
  methods: {
    connectToCmpPart(cmpPart) {
      console.log("in template +editor page", cmpPart);
      this.currCmpPart = cmpPart;
    },
    showEditor(kind) {
      console.log("kind is", kind);
      if (kind.kind === "text") this.showTxtMenu = true;
      console.log(this.showTxtMenu);
    },
    styleUpdate({ field, css }) {
      console.log("in template editor", field, css);
      this.$store.dispatch( {type: "setUserStyleOfCmp",field, css,currCmpPart: this.currCmpPart});
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
