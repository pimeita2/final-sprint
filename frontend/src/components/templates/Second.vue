<template>
  <section class="second-template">
    <div class="edit-second" >
      <div class="second-container" :style="userStyleBackground" @click.stop="connectToEditor" >
             <!-- <component
             
              @connectToCmpPart="connectToCmpPart"
              @showEditor="showEditor"
              v-for="cmp in dynamicCmps"
              :key="cmp.id"
              :is="cmp.type"
              :data="cmp.data"
            />  -->
   
      </div>
    </div>
    <button class="publish" @click="publish">Publish</button>
    <!-- TO check if this is the right place!!! -->
    <publish-modal v-if="show" @close="show=false" :type="type"></publish-modal>
  </section>
</template>

<script>
import publishModal from '@/components/PublishModal.vue'

import invaitorName from "@/components/template-components/InvaitorNameCmp.vue";
import eventTitle from "@/components/template-components/EventTitleCmp.vue";
import shortDescription from "@/components/template-components/ShortDescriptionCmp.vue";
import day from "@/components/template-components/DayCmp.vue";
import hour from "@/components/template-components/HourCmp.vue";
import location from "@/components/template-components/AddressCmp.vue";
import attending from "@/components/template-components/AttendingCmp.vue";
import socialMedia from "@/components/template-components/SocialMediaCmp.vue";
import templateService from "@/services/templateService";

export default {
  data() {
    return {
      show:false,
      type:'first'
    };
  },
  components: {
    publishModal,
    invaitorName,
    eventTitle,
    shortDescription,
    day,
    hour,
    location,
    socialMedia,
    attending
  },
  methods: {
    connectToCmpPart(cmpPart) {
      this.$emit("connectToCmpPart", cmpPart);
    },
    showEditor({ kind }) {
      this.$emit("showEditor", { kind });
    },
     connectToEditor() {
      this.$emit("showEditor", { kind: "background" });
    },
    publish() {
      this.show=true;
      templateService
        .add({
          cmps: this.dynamicCmps,
          base:{
            name:'first',
          },
          name: "Puki's birrthday",
          modified: Date.now(),
          creatorId: "abc123" // TODO: currLoggedinuserId here
        })
        .then(template =>
          console.log("template was added successfully", template)
        );
    }
  },
  computed: {
    userStyleBackground() {
      return this.$store.getters.userStyleBackground;
    },
    // getUserStyle() {
    //   return this.$store.getters.getUserStyle;
    // },
    dynamicCmps() {
      return this.$store.getters.dynamicCmps;
    }
  }
};
</script>

<style>

.second-container{
   background-image: url(/img/Our-Wedding.c3b96601.png);
    background-position: center;
    width: 500px;
    background-size: cover;
    height: 550px;

}
</style>
 
 