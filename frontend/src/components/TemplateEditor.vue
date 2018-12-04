<template>
  <section>
    <div class="edit-section icon-btn">
   
    </div>
  </section>
</template>

<script>
import editBkg from "@/components/edit-components/EditBkg.vue";
import editTxt from "@/components/edit-components/EditTxt.vue";
import homePage from "@/views/Home.vue";

export default {
  components: {
    editBkg
    
  },
  props: ["currCmpPart"],
  created() {},

  data() {
    return {
      showBkgMenu: false,
      showUploadMenu: false
     
    };
  },
  methods: {
    styleUpdate({ field, css }) {
      console.log("in template editor", field, css);
      if (field === "background")
        this.$store.dispatch({ type: "setBackgroundStyle", field, css });
        else{
      this.$store.dispatch({
        type: "setUserStyleOfCmp",
        field,
        css,
        currCmpPart: this.currCmpPart
         });
    }},
    
  }
};
</script>

<style>

</style>
