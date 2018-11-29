<template>
  <section class="event-details-container">
    <div class="event-details">
      <p>{{data.date}}, {{data.time}}</p>
      <p>{{data.address}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    data: Object
  },
  methods: {

  },
  computed: {
  }
};
</script>

<style>
.event-details p {
  margin: 5px;
  color: rgb(153, 49, 54);
  text-transform: capitalize;
}
</style>