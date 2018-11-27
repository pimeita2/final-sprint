<template>
<<<<<<< HEAD
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
=======
  <section>
    <main-header></main-header>
     <router-link to="/second">second template</router-link>
    <div class="home">
      <templateList :templates="template"></templateList>
    </div>
    <!-- <main-footer></main-footer> -->
  </section>
</template>

<script>
import templateList from "@/components/TemplateList.vue"
import mainHeader from "@/components/MainHeader.vue"
// import mainFooter from "@/components/MainFooter.vue"


export default {
  name: 'home',
  components: {
    templateList,
    mainHeader,
    // mainFooter
  },
   data() {
    return {
      template: this.$store.getters.getTemplatesForDisplay
      }
    },
  }

>>>>>>> master
</script>

<style>

</style>
