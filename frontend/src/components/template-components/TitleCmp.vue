<template>
  <section class="event-description-container">
    <h3 class="invition-line" contenteditable="true">{{businessName}} INVITE YOU</h3>
    <h1 class="event-name" contenteditable="true">{{eventName}}</h1>
    <p class="short-description" contenteditable="true">{{shortDescription}}</p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      businessName: "meitals",
      eventName: "open your hart to me workshop",
      shortDescription: "discover your true loves and passions in life",
    };
  }
};
</script>
<style>
.event-description-container {
  padding: 10px;
}
.event-description-container:hover{
  cursor: all-scroll;
}
.event-description-container h3 {
  font-size: 14px;
  font-family: "Satisfy", cursive;
  text-transform: uppercase;
}
.event-description-container h1 {
  margin: 18px;
  font-size: 34px;
  font-weight: bold;
}
.event-description-container p {
  background-color: rgb(153, 49, 54);
  font-size: 12px;
  color: white;
}
</style>