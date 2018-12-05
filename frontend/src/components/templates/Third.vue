<template>
  <section class="third-template">
    <div class="edit-template-third-section">
      <div class="template-third-container" :style="userStyleBackground" @click="connectToEditor">
          
        <div @click="connectToEditor" >
          <div class="card-third-container" @click.stop >
            
           
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
      type: "third"
    };
  },
  components: {
    // map,
    publishModal,
    invaitorName,
    eventTitle,
    shortDescription,
    day,
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
            textAlign: "center",
            padding: 13+"px",
            margin:"0 auto",
            fontWeight: {
              isBold: true,
              value: "normal"
            },
            fontFamily: "Oswald",
            fontSize: 27 + "px"
          }
        }
      },     
            {
        id: 1,
        kind: "text",
        type: "eventTitle",
        isEdit: true,
        data: {
          txt: "P O O L   P A R T Y",
          css: {
            color: "white",
            textAlign: "center",
            width:"100%",
            padding:"",
            paddingTop:32+"px",
            margin:"",
            marginRight:76+"px",
            transform: "rotate(-20deg)",
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
        id: 2,
        kind: "text",
        type: "shortDescription",
        isEdit: true,
        data: {
          txt: `Join us For Rotem's 26th Birthday `,
          css: {
            color: "white",
            textAlign: "left",
            padding:"",
            paddingTop:35+"px",
            margin:"",
            marginLeft:-72+"px",
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
        id: "3",
        kind: "text",
        type: "day",
        isEdit: true,
        data: {
          txt: {
            date: "19/08/2018",
            time: "12:30"
          },
          css: {
            color: "black",
            textAlign: "center",
            // display: "grid",
            marginLeft:467+"px",
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
        type: "location",
        isEdit: true,
        data: {
          txt: "bla bla bla, bla",
          css: {
            color: "black",
            textAlign: "center",
            padding:"",
            margin:"",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Asap Condensed",
            fontSize: 18 + "px"
          }
        }
      },
      {
        id: 5,
        kind: "cmp",
        type: "attending",
        isEdit: true,
        data: {
          css:{
            padding:"",
            // margin:47+"px",
            marginTop:47+"px",
          }
        }
      },
      {
        id: 6,
        kind: "cmp",
        type: "socialMedia",
        isEdit: true,
        data: {
          txtF: "",
          txtL: "",
          txtT: "",
          txtI: "",
          css:{
            marginLeft:365+"px",
          }
        }
      },
      {
        id: 7,
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


</style>
 
 