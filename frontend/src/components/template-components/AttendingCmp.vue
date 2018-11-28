<template>
  <section class="attending-container">
    <div class="attending">
      <h3 class="attending-title">attending</h3>
      <p class="attending-sub-title">how many guests</p>
      <button class="add">+</button>
      <input class="counter-view">
      <button class="reduce">-</button>
      <br>
      <input class="guests-name" type="text" placeholder="full name" required>
      <input class="guests-mobile" type="number" placeholder="mobile num" required>
      <br>
      <button class="btn-attending btn-ariving">ariving</button>
      <button class="btn-attending btn-not-ariving">not ariving</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>


<style>
.attending {
  margin: 10px;
}
.attending h3 {
  margin: 16px 0 0 0;
}
.attending p {
  margin: 3px;
  font-size: 12px;
}
.counter-view {
  width: 30px;
}
.guests-name {
  margin: 5px 10px 0 0;
  width: 120px;
  background-color: rgba(250, 250, 250, 0.699);
  color: grey;
}
.guests-mobile {
  margin: 5px 10px 10px 0;
  width: 120px;
  background-color: rgba(250, 250, 250, 0.699);
  color: grey;
}
.btn-attending {
  /* margin: 8px; */
  border: none;
  color: white;
  background-color: rgb(153, 49, 54);
  padding: 6px 3px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  margin: 10px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}
.btn-attending:hover {
  background-color: #ce1d8a;
  color: white;
}
</style>

