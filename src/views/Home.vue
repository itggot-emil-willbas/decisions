<template>
  <div class="home">
    <nav id="nav-tabs">
      <a id="new-tab" href="#" @click="newTab">+</a>
      <a id="delete-tab" href="#" @click="deleteTab">-</a>
      <a 
        v-for="(tab,index) in tabs" 
        v-bind:key="tab.id" 
        href="#"
        @click="changeActiveTab"
        v-bind:id="('tab' + index)"
        >{{tab.values.text}}</a>
      <a id="sum-tab" href="#" @click="changeActiveTab">SUM</a>
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
      
      store.state.sumIsActive = false;
      //console.log(e.target.id)
      let id = e.target.id;
      if (id != "sum-tab"){
      store.state.activeTab = parseInt(id.slice(-1));
      }
      let tabsToClear = document.querySelectorAll('#nav-tabs a');
      tabsToClear.forEach(element => {
        element.classList.remove('active')
      });
      e.target.classList.add('active')
      console.log(e.target)
      if (id == "sum-tab"){
      store.state.sumIsActive = true;
      }
      console.log('Nu är activeTab: ', store.state.activeTab);
    },
    newTab(){
      let word = prompt('Please enter tab name');
      if ((word === "") || word == null){
        return false
      }else{
      let nextObjektNumber = (store.state.tabs.length + 1)
      let newObj = {
        values:
          {
            id:nextObjektNumber,
            text:word,
            deletable:false
          }
      }
      store.state.tabs.push(newObj)
      store.state.params.forEach(element => {
        element.values.push(50);
      });
      }
    },
    deleteTab(){
      console.log("deletar",store.state.activeTab);
       store.state.tabs.splice(store.state.activeTab,1)
      store.state.params.forEach(element => {
        element.values.splice(store.state.activeTab,1);
      });
    
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
  left:15vw;
  width:70vw;
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
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      font-weight:bold;
      color:$blue;
      &:hover {
        color:white;
        background:$blue;
      }
      };
    a.active {
      background-color:$blue;
      color:white;
    }
    a#new-tab{
      order:1000;
    }
    a#delete-tab{
      order:999;
    }
    a#new-tab,a#delete-tab{
      font-size:4em;
      font-weight: 100;
    }
    a#sum-tab{
      order:-1;
    }
}

</style>

