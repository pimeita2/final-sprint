<template>
  <section class="short-description">
       <input
      class="short-description"
      v-model="data.shortDescription"
      :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontWeight:data.css.fontWeight,
              fontSize:data.css.fontSize+'px'}"
      @click="connectToEditor('shortDescription')"
      @input="updateShortDescription($event)"
    >
  </section>
</template>
<script>
import templateService from "@/services/templateService.js";
import userLogin from "@/components/UserLogin.vue";

export default {
  props: {
    data: Object
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    connectToEditor(cmpPart) {
      console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", cmpPart);
      this.$emit("showEditor", { kind: "text" });
    },
    updateShortDescription(ev) {
      var newShortDescription = ev.target.value;
      templateService.saveData(newShortDescription);
    }
  },
  computed: {
  
  },
  components: {
  }
};
</script>
<style>
.short-description {
  background-color: rgb(153, 49, 54);
  font-size: 12px;
  color: white;
  max-width: 300px;
  width: 100%;
  text-align: center;
}
</style>
