<template>
  <sum-main v-if="sumIsActive"></sum-main>
  <main v-else>
    <section
      
      v-for="(param, index) in params" 
      v-bind:key="param.id"
      v-bind:id="index">
    <div class="left-box-pName">
      <span>{{param.text}}:</span>
    </div>
    <div class="right-box-pValue">
      <span>{{param.values[activeTab]}}:</span>
      <input 
        type="range" 
        v-bind:name="('range' + index)" 
        v-model="param.values[activeTab]">
      
    </div>
    <i class="delete-prop" @click="deleteProp">X</i>

    </section>
    <section id="add-prop">
      <a href="#" @click="newProp">
        +
      </a>
      <!--<p>{{getSumArrays}}</p>-->
    </section>
        
  </main>
  
</template>

<script>
import store from '@/store'
import SumMain from '@/components/SumMain'


export default {
  name: 'MainComponent',
  components:  {
    SumMain
  },
  data () {
    return {
      name:'Emil',
      age:25
    }
  },
  computed: {
    sumIsActive ()  {
      return store.state.sumIsActive;
    },
    tabs () {
      return store.state.tabs;
    },
    params () {
      return store.state.params;
    },
    activeTab () {
      return store.state.activeTab
    },
    getSums ()  {
      return  this.$store.getters.getSums;
    },  
    getSumArrays ()  {
      return  this.$store.getters.getSumArrays;
    }  
  },
  methods: {
  deleteProp(e) {
      //what id had the prop?
      let paramId = parseInt(e.target.parentElement.id)
      console.log("Target: ",typeof(paramId))

      //let numberOfValuesItems = store.state.params[0].values.length;
      //numberOfValuesItems --
     
      store.state.params.splice(paramId,1);
      console.log(store.state.params)
       },
  newProp () {
    let word = prompt('Please enter prop name');
      if ((word === "") || word == null){
        return false
      }else{
      let numberOfValuesItems = store.state.params[0].values.length;
      console.log('numberOfValuesItems: ',numberOfValuesItems);
      numberOfValuesItems++;
      console.log('numberOfValuesItems senare: ',numberOfValuesItems);
      let newValueArray = [];
      for (let i = 0; i < (numberOfValuesItems -1); i++) {
        newValueArray.push(50);
      }
      let newObj = {
        text:word,
        values:newValueArray 
      }
  
      store.state.params.push(newObj)
      }
  }
  
  }
  
} 
</script>

<style scoped lang="scss">

@import '@/css/variables.scss';

main {
  border:$border;
  margin-top: 100px;
  min-height: 80vh;
  display: flex;
  flex-direction:column;
  section {
    display: flex;
    height:100px;
    border-bottom:$border;
    .left-box-pName {
      flex-basis: 20%;
      /*text-align: center;*/
      display: flex;
      span {
        margin:auto;
        color:$gray;

      }
    }
    .right-box-pValue {
      flex-basis: 70%;
      text-align: center;
      display: flex;
      input {
        margin:auto;
        width:80%;
      }
      span {
        margin:auto;
        color:$gray;
      } 
    }
    i.delete-prop{
      color:white;
      background-color:pink;
      flex-basis: 10%;
      align-items:center;
      justify-content: center;
      display: flex;
      font-size: 1.5em;
      font-style: normal;
      &:hover {
        background-color:lightpink;
      }
    }
  }
  section#add-prop{
    display:flex;
    flex-direction:column;
    justify-items: center;
    align-content:center;
    a{
      flex:1;
      display:flex;
      align-items:center;
      justify-content: center;
      text-decoration:none;
      font-size:1.7em;
      color:$blue;
      &:hover{
        color:white;
        background-color:$blue;
      }
    }
  }  
}
</style>
