<template>
  <section>
    <div class="edit-bkg-section">
      <h4 class="bkg-title">Background Color:</h4>
      <input class="bkg-picker" type="color" v-model="bgc" @change="handleChange" />
    
    <hr class="hr-box">
      <div class="edit-upload-section">
      <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked " >

      <button class="uploadImg-btn" @click="onPickFile">Upload Background Image</button>
    </div>
      
    
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bgc: "#ff9a90",
      image:'',
      imageUrl:'',
      name:'',
      bgcImage:""
    };
  },
 
  methods: {
    handleChange() {
      this.$emit("styleUpdate", {
        field: "background",
        css: { backgroundColor: this.bgc }
      });
    },
          onPickFile(){
          this.$refs.fileInput.click()
      },
      onFilePicked(event){
          const files = event.target.files;
          let filename = files[0].name;
          if(filename.lastIndexOf('.')<= 0){
              return alert ('please add a valid file!')
          }
          const fileReader = new FileReader()
          fileReader.addEventListener('load',() =>{
              this.imageUrl = fileReader.result
               this.$emit("styleUpdate", {
                field: "background",
                css: { backgroundImage: 'url('+this.imageUrl+')' }
      });
           
          })
          fileReader.readAsDataURL(files[0]) 
          this.image=files[0]
        // console.log('this.imageUrl:' , this.image)
      },
      
   

  }
};
</script>

<style>
.edit-bkg-section {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: column; 
  width:200px;
  height: 215px;
  overflow: auto;
  background-image: linear-gradient(to top, #f3f3f3, #ffffff, #f3f3f3 ); 
  border-radius: 10px;
}

.bkg-picker {
  border-radius: 3px;
  cursor: pointer;
  margin: 10px auto;
  height: 50px;
  width: 50px;
}

.close-edit-bkg-section {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 15px;
    font-weight: bold;
}

.uploadImg-btn {
  padding: 10px;
  margin: 20px;
  width: 80%;
  border-radius: 10px;
  background: #504f4f;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
}

.uploadImg-btn:hover {
  background: rgb(190, 183, 183);
  color: white;
}

.bkg-title{
  margin-top: 10px;
  font-family: 'Quicksand'
}

.hr-box{
  margin:0;
}
</style>

