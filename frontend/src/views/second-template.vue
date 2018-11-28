<template>
  <section class="template1">
    <main-header id="nav"></main-header>
    <div class="edit-template-section">
      <template-edit></template-edit>
      <div class="template1-container">
        <div class="col-1"></div>
        <div class="col-2">
          <p class="email">reut1990@gmail.com</p>
          <h1>Coocking session</h1>
          <h6>Come study with us how to make your finest dishes</h6>
          <p
            class="description"
          >Three days workshop where you study how to master coocking. Dishes includes:lots of cakes</p>
          <p>Date: 01/12/2018</p>
          <p>Hour:20:00</p>
          <p>Location:Ramat Aviv</p>
          <p>SEE YA!</p>
        </div>
      </div>
    </div>
    <button>Save</button>
  </section>
</template>

<script>
import templateEdit from "@/components/TemplateEdit.vue";
import mainHeader from "@/components/MainHeader.vue";

export default {
  name: "second-template",
  components: {
    templateEdit,
    mainHeader
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Indie+Flower|Sedgwick+Ave");

#nav{
  position: relative;
  padding: 0px;
}

.template1-container {
  display: grid;
  grid-template-columns: 40% 60%;
  width: 80%;
  margin: auto;
  border: 2px solid lightcyan;
  max-width: 500px;
}

.col-1 {
  background: url("../assets/second-template.jpg");
  //   height: 150px;
  padding: 15px;
  background-position: center;
}

.col-2 {
  background-color: brown;
  color: white;
  font-family: Indie Flower, sans-serif;
  font-size: 18px;
}

.col-2 h1 {
  font-size: 40px;
  font-family: Sedgwick Ave, sans-serif;
}

.col-2 h6 {
  font-size: 20px;
  padding: 0 15px;
}

.description {
  padding: 0 10px;
}
.email {
  text-align: right;
  padding-right: 15px;
}

.edit-template-section {
  display: flex;
}

button{
  float:left;
}
</style>