<template>
  <section class="template-3">
    <div class="template3-container">
      <div class="row-1-details">
        <div class="inner-text">
          <h1>Nails time!</h1>
          <!-- <h6>Take care of your Nails, they will thank you</h6> -->
          <p
            class="description"
          >Speciel sell for the holidays. dont miss this once in a life time event!</p>
        </div>
      </div>
      <div class="row-2-location">
        <!-- <loc-map/> -->
      </div>
      <div class="row-3-coming">set up an appiontement today:
        <!-- <date-time-picker></date-time-picker> -->
      </div>
    </div>
    <button>Save</button>
  </section>
</template>
<script>
// import LocMap from "../components/LocMap.vue";
// import DateTimePicker from "vue-vanilla-datetime-picker";

export default {
  name: "third",
  created() {},

  components: {
    // LocMap
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Indie+Flower|Sedgwick+Ave");

.template3-container {
  display: grid;
  grid-template-rows: auto auto auto;
  width: 100%;
  margin: auto;
  border: 2px solid lightcyan;
  max-width: 500px;
}

.row-1-details {
  background-image: url("../assets/nails.png");
  background-size: cover;
  background-position: center;
  grid-column: 1/12;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  color: white;
  font-weight: 700;
}

.inner-text {
  background-color: white;
  color: black;
  opacity: 0.8;
  margin: 10px 20px;
}

.row-1-details h1 {
  font-family: Indie Flower, sans-serif;
  letter-spacing: 5px;
  font-size: 35px;
}

.row-1-details .description {
  padding: 0 10px;
}
.row-2-location {

  grid-column: 1/12;
  height: 150px;
}


</style>