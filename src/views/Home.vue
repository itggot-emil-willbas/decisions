<template>
  <div class="home">
    <nav id="nav-tabs">
      <a href="#">+</a>
      <a v-for="tab in tabs" v-bind:key="tab.id" href="#">{{tab.values.text}}</a>
      <a href="#">SUM</a>
    </nav>
    <main></main>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js'

export default {
  name: 'home',
  components: {
  },
  computed: {
    vuexArray () {
      return store.state.vuexArray;
    },
    tabs () {
      return store.state.tabs;
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/css/variables.scss';

#home {
  height:90vh;
  background:rgba($color: #e9e9e9, $alpha: 1.0);
  display:flex;
  flex-direction:column;
}
nav#nav-tabs {
  height:100px;
  display: flex;
    a {
      display:block;
      flex:1;
      border-radius: 45px 15px 0px 0px;
      display:flex;
      justify-content: center;
      align-items:center;
      margin: 0px 5px;
      border-left:$border;
      border-top:$border;
      border-right:$border;
      text-decoration:none;
      }
}
main {
  height: 80vh;
  background-color:lightgray;
}
</style>

