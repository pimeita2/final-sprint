<template>
  <section>
    <main-header></main-header>
    <router-link to="/template/1">First</router-link> |
    <router-link to="/template/2">Second</router-link> |
    <router-link to="/template/3">Third</router-link>
    <!-- <router-link to="/second">second template</router-link> -->
    <div class="home">
      <templateList :templates="template"></templateList>
    </div>
    <main-footer></main-footer>
  </section>
</template>

<script>
import templateList from "@/components/TemplateList.vue"
import mainHeader from "@/components/MainHeader.vue"
import mainFooter from "@/components/MainFooter.vue"


export default {
  name: 'home',
  components: {
    templateList,
    mainHeader,
    mainFooter
  },
   data() {
    return {
      template: this.$store.getters.getTemplatesForDisplay
      }
    },
  }

</script>

<style>
 body{
   margin: 0;
 }
</style>
