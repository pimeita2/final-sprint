<template>
    <section>
        <div class="edit-section">
            <div class="text-edit">
                <h3 class="T-icon">T</h3>
                <h4 class="h4-text-edit">Text</h4>
            </div>

            <div class="bkground-edit">
                <p class="bkground-icon"> &#x25A8;</p>
                 <h4 class="h4-template-edit" >Bkground</h4>
            </div>

            <div class="template-edit">
                <p class="template-icon"> &#9704;</p>
                <h4 class="h4-template-edit" >Template</h4>
            </div>

            <div class="delete-edit">
                <i class="fa fa-trash"></i>
                <h4 class="h4-template-edit" >Delete</h4>
            </div>

            <div class="upload-edit">
                <i class="fa fa-cloud-upload"></i>
                <h4 class="h4-template-edit" >upload Img</h4>
            </div>


        </div>
    </section>
</template>

<script>
// import mainHeader from "@/components/MainHeader.vue"
export default {
    name:'edit-section',
    components:{
        // MainHeader,
    },


}
</script>

<style>
.edit-section{
    height: 100%;
    width: 100px;
    background: #4d4d4d;
    position: relative;
    color:rgb(182, 159, 159);
    border-radius:10px;   
}

.T-icon{
    font-family: 'Merriweather', serif;
    cursor: pointer;
    margin-bottom: 0;
    font-size:20px;
}

h4{
    font-size:15px;
    font-family: sans-serif;
    cursor: pointer;
    padding: 0;
    margin-top:2px;

}
h4:hover, h3:hover, .fa:hover, .bkground-icon:hover, .template-icon:hover{
    color:ghostwhite;

}
div{
    padding:5px;
}
.fa-trash{
    font-size:25px;
     cursor: pointer;
}
.fa-cloud-upload{
    font-size:25px;
     cursor: pointer;
}
.bkground-icon{
    margin: 0;
    font-size: 25px;
    cursor: pointer;
}
.template-icon{
    margin: 0;
    font-size: 25px;
     cursor: pointer;
}

</style>
