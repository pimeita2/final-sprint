<template>
  <section class="template">
    <div class="template">
    <template-editor></template-editor>
    <router-view/>
    </div>
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
    justify-content: space-around;
}
</style>
