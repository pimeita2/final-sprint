<template>
<section class="nav">
    <header>
        <router-link  to="/" class=" routers logo">Templit</router-link>
         <div class="header-right">
            <router-link class="routers" to="/contact" >Contact Us</router-link>
            <router-link class="routers" to="/about" >About</router-link>
            <router-link class="routers" to="/template" >template</router-link>
           <a class="active login-btn routers" @click="showLogin=true" >Login/Sign Up</a>
           <user-login v-if="showLogin" @close="showLogin=false" @signup="showLogin=false;showSignup=true" ></user-login> 
           <user-singup v-if="showSignup" @close="showSignup=false"></user-singup>       
          </div>
    </header>

</section>
</template>

<script>
import userLogin from '@/components/UserLogin.vue'
import userSingup from '@/components/UserSignUp.vue'
export default {
    components:{
        userLogin,
        userSingup
    },

    data(){
      return {
        showLogin:false,
        showSignup:false,

      }
    }
   
    

}


</script>



<style>
.nav{
  position:sticky;
  top: 0;
  width: 100%;

}

header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

header .routers {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

header .routers.logo {
  font-family: 'Satisfy', cursive;
  font-size: 2rem;

}

header .routers:hover {
  background-color: #ddd;
  color: black;
}

header .routers.active {
  background-color: rgb(55, 201, 186);
  color: white;
}

.header-right {
  float: right;
}

.login-btn{
  cursor: pointer;

}


</style>
