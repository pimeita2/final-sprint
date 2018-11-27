<template>
<section>
    <header>
        <router-link to="/" class="logo">Templit</router-link>
         <div class="header-right">
            <router-link to="/contact" >Contact Us</router-link>
            <router-link to="/about" >About</router-link>
            <router-link to="/template" >template</router-link>
           <router-link  class="active" to="/login" >Login/Sign Up</router-link>        
          </div>
    </header>

</section>
</template>

<style>
header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

header a.logo {
  font-family: 'Satisfy', cursive;
  font-size: 2rem;

}

header a:hover {
  background-color: #ddd;
  color: black;
}

header a.active {
  background-color: rgb(55, 201, 186);
  color: white;
}

.header-right {
  float: right;
}


</style>
