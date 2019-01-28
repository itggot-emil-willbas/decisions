<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
  </div>
</template>

<style lang="scss">
@import '@/css/variables.scss';
body {
  /*background-image:url("./assets/cheap_diagonal_fabric.png");*/
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:auto;
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  background:white;
  }
body{
  margin:0;
  font-weight:bold;
  
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: white;
    }
  }
  height: 10vh;
  background-color: rgba($color: $blue, $alpha: 1.0)
}
@media screen and (max-width:800px) {
  #app {
    width: 100vw;
  }
}
@media screen and (min-width:801px) {
  #app {
    max-width: 70vw;
  }
}


</style>
