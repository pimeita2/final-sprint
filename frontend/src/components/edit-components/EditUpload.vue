<template>
  <section>
    <div class="edit-upload-section">
      <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked">
      <button class="uploadImg-btn" @click="onPickFile">Upload An Image</button>
    </div>
    <img :src="imageUrl" height="150">
  </section>
</template>

<script>
export default {
  data() {
    return {
        image:null,
        imageUrl:'',
        name:''
    };
  },
  methods: {
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
            //   console.log('this.imageUrl:' , this.imageUrl)
          })
          fileReader.readAsDataURL(files[0]) 
          this.image=files[0]
        console.log('this.imageUrl:' , this.image)

      },
  
  }
};
</script>

<style>
.edit-upload-section {
  display: block;
  position: fixed;
  left: 100px;
  top: 470px;
  width: 20%;
  height: 12%;
  overflow: auto;
  background-color: #4d4d4d;
  border-radius: 0px 10px 10px 0px;
}
.uploadImg-btn {
  padding: 10px;
  margin: 18px;
  border-radius: 10px;
  background: rgb(48, 173, 161);
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
}
.uploadImg-btn:hover {
  background: rgb(190, 183, 183);
  color: black;
}
</style>
