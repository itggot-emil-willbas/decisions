import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vuexArray:[1,2,3],
    numberOfTabs:3,
    activeTab:'',
    tabs:[
      {
        values:
          {
            id:0,
            text:'Första',
            value:50
          }
      },
      {
        values:
          {
            id:1,
            text:'Andra',
            value:25
          }
      },
      {
        values:
          {
            id:2,
            text:'Tredje',
            value:75
          }
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
