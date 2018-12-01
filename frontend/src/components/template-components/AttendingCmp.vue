<template>
  <section class="attending-container">
    
      <h3 class="attending-title">Attending</h3>
      <p class="attending-sub-title">How many guests are comming?</p>
      <div class="incomingPepole">
      <button class="addPeople" @click="addMorePepole">+</button>
      <div class="pepoleCountSpan">{{pepoleCount}}</div>
      <button class="reducePepole" @click="lessPepole">-</button>
      </div>
      <br>

      <input class="guests-name" type="text" placeholder="Enter your full name please" required>
      <input class="guests-mobile" type="text" placeholder="Enter your mobile number please" required>
      <br>
      
      <button class="btn-attending btn-ariving">ariving</button>
      <button class="btn-attending btn-not-ariving">not ariving</button>
    
  </section>
</template>

<script>
export default {
  props:{
    data:Object
  },
  data(){
    return {
    pepoleCount:0,
    
    }
  },
    methods: {
    addMorePepole() {
      this.pepoleCount++;
    },
    lessPepole() {
      this.pepoleCount--;
      if (this.pepoleCount<0)return this.pepoleCount=0;
    },

    }
};


</script>


<style>
.attending-title {
  margin: 16px 0 0 0;
}
.attending-sub-title {
  margin: 3px;
  font-size: 12px;
}
.counter-view {
  width: 30px;
}
.addPeople, .reducePepole{
  border-radius: 50%;
  background: #F08080;
  color:white;
  padding:8px;
  cursor: pointer;
}
.pepoleCountSpan{
  background: #D3D3D3;
  color:black;
  height: 25px;
  width: 50px;
}

.incomingPepole{
  display:flex;
  justify-content: center;
  margin:5px;
}

input.guests-name {
    text-align: center;
    border: gray;
    border-radius: 10px;
    width: 70%;
    margin:0;
}
input.guests-mobile {
    text-align: center;
    border: gray;
    border-radius: 15px;
    width: 70%;
    padding:5px;
    margin:5px;
  
}
.btn-attending {
  border: none;
  color: white;
  padding: 6px 3px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  margin: 0 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
}
.btn-ariving{
  background:#F08080;
}
.btn-not-ariving{
  background:gray;
}
.btn-ariving:hover {
  background-color: rgb(236, 68, 49)
  
}
.btn-not-ariving:hover{
  background:#696969;

}
</style>

