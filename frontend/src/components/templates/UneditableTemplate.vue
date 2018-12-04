
<template>
  <section>
    <!-- <div v-html="template.base.parts.part1">cmpsData</div>
    {{cmpsData}}
    <div v-html="template.base.parts.part2"></div>-->
    <div v-for="(cmp,idx) in template.cmps" :key="cmp.id">
      <p v-if="idx< template.cmps.length-1">{{cmp.data.txt}}</p>
    </div>
  </section>
</template>
<script>
import templateService from "../../services/templateService.js";
// import uneditableTemplate from '@/components/UneditableTemplate.vue'
export default {
  data() {
    return {
      template: null
    };
  },
  // props:['template'],
  created() {
    templateService.query().then(res => {
      const currTemplate = res.find(temp => {
        // console.log("templateService.query", this.type, temp.base.name);
        if (temp.base.name === "first") return temp; // put event bus to get the type of template
      });
      this.template = currTemplate;
      // console.log(this.template);
    });
  },
  methods: {
    cmpsData() {
      template.cmps.forEach(element => {});
    }
  },
  components: {
    //    uneditableTemplate
  }
};
</script>



<style>