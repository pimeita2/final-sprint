<template>
  <section class="attending-container">
    <h3 class="attending-title">Attending </h3>
    <p class="attending-sub-title"></p>
    <div class="incomingPepole">
      <span class="attending-sub-title">how many?</span>
      <div class="field has-addons has-addons-right">
        <p class="control">
          <a class="button pepole-counter is-primary" @click="addMorePepole"><i class="fas fa-plus"></i></a>
        </p>
        <p class="control pepole-counter">{{pepoleCount}}</p>
        <p class="control">
          <a class="button is-primary pepole-counter" @click="lessPepole"><i class="fas fa-minus"></i></a>
        </p>
      </div>
    </div>

    <input class="input is-small guests-name" type="text" placeholder="full name" required>
    <input class="guests-name" type="text" placeholder="Full Name " required>
    <input class="guests-mobile" type="text" placeholder="Mobile Number" required>
    <br>
    <input class="input is-small guests-mobile" type="text" placeholder="mobile number" required>
    <button class="button is-small is-primary">ariving</button>
    <!-- <button class="btn-attending btn-not-ariving">not ariving</button> -->
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

  margin: 3px;
  font-size: 12px;
  font-family: "Asap Condensed";
}
.counter-view {
  width: 30px;
}
.addPeople,
.reducePepole {
  /* border-radius: 30%;
  background: #F08080;
  border-radius: 30%;
  color: black;
  padding: 8px;
  cursor: pointer;
  width: 30px;
  height: 28px;
  font-size: 15px;
  text-align: center; */
}
/* .pepoleCountSpan {
  background: #d3d3d3;
  color: black;
  height: 27px;
  width: 58px;
  border-radius: 5px;
  text-align: center;
} */

.incomingPepole {
  display: flex;
  justify-content: center;
  margin: 5px;
}

input.guests-name {
  /* text-align: center;
  border: gray;
  border-radius: 10px;
  padding: 6px;
  margin: 0; */
  width: 45%;
  margin: 5px 10px 0 0 ;
}
input.guests-mobile {
  /* text-align: center;
  border: gray;
  border-radius: 10px;
  width: 70%;
  padding: 6px;
  margin: 5px; */
    width: 45%;

}
.btn-attending {
  border: none;
  color: white;
  padding: 6px 3px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin: 0 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
}
.btn-ariving {
  background: red;
}
.btn-not-ariving {
  background: gray;
}
.btn-ariving:hover {
  background-color: rgb(236, 68, 49);
}
.btn-not-ariving:hover {
  background: #696969;
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
