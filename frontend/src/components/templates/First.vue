<template>
  <section class="first-template">
    <div class="edit-template-section">
      <div class="template-container" :style="userStyleBackground">
        <div class="backgroun-frame">
          <div class="card-container">
            <!-- <title-cmp/> -->
            <component
              @connectToCmpPart="connectToCmpPart"
              @showEditor="showEditor"
              v-for="cmp in dynamicCmps"
              :key="cmp.id"
              :is="cmp.type"
              :data="cmp.data"
            />
          </div>
        </div>
      </div>
    </div>
    <button class="publish" @click="publish">Publish</button>
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
      console.log("in first", cmpPart);
      this.$emit("connectToCmpPart", cmpPart);
    },
    showEditor({ kind }) {
      console.log(kind);
      this.$emit("showEditor", { kind });
    },
    publish() {
      this.show=true;
      templateService
        .add({
          cmps: this.dynamicCmps,
          base:{
            name:'first',
            parts:{
              part1:`
                  <div class="edit-template-section">
                     <div class="template-container" :style="userStyleBackground">
                       <div class="backgroun-frame">
                         <div class="card-container">`,
              part2:`
                        </div>
                     </div>
                  </div>
                 </div> `
            }
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
</style>
 
 