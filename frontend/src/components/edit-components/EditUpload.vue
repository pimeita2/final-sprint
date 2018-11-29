<template>
<section>
    <div class="edit-upload-section">
    <button class="uploadImg-btn">Upload An Image</button>
    </div>
</section>
    
</template>

<script>
export default {

}
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
    background-color:#4d4d4d;
    border-radius: 0px 10px 10px 0px;
}
.uploadImg-btn{
    padding: 10px;
    margin: 18px;
    border-radius: 10px;
    background:  rgb(48, 173, 161);
    border:none;
    color:white;
    font-size:15px;
    cursor: pointer;
    
}
.uploadImg-btn:hover{
    background: rgb(190, 183, 183);
    color:black;
}


</style>
