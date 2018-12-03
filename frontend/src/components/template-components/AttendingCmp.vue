<template>
  <section class="attending-container">
    <h3 class="attending-title">Attending</h3>
    <p class="attending-sub-title">How many guests are comming?</p>
    <div class="incomingPepole">

      <div class="field has-addons has-addons-right" >
       <p class="control">
          <a class="button is-primary" @click="addMorePepole">+</a>
        </p>
        <p class="control">
          
        <input class="input" type="text" placeholder="Disabled input" disabled>
          
        </p>
        <p class="control">
          <a class="button is-primary" @click="lessPepole">-</a>
        </p>
      </div>

      <button class="addPeople" @click="addMorePepole">+</button>
      <div class="pepoleCountSpan">{{pepoleCount}}</div>
      <button class="reducePepole" @click="lessPepole">-</button>
    </div>

    <input class="guests-name" type="text" placeholder="Enter your full name please" required>
    <input class="guests-mobile" type="text" placeholder="Enter your mobile number please" required>
    <br>

    <button class="btn-attending btn-ariving">ariving</button>
    <button class="btn-attending btn-not-ariving">not ariving</button>
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
  font-family: "Asap Condensed";
}
.attending-sub-title {
  margin: 3px;
  font-size: 12px;
  font-family: "Asap Condensed";
}
.counter-view {
  width: 30px;
}
.addPeople,
.reducePepole {
  border-radius: 30%;
  /* background: #F08080; */
  color: black;
  padding: 8px;
  cursor: pointer;
  width: 30px;
  height: 28px;
  font-size: 15px;
  text-align: center;
}
.pepoleCountSpan {
  background: #d3d3d3;
  color: black;
  height: 27px;
  width: 58px;
  border-radius: 5px;
  text-align: center;
}

.incomingPepole {
  display: flex;
  justify-content: center;
  margin: 5px;
}

input.guests-name {
  text-align: center;
  border: gray;
  border-radius: 10px;
  padding: 6px;
  width: 70%;
  margin: 0;
}
input.guests-mobile {
  text-align: center;
  border: gray;
  border-radius: 10px;
  width: 70%;
  padding: 6px;
  margin: 5px;
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
.control > input{
    margin: 0px 0 22px 0;
  }
</style>
