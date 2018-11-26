import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabSums:[],
    finalSums:[],
    sumIsActive:false,
    vuexArray:[1,2,3],
    numberOfTabs:3,
    activeTab:0,
    tabs:[
      {
        values:
          {
            id:0,
            text:'Första',
          }
      },
      {
        values:
          {
            id:1,
            text:'Andra',
          }
      },
      {
        values:
          {
            id:2,
            text:'Tredje',
          }
      }
    ],
    numberOfparams:4,
    params:[
      {
        text:'Pris',
        values:[25,50,75]
      },
      {
        text:'Hästkrafter',
        values:[25,50,75]
      },
      {
        text:'Skatt',
        values:[25,50,75]
      },
      {
        text:'"Oh, yeah"-faktor',
        values:[25,50,75]
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
  getSums: state => {
    let sumArray =  [];
    state.params.forEach(param => {
      param.values.forEach(value => {
        sumArray.push(value);
      });
    });

    return sumArray;
  },
  getSumArrays: state => {
    let sumArrays = [];
    state.params.forEach(param => {
      sumArrays.push(param.values);
    });
    return sumArrays;
  }
}
});
