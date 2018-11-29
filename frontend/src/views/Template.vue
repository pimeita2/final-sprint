<template>
  <section class="template">
    <!-- <div class="template"> -->
    <template-editor :currCmpPart="currCmpPart"></template-editor>
    <div class="spacer"></div>
    <router-view @connectToCmpPart="connectToCmpPart"/>
    <!-- </div> -->
  </section>
</template>

<script>
import TemplateEditor from "@/components/TemplateEditor.vue";

export default {
  
  data() {
    return {
        currCmpPart:''
    };
  },
  components: {
    TemplateEditor
  },
  methods: {
    connectToCmpPart(cmpPart) {
      console.log("in template +editor page", cmpPart);
      this.currCmpPart=cmpPart;

    }
  }
};
</script>

<style>
.template {
  display: flex;
}
.spacer {
  flex-grow: 0.5;
}
</style>
