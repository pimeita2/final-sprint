<template>
  <section class="template">
    <!-- <div class="template"> -->
    <template-editor></template-editor>
    <div class="spacer"></div>
    <router-view/>
    <!-- </div> -->
  </section>
</template>

<script>
import TemplateEditor from "@/components/TemplateEditor.vue";

export default {
  components: {
    TemplateEditor
  }
};
</script>

<style>
.template{
  display: flex;
}
.spacer{
  flex-grow: 0.5;

}
</style>
