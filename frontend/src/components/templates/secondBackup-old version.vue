<template>
  <section class="second-template">
    <div class="second-container">
      <div class="wedding-img" @click.stop="handleImg">
        <!-- will be img component-->
      </div>
      <div class="txt-ourWedding">
        ∙∙·▫▫ᵒᴼᵒ▫ₒₒₒ▫ᵒᴼᵒ
        <span>𝓞𝓾𝓻 𝓦𝓮𝓭𝓭𝓲𝓷𝓰</span> ᵒᴼᵒ▫ₒₒₒ▫ᵒᴼᵒ▫▫·∙∙
      </div>
      <div class="second-part-container">
        <div class="invitors">
          <invaitor-name
            @connectToCmpPart="connectToCmpPart"
            @showEditor="showEditor"
            :data="dynamicCmps[0].data"
          ></invaitor-name>
          <img class="and" src="../../assets/and.png" alt="and">
          <invaitor-name
            @connectToCmpPart="connectToCmpPart"
            @showEditor="showEditor"
            :data="dynamicCmps[1].data"
          ></invaitor-name>
        </div>
        <img class="heart" src="../../assets/heart2.png" alt="heart">

        <short-description
          @connectToCmpPart="connectToCmpPart"
          @showEditor="showEditor"
          :data="dynamicCmps[2].data"
        ></short-description>

        <div class="day-and-hour">
          <day
            @connectToCmpPart="connectToCmpPart"
            @showEditor="showEditor"
            :data="dynamicCmps[3].data"
          ></day>
          <hour
            @connectToCmpPart="connectToCmpPart"
            @showEditor="showEditor"
            :data="dynamicCmps[4].data"
          ></hour>
        </div>
        <location
          @connectToCmpPart="connectToCmpPart"
          @showEditor="showEditor"
          :data="dynamicCmps[5].data"
        ></location>
        <div
          :style="{border:'2px solid black', height:'100px', width:'90%', margin:'auto'}"
        >mappppppppp</div>
      </div>

      <!-- //  <component
          //     @connectToCmpPart="connectToCmpPart"
          //     @showEditor="showEditor"
          //     v-for="cmp in dynamicCmps"
          //     :key="cmp.id"
          //     :id="cmp.id"
          //     :is="cmp.type"
          //     :data="cmp.data"
          //   />
          
      -->
    </div>
    <button class="publish" @click="publish">Publish</button>
    <!-- <pre>{{generalStyle}}</pre> -->
    <!-- TO check if this is the right place!!! -->
    <publish-modal v-if="show" @close="show=false" :type="type"></publish-modal>
  </section>
</template>

<script>
import publishModal from "@/components/PublishModal.vue";
import invaitorName from "@/components/template-components/InvaitorNameCmp.vue";
import eventTitle from "@/components/template-components/EventTitleCmp.vue";
import shortDescription from "@/components/template-components/ShortDescriptionCmp.vue";
import day from "@/components/template-components/DayCmp.vue";
import map from "@/components/template-components/MapCmp.vue";
import location from "@/components/template-components/AddressCmp.vue";
import attending from "@/components/template-components/AttendingCmp.vue";
import socialMedia from "@/components/template-components/SocialMediaCmp.vue";
import templateService from "@/services/templateService";

export default {
  data() {
    return {
      show: false,
      type: "second"
    };
  },
  components: {
    map,
    publishModal,
    invaitorName,
    eventTitle,
    shortDescription,
    day,
    location,
    socialMedia,
    attending
  },
  methods: {
    connectToCmpPart(cmpPart) {
      this.$emit("connectToCmpPart", cmpPart);
    },
    showEditor({ kind }) {
      this.$emit("showEditor", { kind });
    },
    connectToEditor() {
      // for background!!!!
      this.$emit("connectToCmpPart", "background");
      this.$emit("showEditor", { kind: "background" });
    },

    publish() {
      this.show = true;
      templateService
        .add({
          cmps: this.dynamicCmps,
          base: {
            name: "first"
          },
          name: "Puki's birrthday",
          modified: Date.now(),
          creatorId: "abc123" // TODO: currLoggedinuserId here
        })
        .then(template =>
          console.log("template was added successfully", template)
        );
    }
  },
  computed: {
    dynamicCmps() {
      return this.$store.getters.dynamicCmps;
    },
    generalStyle() {
      return this.$store.getters.generalStyle;
    }
  },
  created() {
    const cmps = [
      {
        id: "e2e",
        kind: "text",
        type: "invaitorName",
        isEdit: true,
        data: {
          txt: "Meital",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Oswald",
            fontSize: 30 + "px"
          }
        }
      },
      {
        id: "e22e",
        kind: "text",
        type: "invaitorName",
        isEdit: true,
        data: {
          txt: "Don",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Oswald",
            fontSize: 30 + "px"
          }
        }
      },
      {
        id: "e50e",
        kind: "text",
        type: "shortDescription",
        isEdit: true,
        data: {
          txt: "Celebrat Love with us",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "cursive",
            fontSize: 20 + "px"
          }
        }
      },
      {
        id: "e51e",
        kind: "text",
        type: "day",
        isEdit: true,
        data: {
          txt: "01/12/1990",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "cursive",
            fontSize: 20 + "px"
          }
        }
      },
      {
        id: "e52e",
        kind: "text",
        type: "hour",
        isEdit: true,
        data: {
          txt: "20:30",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "cursive",
            fontSize: 20 + "px"
          }
        }
      },
      {
        id: "e53e",
        kind: "text",
        type: "location",
        isEdit: true,
        data: {
          txt: "Nezer Sirani ,hasda 23, Rishon Le zion",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "cursive",
            fontSize: 30 + "px"
          }
        }
      }
    ];
    const general = {
      backgroundColor: "#ff9a90"
    };
    this.$store.dispatch({
      type: "setCurrTemplate",
      tmpData: cmps,
      general
    });
  }
};
</script>


<style>
.second-template {
  margin-left: 25%;
}
.second-container {
  margin-top: 50px;
}

.wedding-img {
  height: 250px;
  background-image: url("../../assets/wedding.jpeg");
  background-position: center;
  background-size: cover;
  cursor: pointer;
  margin: auto;
}

.txt-ourWedding {
  font-size: 15px;
  text-shadow: 0 0 20px lightblue;
  background: dimgrey;
  color: white;
}

.txt-ourWedding span {
  font-size: 30px;
}

.invitors,
.day-and-hour {
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: transparent;
}

.day-and-hour {
  justify-content: flex-end;
}
.and {
  height: 40px;
}

.second-part-container {
  background-image: linear-gradient(
    to right bottom,
    #1e161a,
    #413b3f,
    #686468,
    #929093,
    #bfbec0,
    #c1c1c3,
    #c4c5c6,
    #c7c8c9,
    #9ea1a2,
    #767b7c,
    #515758,
    #2f3635
  );
}
.heart {
  height: 50px;
}
</style>
 
 