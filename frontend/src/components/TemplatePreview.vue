<template>
  <li>
    <div class="container-template">
      <img class="img-div" src="../assets/third.jpg" alt="loading img...">
      <!-- :src="template.image" -->
      <h5 class="template-name">{{template.name}}</h5>
      <div class="template-nums">
        <h5 class="template-stars">{{template.stars}}</h5>
        <template-star class="stars-rate" :score="template.stars"></template-star>
        <h5 class="template-download">{{template.downloadNum}}</h5>
      </div>
    </div>
  </li>
</template>

<script>
import templateStar from "@/components/TemplateStar.vue";

export default {
  name: "templatePrev",
  props: ["template"],
  components: {
    templateStar
  }
};
</script>

<style>
.container-template {
  width: 200px;
  height: 250px;
  border: 1px solid gray;
}
.container-template:hover {
  border: 2px solid lightgray;
}

h5 {
  margin: 0;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
}
.img-div {
  background: rgb(199, 191, 191);
  width: 100%;
  height: 150px;
}
.template-name {
  font-size: 1.1rem;
  padding: 5px;
}
.template-nums {
  padding: 10px;
}
.template-stars {
  float: left;
}
.template-download {
  float: right;
}
li {
  margin: 10px;
}
.stars-rate {
  float: left;
  padding-left: 5px;
}
</style>
