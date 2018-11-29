<template>
  <section class="contact-container">
    <div class="social-media">
        {{data.F}}
      <a href="#" class="facebook social-media-box">
        <img :src="require(data.F)" alt>
      </a>
      <a href="#" class="twitter social-media-box">
        <img src="@/assets/L.png" alt>
      </a>
      <a href="#" class="be social-media-box">
        <img src="@/assets/f.png" alt>
      </a>
      <a href="#" class="orange social-media-box">
        <img src="@/assets/L.png" alt>
        <!-- <i class="fab fa-linkedin-in"></i> -->
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  },
  created(){
    console.log(this.data.F);
    
  },
  computed: {
    facebook() {
      return this.data.F
    }
  }
};
</script>

<style>
.social-media-box {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin: 0 10px;
  background-color: rgb(187, 185, 185);
  transition: background-color 0.5s;
}
.social-media-box:hover {
  cursor: pointer;
  background-color: #516fad;
}
</style>

