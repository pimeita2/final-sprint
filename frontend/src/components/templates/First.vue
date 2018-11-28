
<template>
  <section class="first-template">
    <div class="edit-template-section">
      <!-- <main-header id="nav"></main-header> -->
      <div class="template-container" :style="userStyle.backgroundColor">
        <div class="backround-color">
          <div class="backgroun-frame">
            <div class="card-container">
              <titleCmp></titleCmp>
              <!-- <attendingCmp></attendingCmp>
              <social-media-cmp></social-media-cmp>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import imgCmp from "./components/template-components/AttendingCmp.vue";
import titleCmp from "@/components/template-components/TitleCmp.vue";
// import eventDetailsCmp from "../components/template-components/EventDetailsCmp.vue";
// import attendingCmp from "../components/template-components/AttendigCmp.vue";
// import mapCmp from "../components/template-components/MapCmp.vue";
// import socialMediaCmp from "../components/template-components/SocialMediaCmp.vue";

export default {
  components: {
    // imgCmp,
    titleCmp
    // eventDetailsCmp,
    // attendingCmp,
    // mapCmp,
    // socialMediaCmp
  },
  computed:{
    userStyle(){
      return this.$store.getters.userStyle;
    }
  }
};
</script>

<style>
.template-container {
  background-image: url("https://media-public.canva.com/MADFF1IWeQM/2/screen.png");
  display: flex;
  width: 400px;
  height: 560px;
  border: 1px solid gray;
  margin: 0 auto;
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
 