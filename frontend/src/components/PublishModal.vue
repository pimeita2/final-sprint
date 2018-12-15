

<template>
  <section>
    <div class="modal">
      <div class="modal-content animate" action>
        <div class="inner" style="padding:20%, width:100%">
          <span @click="close" class="close" title="Close Modal">&times;</span>
          <h6>Your Invitation has been created successfully</h6>
          <p>link to your Invitation:</p>
          <div class="url-container">
            <input type="text" v-model="this.url" class="url">
            <router-link target="_blank" :to="`/invite/prv/${inviteId}`">preview</router-link>
            <button @click="copyUrl()">Copy text</button>
          </div>
          <div v-if="userLogged">
              <router-link to="/userArea" >Personal Area</router-link>
          </div>
          <div v-if="!userLogged">
            <p>In order to Edit the invitation in the future please
              <a href="#" @click="showLogin=true">Login/SignUp</a>
            </p>
          </div>
        </div>
        <div>
          <user-login
            v-if="showLogin"
            @signup="showLogin=false;showSignup=true"
            @close="showLogin=false"
          ></user-login>
          <user-singup v-if="showSignup" @close="showSignup=false"></user-singup>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import templateService from "../services/templateService.js";
import userLogin from "@/components/UserLogin.vue";
import userSingup from "@/components/UserSignUp.vue";
export default {
  props: ["inviteId"],
  data() {
    return {
      // show: false,
      template: {},
      url: `http://localhost:8080/invite/prv/${this.inviteId}`,
      userLogged: false,
      showLogin: false,
      showSignup: false

    };
  },
  created() {
    let user = this.$store.getters.user;
    console.log("user logged in publish modal", user);
    if (user.isUserLogged) this.userLogged = true;
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    }
  },
  methods: {
    copyUrl() {
      const copyTxt = document.querySelector(".url");
      copyTxt.select();
      document.execCommand("copy");
      // alert("Copied the text: " + copyTxt.value);
    },
    close() {
      console.log("in publish modal clicked x");
      this.$emit("close");
    }
  },
  components: {
    userLogin,
    userSingup
  }
};
</script>



<style>
.inner {
  width: 100%;
  height: 80%;
}

.inner h6 {
  font-size: 40px;
  padding: 20px;
  font-family: Quicksand;
}
.inner p {
  font-size: 20px;
}

.url-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 60px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  border: 1px solid #888;
  width: 80%;
  /* height: 80%;; */
  padding: 30px;
  font-family: 25px;
}

.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}
.modal button {
    padding: 10px;
    background-color: #ffa751;
    border: 2px solid #ffa751;
    margin: 10px;
    font-family: cursive;
    letter-spacing: 1px;
}

.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.inner {
  width: 100%;
  height: 80%;
}

.content-modal {
  padding: 20%;
  font-size: 20px;
  background-color: mediumturquoise;
}
/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 800px) {
  .cancelbtn {
    width: 100%;
  }
  .modal-content {
    width: 70%;
  }
}
</style>