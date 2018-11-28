
<template>
  <section class="template">
    <div class="template-container">
        <div class="backgroun-frame">
          <div class="card-container">
            
            <titleCmp></titleCmp>
            <!-- <eventDetailes-cmp></eventDetailes-cmp> -->
            <!-- <attendingCmp></attendingCmp> -->
            <!-- <social-media-cmp></social-media-cmp> -->

          </div>
        </div>
      </div>
  </section>
</template>

<script>
// import imgCmp from "./components/template-components/AttendingCmp.vue";
import titleCmp from "../components/template-components/TitleCmp.vue";
// import eventDetailsCmp from "../components/template-components/EventDetailsCmp.vue";
// import attendingCmp from "../components/template-components/AttendigCmp.vue";
// import mapCmp from "../components/template-components/MapCmp.vue";
// import socialMediaCmp from "../components/template-components/SocialMediaCmp.vue";

export default {
  components: {
    // imgCmp,
    titleCmp,
    // eventDetailsCmp,
    // attendingCmp,
    // mapCmp,
    // socialMediaCmp
  }
};

</script>

<style>
.template-container {
  color: rgb(153, 49, 54);
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
</style>
 