<template>
  <div class="m">
    <!-- <div>
       <h2>Search and add a pin</h2>
      <label >
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br>
    </div> -->
    
    <gmap-map  :center="center" :zoom="12" style="width:200px;  height: 200px;" @click.native.stop="connectToEditor">
      <gmap-marker
        :key="index"
        v-for="(m, index) in this.markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
    props: {
    data: Object,
    id: String
  },
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: this.data.center,
      markers:this.data.markers,
      places: this.data.places,
      currentPlace:this.data.currentPlace
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    // setPlace(place) {
    //   this.currentPlace = place;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng()
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
        connectToEditor() {
      this.isSelected = true;
      // console.log("in connect to editor in mapCmp", this.data);
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "map" });
    },
    geolocate: function() {
      console.log(this.center);
       navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
<style>
  .m{
    display: flex;
    justify-content: center;
  }
</style>
