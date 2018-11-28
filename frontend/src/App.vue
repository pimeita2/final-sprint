<template>
  <div id="app">
    <div id="nav"></div>
    
    <router-link to="/template/1">First</router-link> |
    <router-link to="/template/2">Second</router-link> |
    <router-link to="/template/3">Third</router-link>

    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
