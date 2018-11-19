<template>
  <main>
    <section 
      v-for="param in params" 
      v-bind:key="param.id">
    <div class="left-box-pName">
      <span>{{param.text}}:</span>
    </div>
    <div class="right-box-pValue">
      <span>{{param.values[activeTab]}}:</span>
      <input type="range" name="range" id="range" v-bind:value="param.values[activeTab]">
    </div>

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
  }
} 
</script>

<style scoped lang="scss">

@import '@/css/variables.scss';

main {
  height: 80vh;
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
}
</style>
