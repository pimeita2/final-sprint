<template>
  <section class="third-template">
    <div class="edit-template-third-section">
      <div class="template-third-container" :style="userStyleBackground" @click="connectToEditor">
          
        <div @click="connectToEditor" >
          <div class="card-third-container" @click.stop >
            
            <div class="cmpThird">
            <component
              @connectToCmpPart="connectToCmpPart"
              @showEditor="showEditor"
              v-for="cmp in dynamicCmps"
              :key="cmp.id"
              :is="cmp.type"
              :data="cmp.data"
            />
            </div>
          </div>
        </div>
        </div>
      </div>
   

    <button class="publish" @click="publish">Publish</button>
    <publish-modal v-if="show" @close="show=false" :type="type"></publish-modal>
  </section>
</template>

<script>
import publishModal from "@/components/PublishModal.vue";
import invaitorName from "@/components/template-components/InvaitorNameCmp.vue";
import eventTitle from "@/components/template-components/EventTitleCmp.vue";
import shortDescription from "@/components/template-components/ShortDescriptionCmp.vue";
import day from "@/components/template-components/DayCmp.vue";
import hour from "@/components/template-components/HourCmp.vue";
import location from "@/components/template-components/AddressCmp.vue";
import attending from "@/components/template-components/AttendingCmp.vue";
import socialMedia from "@/components/template-components/SocialMediaCmp.vue";
import templateService from "@/services/templateService";

export default {
  data() {
    return {
      show: false,
      type: "first"
    };
  },
  components: {
    publishModal,
    invaitorName,
    eventTitle,
    shortDescription,
    day,
    hour,
    location,
    socialMedia,
    attending,
    templateService
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
      console.log('cmpPart:',cmpPart)
      this.$emit("showEditor", { kind: "background" });
    },
    publish() {
      this.show = true;
      templateService
        .add({
          cmps: this.dynamicCmps,
          base: {
            name: "third"
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
    const third = [
      {
        id: 0,
        kind: "text",
        type: "invaitorName",
        isEdit: true,
        data: {
          txt: `YOU ARE INVITED TO A`,
          css: {
            color: "white",
            textAlign: "right",
            fontWeight: {
              isBold: true,
              value: "normal"
            },
            fontFamily: "Oswald",
            fontSize: 20 + "px"
          }
        }
      },
      {
        id: 1,
        kind: "text",
        type: "shortDescription",
        isEdit: true,
        data: {
          txt: `Join us For Rotem's 26th Birthday `,
          css: {
            color: "white",
            textAlign: "left",
            paddingRight: "261px",
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
        id: 2,
        kind: "text",
        type: "eventTitle",
        isEdit: true,
        data: {
          txt: "P O O L   P A R T Y",
          css: {
            color: "white",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Oswald",
            fontSize: 28 + "px"
          }
        }
      },
            {
        id: 3,
        kind: "text",
        type: "day",
        isEdit: true,
        data: {
          txt: "05/09/2019",
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
          txt: "12:00",
          css: {
            color: "white",
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
          txt: "",
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
            backgroundColor: "",
            backgroundImage: ``
          }
        }
      }
    ];

    this.$store.dispatch({
      type: "setCurrTemplate",
      tmpData: third
    });
  }
};
</script>

<style>
.date{
position: inl;
 }

</style>
 
 