<template>
<div>
  <main id="main-sum">
    
  </main>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'SumMain',
  computed: {
    getSumArrays ()  {
      return  this.$store.getters.getSumArrays;
    } 
  },
  mounted(){
    this.showResults(); 
  },
  methods: {
    showResults () {
      store.state.tabSums = [];
      store.state.finalSums = [];
      // 0. Tomma arrayer i tab sums
      for (let index = 0; index < store.state.tabs.length; index++) {
        store.state.tabSums.push([])
      }
      // 1. Hämta props-arrayer och summera dem
      let sums = this.getSumArrays
        sums.forEach(array1 => {
          //Gör om ev str till ints,array1)
          let mappedArray = array1.map(x => parseInt(x))
          for (let i = 0; i < store.state.tabs.length; i++) {
             store.state.tabSums[i].push(mappedArray[i]);
          }
        });
      //Summera
      store.state.tabSums.forEach(tabSum => {
        let tabSummer = tabSum.reduce((a, b) => a + b, 0);
        console.log(tabSummer)
        store.state.finalSums.push(tabSummer)
      })
      console.log("Summerade tabsums 3",store.state.finalSums)
      
      // 2. Skapa divar med höjd = sumValue i %
      store.state.tabs.forEach((tab,index) => {
        //let newDiv = document.createElement(`<div style="height:${store.state.finalSums[index]}px;">${tab.text}</div>`);
        let newDiv = document.createElement('div');
        newDiv.style.transition = '3s all linear';
        newDiv.style.height = `${store.state.finalSums[index]}px`
        let newDivSpan = document.createElement('span');
        newDivSpan.classList.add('span-text');
        newDiv.appendChild(newDivSpan);
        let myText = document.createTextNode(tab.values.text);
        newDivSpan.appendChild(myText);
        let main = this.$el.querySelector('#main-sum');
        main.appendChild(newDiv);
      })
      // 3. Lägg ut dem i main
    }
  }

}
</script>

<style lang="scss">

@import '@/css/variables.scss';


#main-sum {
  display:flex;
  flex-direction:row-reverse;
  justify-content:space-around;
  align-items:flex-end;
  border:$border;
  margin-top: 100px;
  min-height: 80vh;
  div {
    background:$green;
    color:white;
    display: flex;
    align-items: center;
    height:0px;
    transition: 3s all linear;
    span {
      transform: rotate(-90deg);
    }
  }
}

</style>
