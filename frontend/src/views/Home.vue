<template>
  <section>
    <main-header v-on:scroll.passive="onScroll">></main-header>

    <!-- <router-link to="/second">second template</router-link> -->
    <div class="home">
      <section id="banner">
        <div class="inner">
          <h1>
            Create
            Your Invitation
            <br>For
            Your
            Occasion
          </h1>

          <button class="button">Get Started</button>
        </div>
      </section>
      <section class="popular">
        <h6>Most Popular</h6>
        <div>
          <templateList :templates="templates"></templateList>
          <button class="btn-more">More Templates</button>
        </div>
      </section>
      <section class="new">
        <h6>Recently Added</h6>
        <div class="new-img-container">
          <img src="../assets/new1.jpg" alt="loading">
          <img src="../assets/new2.jpg" alt="loading">
          <img src="../assets/new3.jpg" alt="loading">
        </div>
      </section>
      <router-link to="/template/1">First</router-link>|
      <router-link to="/template/2">Second</router-link>|
      <router-link to="/template/3">Third</router-link>
    </div>
    <main-footer></main-footer>
  </section>
</template>

<script>
import templateList from "@/components/TemplateList.vue";
import mainHeader from "@/components/MainHeader.vue";
import mainFooter from "@/components/MainFooter.vue";

export default {
  name: "home",
  components: {
    templateList,
    mainHeader,
    mainFooter
  },
  data() {
    return {
      templates: [
        {
          name: "Dancing Lesson",
          stars: 5,
          downloadNum: 100,
          id: 1,
          image: "../assets/first.jpg"
        },
        {
          name: "Wedding",
          stars: 5,
          downloadNum: 10,
          id: 2,
          image: "../assets/second.png"
        },
        {
          name: "Birthday",
          stars: 5,
          downloadNum: 10,
          id: 3,
          image: "../assets/third.jpg"
        }
      ]
      // template: this.$store.getters.getTemplatesForDisplay
    };
  }
};
</script>

<style>
body {
  margin: 0;
}

/* Banner */

#banner {
  background-color: #e5474b;
  color: #f2a3a5;
  padding: 12em 0 8em 0;
  background-color: #0c0c0c;
  background-image: url("../assets/img.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 15% left;
  position: relative;
  z-index: 0;
  margin-top: -120px;
}
.inner {
  text-shadow: 2px 2px 2px lightslategrey;
}

#banner h1 {
  font-size: 3.1em;
  /* margin: 0 0 1em 0; */
  /* padding: 0; */
  letter-spacing: 3px;
  font-weight: 700;
  text-align: center;
  color: white;
}
#banner a {
  color: #ffffff;
}
#banner .button {
  background-color: lightgreen;
  color: #ffffff;
  cursor: pointer;
  z-index: 2;
  /* text-shadow: 2px 2px 2px lightslategrey;
    background-color: darkgray; */
}

#banner .button:hover {
  background-color: #676767;
}
.popular h6 {
  padding: 50px;
  font-size: 40px;
  font-weight: 700;
  color: blueviolet;
}

.btn-more {
  background-color: transparent;
  border: 2px solid black;
  margin: 30px;
  padding: 15px;
  border-radius: 25px;
}
.new {
  background-color: ghostwhite;
  margin-top: 50px;
}

/* .new img:hover{
  background-image: url("../assets/plus.jpg");
  
} */
.new h6 {
  padding: 50px;
  font-size: 40px;
  font-weight: 700;
}

.new-img-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 70px;
}

.new img {
  max-width: 200px;
  height: 200px;
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  #banner .inner {
    max-width: 90%;
    width: 90%;
  }

  body.is-loading #banner:after {
    opacity: 1;
  }
}
</style>
