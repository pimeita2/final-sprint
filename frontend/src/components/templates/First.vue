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
  </section>
</template>

<script>
import invaitorName from "@/components/template-components/InvaitorNameCmp.vue";
import eventTitle from "@/components/template-components/EventTitleCmp.vue";
import shortDescription from "@/components/template-components/ShortDescriptionCmp.vue";
import dayCmp from "@/components/template-components/DayCmp.vue";
import hourCmp from "@/components/template-components/HourCmp.vue";
import addressCmp from "@/components/template-components/AddressCmp.vue";
import attendingCmp from "@/components/template-components/AttendingCmp.vue";
import socialMedia from "@/components/template-components/SocialMediaCmp.vue";

export default {
  components: {
    invaitorName,
    eventTitle,
    shortDescription,
    dayCmp,
    hourCmp,
    addressCmp,
    socialMedia,
    attendingCmp,
  },
  methods: {
    connectToCmpPart(cmpPart) {
      console.log("in first", cmpPart);
      this.$emit("connectToCmpPart", cmpPart);
    },
    showEditor({ kind }) {
      console.log(kind);
      this.$emit("showEditor", { kind });
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
.template-container {
  background-image: url("https://media-public.canva.com/MADFF1IWeQM/2/screen.png");
  background-repeat: no-repeat;
  background-size: 600px 600px;
  display: flex;
  width: 400px;
  height: 560px;
  border: 1px solid gray;
  margin-top: 55px;
}
.backround-img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.backgroun-frame {
  display: flex;
  align-items: center;
  width: 350px;
  height: 480px;
  border: 3px solid white;
  margin: auto;
}
.card-container {
  width: 320px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.692);
  margin: 0 auto;
}
#nav {
  position: relative;
  padding: 0px;
}
.edit-template-section {
  display: flex;
}
</style>
 
 