
<template>
  <section>
      <h6>Hello  {{user.nickName}}</h6>
      <div>
          <h6>Invitations You Created</h6>
         <div v-for="inv in userInivtes" :key="inv.id">
             <div :style="inv.generalStyle">
              {{inv}}
                <!-- <p v-for="{cmp, index} in inv.data.cmps" :key="index">{{cmp}}</p> -->
             </div>
         </div>
      </div>
  </section>

</template>

<script>
import inviteService from '../services/inviteService.js'
// import EventBus from '../events.js'

export default {
  data() {
    return {
       userInivtes:{}
    };
  },
  created(){
    inviteService.query().then(result=>{
        this.userInivtes=result.filter(invite=>invite.creatorId===this.user.id);
        console.log(this.userInivtes);
    });
    // EventBus.$on('attendingDetails',data=>{
    //   console.count('userArea')
    //   console.log('in user area details from attending', data);
    // });
     
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
  }
};
</script>


<style>
</style>