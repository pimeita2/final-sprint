<template>
  <section class="first-template">
    <div class="edit-template-section">
      <div class="template-container" :style="dynamicCmps[dynamicCmps.length-1].data.css" @click="connectToEditor('template')">
        <div class="backgroun-frame" @click="connectToEditor('template')">
          <div class="card-container" @click.stop>
            <!-- <title-cmp/> -->
            <!-- dynamicCmps[dynamicCmp.length-1].css -->
            <component
              @connectToCmpPart="connectToCmpPart"
              @showEditor="showEditor"
              v-for="cmp in dynamicCmps"
              :key="cmp.id"
              :id="cmp.id"
              :is="cmp.type"
              :data="cmp.data"
            />
          </div>
        </div>
      </div>
    </div>
    <button class="publish" @click="publish">Publish</button>

    <!-- <pre>{{dynamicCmps[dynamicCmps.length-1].data.css}}</pre> -->
    <!-- TO check if this is the right place!!! -->
    <publish-modal v-if="show" @close="show=false" :type="type"></publish-modal>
  </section>
</template>

<script>
import publishModal from '@/components/PublishModal.vue';
// import timedate from "@/components/template-components/TimeAndDateCmp.vue";
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
      type: "first",
      bsckground:this.dynamicCmps[dynamicCmp.length-1].css
      
    };
  },
  components: {
    // timedate,
    map,
    publishModal,
    invaitorName,
    eventTitle,
    shortDescription,
    day,
    // hour,
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
    connectToEditor(cmpPart) {
      this.$emit("connectToCmpPart", cmpPart);
      console.log('cmpPart,first:',cmpPart)
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
 
    // getUserStyle() {
    //   return this.$store.getters.getUserStyle;
    // },
    dynamicCmps() {
      return this.$store.getters.dynamicCmps;
    }
  },
  created() {
    const first = [
      {
        id: 0,
        kind: "text",
        type: "invaitorName",
        isEdit: true,
        data: {
          txt: "meital invaits you",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Oswald",
            fontSize: 12 + "px"
          }
        }
      },
      {
        id: 1,
        kind: "text",
        type: "eventTitle",
        isEdit: true,
        data: {
          txt: "Get your dance on",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Satisfy",
            fontSize: 28 + "px"
          }
        }
      },
      {
        id: 2,
        kind: "text",
        type: "shortDescription",
        isEdit: true,
        data: {
          txt: "learn how to dance in three simple steps",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Asap Condensed",
            fontSize: 16 + "px"
          }
        }
      },
      {
        id: 3,
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
            fontFamily: "Asap Condensed",
            fontSize: 16 + "px"
          }
        }
      },
      {
        id: 4,
        kind: "text",
        type: "hour",
        isEdit: true,
        data: {
          txt: "00:30",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Satisfy",
            fontSize: 18 + "px"
          }
        }
      },
      {
        id: 5,
        kind: "text",
        type: "location",
        isEdit: true,
        data: {
          txt: "23 Magal Street, Rishon-Lezion",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Asap Condensed",
            fontSize: 16 + "px"
          }
        }
      },
      {
        id: 6,
        kind: "cmp",
        type: "attending",
        isEdit: true,
        data: {}
      },
      {
        id: 7,
        kind: "cmp",
        type: "socialMedia",
        isEdit: true,
        data: {
          txtF: "",
          txtL: "",
          txtT: "",
          txtI: ""
        }
      },
      {
        id: 8,
        kind: "background",
        type: "template",
        kind: "other",
        data: {
          css: {
            backgroundColor: "#ff9a90",
            // backgroundImage: ``
          }
        }
      }
    ];

    this.$store.dispatch({
      type: "setCurrTemplate",
      tmpData: first
    });
  }
};
</script>

<style>

</style>