<template>
    <header class="nav">
        <router-link  to="/" class=" routers logo">Templ<span class="it">it</span></router-link>
         <div class="header-right">
            <router-link class="routers btn" to="/contact" >Contact Us </router-link>
            <router-link class="routers btn" to="/about" >About</router-link>
            <router-link class="routers btn" to="/template" >template</router-link>
           <a class="active login-btn routers" @click="showLogin=true" >Login/Sign Up</a>
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
    }
   
    

}


</script>



<style>
.nav{
  position:sticky;
  top: 0;
  width: 100%;

}

.it{
  color: greenyellow
}
header {
  overflow: hidden;
  /* background-color: #75B8C8; */
  background: linear-gradient(to right, #556270, #4ECDC4); 
  padding: 20px 40px;
}

header .routers {
  float: left;
  color: rgb(252, 235, 204);
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
}

header .routers.logo {
  font-family: 'Satisfy', cursive;
  font-size: 2rem;

}

header .routers.btn:hover{
  /* color:#75be; */
	animation: text-shadow-pop-tr 0.5s both;
}

/* header .routers:hover {
  background-color: #ddd;
  color: black;
} */

/* header .routers.active {
  color: white;
} */

.header-right {
  float: right;
}

.logo:hover{
  text-shadow: 0px 0px 10px black;
}

.login-btn{
  cursor: pointer;
  border: 2px solid yellowgreen;
  background: yellowgreen;
  border-radius: 15px;
}

.login-btn:hover{
  animation: heartbeat 1.5s ease-in-out infinite both;
}


@keyframes text-shadow-pop-tr {
  0% {
    text-shadow: 0 0 #222222, 0 0 #222222, 0 0 #222222, 0 0 #222222, 0 0 #222222, 0 0 #222222;
    transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px -1px #222222, 2px -2px #222222, 3px -3px #222222, 4px -4px #222222, 5px -5px #222222, 6px -6px #222222;
    transform: translateX(-4px) translateY(4px);
  }
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
</style>
