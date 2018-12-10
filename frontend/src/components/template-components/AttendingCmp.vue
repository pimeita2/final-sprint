<template>
  <section class="attending-container">
    <h3 class="attending-title">Attending</h3>
    <p class="attending-sub-title">how many peoples are comeing?</p>
    <div class="incomingPepole">
      <!-- <div class="field has-addons has-addons-right"> -->
      <p class="control">
        <a class="button pepole-counter is-primary" @click="addMorePepole">
          <i class="fas fa-plus fa-xs"></i>
        </a>
      </p>
      <p class="control pepole-counter">{{pepoleCount}}</p>
      <p class="control">
        <a class="button is-primary pepole-counter" @click="lessPepole">
          <i class="fas fa-minus fa-xs"></i>
        </a>
      </p>
      <!-- </div> -->
    </div>
    <input class="input is-small guests-name" type="text" placeholder="full name" required>
    <input class="input is-small guests-mobile" type="text" placeholder="mobile number" required>
    <br>
    <button class="button is-primary">Submit</button>
    
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      pepoleCount: 0
    };
  },
  methods: {
    addMorePepole() {
      this.pepoleCount++;
    },
    lessPepole() {
      this.pepoleCount--;
      if (this.pepoleCount < 0) return (this.pepoleCount = 0);
    }
  }
};
</script>


<style>
.attending-title {
  margin: 16px 0 0 0;
  font-size: 22px;
  letter-spacing: 1px;
  font-family: "Asap Condensed";
}
.attending-sub-title {
  letter-spacing: 1px;
  margin: 3px 3px 12px 3px;
  font-size: 12px;
  font-family: "Asap Condensed";
}
.counter-view {
  width: 30px;
}

.incomingPepole {
  display: flex;
  justify-content: center;
  margin: 5px 0 10px;
}

input.guests-name {
  width: 45%;
  margin: 5px 10px 0 0;
}
input.guests-mobile {
  width: 45%;
  margin-bottom: 5px;
}

.control > input {
  margin: 0px 0 22px 0;
  width: 38px;
}
.pepole-counter {
  background-color: white;
  width: 30px;
  color: black;
  text-align: center;
  padding: 4px 0;
  height: 30px;
}
</style>
