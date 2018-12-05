<template>
    <header class="nav scrollme" :class="{'active': isActive}">
        <router-link  to="/" class=" routers logo">Invite<span class="it">Me</span></router-link>
         <div class="header-right">
            <router-link class="routers btn" to="/contact" >Contact </router-link>
            <router-link class="routers btn" to="/about" >About Us</router-link>
            <router-link class="routers btn" to="/template" >Create Templates</router-link>
            <a class="a-login-signup" @click="showLogin=true" >Login/Sign Up</a>
           <user-login v-if="showLogin" @close="showLogin=false" @signup="showLogin=false;showSignup=true" ></user-login> 
           <user-singup v-if="showSignup" @close="showSignup=false"></user-singup>       
          </div>
    </header>

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
    },
    methods:{
     
    }
   
    

}


</script>



<style>
.nav{
  position:sticky;
  top: 0;
  width: 100%;
  z-index: 2;

}

.it{
  color: lightblue;
}
header {
  overflow: hidden;
  /* background: linear-gradient(to right, #556270, #4ECDC4);  */
  /* background-image: linear-gradient(to right top, #393538, #353336, #323034, #2e2e32, #2b2c2f, #27292c, #232629, #1f2326, #191f21, #121a1c, #0a1617, #001110); */
  /* background-image: linear-gradient(to right top, #2968bb, #556ac3, #776ac8, #9669ca, #b368c9, #b460bd, #b557b1, #b54fa5, #9d3f8f, #862e7a, #6f1e66, #590c52); */
  /* background-image: linear-gradient(to right top, #243a57, #2d3f6a, #40417a, #5a4187, #773d8e, #7f378a, #872f85, #8e267f, #802074, #731968, #66135d, #590c52); */
  /* background-image: linear-gradient(to right top, #060809, #151718, #202124, #2c2c30, #39373c, #464448, #545155, #625e62, #737074, #848386, #979698, #aaaaaa); */
  background-color:transparent;
  padding: 20px 40px;
}

.active{
  background-image: linear-gradient(to right top, #060809, #151718, #202124, #2c2c30, #39373c, #464448, #545155, #625e62, #737074, #848386, #979698, #aaaaaa);
  }
header .routers {
  float: left;
  color: rgb(252, 235, 204);
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 14px; 
  line-height: 25px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
}

header .routers:hover {
 color:#232323;
}

header .routers.logo {
  font-family: 'Satisfy', cursive;
  font-size: 2rem;
    /* text-shadow: 0px 0px 10px black; */


}

header .routers.btn:hover{
  /* color:#75be; */
	animation: text-shadow-pop-tr 0.5s both;
}


.header-right {
  float: right;
 /* text-shadow: 0px 0px 20px black; */
}

.logo:hover{
  /* text-shadow: 0px 0px 10px black; */
}

.login-btn{
  cursor: pointer;
  border: 2px solid lightblue;
  background: lightblue;
  border-radius: 15px;
}

.login-btn:hover{
  animation: heartbeat 1.5s ease-in-out infinite both;
}



@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}

.a-login-signup{
  text-decoration: none;
     float: left;
    color: rgb(252, 235, 204);
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 14px;
    line-height: 25px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
}
</style>
