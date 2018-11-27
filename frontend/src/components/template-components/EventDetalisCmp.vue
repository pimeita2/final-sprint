<template>
  <section class="event-details-container">
    <div class="event-details">
      <p>{{date}}</p>
      <p>{{time}}</p>
      <p>{{address}}</p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      date: "oct 30 2018",
      time: "20:30",
      address: "23 magal street rishon-lezion"
    };
  }
};
</script>
<style>
.event-details p {
  margin: 5px;
}
</style>