<template>
  <section>
    <!-- <div class="edit-upload-section">
      <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked " >

      <button class="uploadImg-btn" @click="onPickFile">Upload An Image</button>
    </div> -->
  </section>
</template>

<script>
// export default {
//   data() {
//     return {
//         // image:'',
//         // imageUrl:'',
//         // name:'',
//         // bgcImage:""
//     };
//   },
//   methods: {
//       onPickFile(){
//           this.$refs.fileInput.click()
//       },
//       onFilePicked(event){
//           const files = event.target.files;
//           let filename = files[0].name;
//           if(filename.lastIndexOf('.')<= 0){
//               return alert ('please add a valid file!')
//           }
//           const fileReader = new FileReader()
//           fileReader.addEventListener('load',() =>{
//               this.imageUrl = fileReader.result
//                this.$emit("styleUpdate", {
//                 field: "background",
//                 css: { backgroundImage: 'url('+this.imageUrl+')' }
//       });
           
//           })
//           fileReader.readAsDataURL(files[0]) 
//           this.image=files[0]
//         console.log('this.imageUrl:' , this.image)
//       }
//   }
// };
</script>

<style>

.uploadImg-btn {
  padding: 10px;
  margin: 4px;
  border-radius: 10px;
  background: #504f4f;
  border: none;
  color: rgb(182, 159, 159);
  font-size: 15px;
  cursor: pointer;
}
.uploadImg-btn:hover {
  background: rgb(190, 183, 183);
  color: white;
}
</style>
