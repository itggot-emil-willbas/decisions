<template>
  <div class="home">
    <nav id="nav-tabs">
      <a id="new-tab" href="#" @click="newTab">+</a>
      <a 
        v-for="(tab,index) in tabs" 
        v-bind:key="tab.id" 
        href="#"
        @click="changeActiveTab"
        v-bind:id="('tab' + index)"
        >{{tab.values.text}}</a>
      <a id="sum-tab" href="#">SUM</a>
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
    },
    newTab(){
      let word = prompt('Please enter tab name');
      let nextObjektNumber = (store.state.tabs.length + 1)
      let newObj = {
        values:
          {
            id:nextObjektNumber,
            text:word
          }
      }
      store.state.tabs.push(newObj)
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
  position:fixed;
  top:0;
  left:24.6vw;
  width:50vw;
  height:100px;
  background:white;
  display: flex;
  flex-direction: row-reverse;
    a {
      display:block;
      flex:1;
      border-radius: 45px 15px 0px 0px;
      display:flex;
      justify-content: center;
      align-items:center;
      margin:0px 15px 0px 0px;
      border-left:$border;
      border-top:$border;
      border-right:$border;
      text-decoration:none;
      };
    a.active {
      background-color:lightgreen;
    }
    a#new-tab{
      order:1000;
    }
    a#sum-tab{
      order:-1;
    }
}

</style>

