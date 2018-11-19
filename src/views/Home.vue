<template>
  <div class="home">
    <nav id="nav-tabs">
      <a href="#">+</a>
      <a 
        v-for="(tab,index) in tabs" 
        v-bind:key="tab.id" 
        href="#"
        @click="changeActiveTab"
        v-bind:id="('tab' + index)"
        >{{tab.values.text}}</a>
      <a href="#">SUM</a>
    </nav>
    <main-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import MainComponent from '@/components/MainComponent'

export default {
  name: 'home',
  components: {
    MainComponent
  },
  methods: {
    changeActiveTab(e) {
      console.log(e.target.id)
      let id = e.target.id;
      store.state.activeTab = parseInt(id.slice(-1));
      let tabsToClear = document.querySelectorAll('#nav-tabs a');
      tabsToClear.forEach(element => {
        element.classList.remove('active')
      });
      e.target.classList.add('active')

    }
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
      };
    a.active {
      background-color:lightgreen;
    }
}
main {
  height: 80vh;
  background-color:lightgray;
}
</style>

