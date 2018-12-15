
<template>
  <section>
      <h6>Hello  {{user.nickName}}</h6>
      <div>
          <h6>Invitations You Created</h6>
         <div v-for="inv in userInivtes" :key="inv.id">
             <div :style="inv.generalStyle">
                <p v-for="{cmp, index} in inv.data.cmps" :key="index">{{cmp}}</p>
             </div>
         </div>
      </div>
  </section>
</template>

<script>
import inviteService from '../services/inviteService.js'
export default {
  data() {
    return {
       userInivtes:{}
    };
  },
  created(){
    inviteService.query().then(result=>{
        this.userInivtes=result.filter(invite=>invite.creatorId===this.user.id);
    })
        //    return this.postList.filter(post => {
        // return post.title.toLowerCase().includes(this.search.toLowerCase())
      // })
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