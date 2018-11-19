<template>
  <main>
    <section 
      v-for="(param, index) in params" 
      v-bind:key="param.id">
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

    </section>
    <section id="add-prop">
      <a href="#" @click="newProp">
        +
      </a>
    </section>
  </main>
</template>

<script>
import store from '@/store'

export default {
  name: 'MainComponent',
  computed: {
    tabs () {
      return store.state.tabs;
    },
    params () {
      return store.state.params;
    },
    activeTab () {
      return store.state.activeTab
    }
  },
  methods: {
  newProp () {
    let word = prompt('Please enter prop name');
      //let nextObjektNumber = (store.state.tabs.length + 1)
      let numberOfValuesItems = store.state.params[0].values.length;
      console.log('numberOfValuesItems: ',numberOfValuesItems);
      numberOfValuesItems++;
      console.log('numberOfValuesItems senare: ',numberOfValuesItems);
      let newValueArray = [];
      for (let i = 0; i < numberOfValuesItems; i++) {
        newValueArray.push(50);
      }
      console.log(newValueArray);

      let newObj = {
        text:word,
        values:newValueArray 
      }
      store.state.params.forEach(element => {
        element.values.push(50);
      });
      store.state.params.push(newObj)
  }
  }
} 
</script>

<style scoped lang="scss">

@import '@/css/variables.scss';

main {
  min-height: 80vh;
  background-color:darkgray;
  display: flex;
  flex-direction:column;
  section {
    display: flex;
    height:100px;
    border:$border;
    .left-box-pName {
      flex-basis: 20%;
      /*text-align: center;*/
      display: flex;
      span {
        margin:auto;
      }
    }
    .right-box-pValue {
      flex-basis: 80%;
      text-align: center;
      display: flex;
      input {
        margin:auto;
        width:80%;
      }
      span {
        margin:auto;
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
    }
  }  
}
</style>
