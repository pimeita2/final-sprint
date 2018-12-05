<template>
  <section>
    <main-header></main-header>

    <!-- <router-link to="/second">second template</router-link> -->
    <div class="home">
      <section id="banner">
        <h1 class="titleBanner first-line">
          Create
          Your Invitation
          <br>
          </h1>
          <h1 class="titleBanner second-line">For
          Your
          Occasion
        </h1>
      <!--   <button class="btn-get-start">Get Started</button> -->
      </section>
      <section class="templates">
        <div class="templates-container">
          <filter-list></filter-list>
          <templateList :templates="templates"></templateList>
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
import filterList from "@/components/FilterList.vue";

export default {
  name: "home",
  components: {
    templateList,
    mainHeader,
    mainFooter,
    filterList
  },
  computed: {},

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
          name: "Pool Party",
          stars: 5,
          downloadNum: 10,
          id: 3,
          image: "../assets/third.jpg"
        },
        {
          name: "Dancing Lesson",
          stars: 5,
          downloadNum: 100,
          id: 4,
          image: "../assets/first.jpg"
        },
        {
          name: "Wedding",
          stars: 5,
          downloadNum: 10,
          id: 5,
          image: "../assets/second.png"
        },
        {
          name: "Birthday",
          stars: 5,
          downloadNum: 10,
          id: 6,
          image: "../assets/third.jpg"
        },
        {
          name: "Dancing Lesson",
          stars: 5,
          downloadNum: 100,
          id: 7,
          image: "../assets/first.jpg"
        },
        {
          name: "Wedding",
          stars: 5,
          downloadNum: 10,
          id: 8,
          image: "../assets/second.png"
        },
        {
          name: "Birthday",
          stars: 5,
          downloadNum: 10,
          id: 9,
          image: "../assets/third.jpg"
        },
        {
          name: "Dancing Lesson",
          stars: 5,
          downloadNum: 100,
          id: 10,
          image: "../assets/first.jpg"
        },
        {
          name: "Wedding",
          stars: 5,
          downloadNum: 10,
          id: 12,
          image: "../assets/second.png"
        },
        {
          name: "Birthday",
          stars: 5,
          downloadNum: 10,
          id: 13,
          image: "../assets/third.jpg"
        },
        {
          name: "Dancing Lesson",
          stars: 5,
          downloadNum: 100,
          id: 14,
          image: "../assets/first.jpg"
        },
        {
          name: "Wedding",
          stars: 5,
          downloadNum: 10,
          id: 15,
          image: "../assets/second.png"
        },
        {
          name: "Birthday",
          stars: 5,
          downloadNum: 10,
          id: 16,
          image: "../assets/third.jpg"
        },
        {
          name: "Dancing Lesson",
          stars: 5,
          downloadNum: 100,
          id: 17,
          image: "../assets/first.jpg"
        },
        {
          name: "Wedding",
          stars: 5,
          downloadNum: 10,
          id: 18,
          image: "../assets/second.png"
        },
        {
          name: "Birthday",
          stars: 5,
          downloadNum: 10,
          id: 19,
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

#banner {
  background-color: #e5474b;
  color: #f2a3a5;
  background-color: #0c0c0c;
  background-image: url("../assets/img56.jpg");
  background-position-y: -100px;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: 100px; */
  position: relative;
  z-index: 0;
  margin-top: -145px;
  height: 95vh;
  /* box-shadow: inset 0 0 0 100px rgba(36, 70, 105, 0.74); */
}

#banner::after {
  background: rgba(0, 0, 0, 0.45);
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.titleBanner {
  font-size: 3.4em;
  padding: 3.3em 0 0 1em;
  letter-spacing: 3px;
  font-weight: 700;
  font-family: 'Comfortaa', cursive;
  text-align: left;
  color: white;
  opacity: 1;
  color: rgb(252, 235, 204);
  margin-top: 10px;
  animation: moveFromLeft 1.5s ;
}

.titleBanner.second-line{
  text-align: right;
  padding: 0 2.7em 0 0;
  animation: moveFromRight 1.5s;
}

#banner a {
  color: #ffffff;
}
.btn-get-start {
  background-color: #232323;
  color: #ffffff;
  cursor: pointer;
  z-index: 2;
  padding: 10px;
  /* border-radius: 25px; */
  margin-top: 75px;
  border: 2px solid lightgray;
  /* text-shadow: 2px 2px 2px lightslategrey;
    background-color: darkgray; */
}

#banner .button:hover {
  background-color: #676767;
}

.templates {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px 50px;
  margin: auto;
}
.templates-container {
  display: flex;
}

@keyframes moveFromLeft{
  0%{
      transform: translateX(-150%);
      opacity: 0;
  }

  50%{
    opacity: 0.5;
  }
  100%{
      transform: translateX(0);
      opacity: 1;
  }
}

@keyframes moveFromRight{
  0%{
      transform: translateX(+150%);
      opacity: 0;
  }

  50%{
    opacity: 0.5;
  }
  100%{
      transform: translateX(0);
      opacity: 1;
  }
}

/* .new-img-container {
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
} */
</style>
