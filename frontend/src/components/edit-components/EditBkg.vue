<template>
  <section>
    <div class="edit-bkg-section">
    <input class="bkg-picker" type="color" v-model="bgc" @change="handleChange"/>
      
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
        console.log('this.imageUrl:' , this.image)
      }

  }
};
</script>

<style>
.edit-bkg-section {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    position: fixed;
    left: 100px;
    top: 0px;
    width: 100%;
    height: 7%;
    overflow: auto;
    background-color: rgb(256,256,256);
    border-radius: 0px 10px 10px 0px;
    border-bottom: 1px solid rgb(190, 190, 190);
}
.bkg-picker {
  border-radius: 3px;
  cursor: pointer;
  margin: 10px 35px;
  height: 25px;
  width: 25px;
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
  margin: 4px;
  border-radius: 10px;
  background: #504f4f;
  border: none;
  color: rgb(182, 159, 159);
  font-size: 15px;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
}
.uploadImg-btn:hover {
  background: rgb(190, 183, 183);
  color: white;
}

</style>

