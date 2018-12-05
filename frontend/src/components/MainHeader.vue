<template>
    <header class="nav scrollme" :class="{'active': scrolled}">
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
        scrolled: false
      }
    },
    methods:{
       handleScroll () {
        this.scrolled = window.scrollY > 300;
      }
    },
    created () {
     window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
}
   
    

}


</script>



<style>
.nav{
  /* position:sticky; */
  top: 0;
  width: 100%;
  height:3em;
  z-index: 2;
  transition: all .5s;

}

.it{
  color: #232323;
}
header {
  overflow: hidden;
  background-color:transparent;
  padding: 20px 40px;
}

.active{
    background-color: #3a3838;
    height:55px;
    padding: 5px;
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
