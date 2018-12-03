

<template>
  <section>
    <div class="modal">
      <div class="modal-content animate" action>
        <div>
          <span @click="$emit('close')" class="close" title="Close Modal">&times;</span>
          <h6>Your Invitation has been created successfully</h6>
          <p>link to you Invitation:</p>
          <div class="unEditable-invite">url
              <button @click="showPreview">Preview</button>
              <uneditable-template v-if="show"></uneditable-template>
          </div>
          <button>Go back to Editting</button>
          <button>More templates</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import uneditableTemplate from '@/components/UneditableTemplate.vue'
export default {
data(){
return{
    show:false
}
},
methods: {
    showPreview(){
         this.show=true;
    }
},
components:{
   uneditableTemplate
}
}
</script>



<style>
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
  width: 40%;
  /* height: 80%;; */
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
button {
  background-color: #888;
  border: 2px solid black;
  margin: 10px;
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