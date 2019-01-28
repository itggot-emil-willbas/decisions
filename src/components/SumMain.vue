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
      this.$el.querySelector('#main-sum').innerHTML="";
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
        //console.log(tabSummer)
        store.state.finalSums.push(tabSummer)
      })
      //console.log("Summerade tabsums 3",store.state.finalSums)
      
      // 2. Skapa divar med höjd = sumValue i %
      store.state.tabs.forEach((tab,index) => {
        //let newDiv = document.createElement(`<div style="height:${store.state.finalSums[index]}px;">${tab.text}</div>`);
        let newDiv = document.createElement('div');
        newDiv.style.transition = '3s all linear';
        newDiv.style.height = `0px`;
        let columnHeight = store.state.finalSums[index];
        newDiv.dataset.heightForAnimation = store.state.finalSums[index];
        let newDivSpan = document.createElement('span');
        newDivSpan.classList.add('span-text');
        // 3. Lägg ut dem i main
        newDiv.appendChild(newDivSpan);
        let myText = document.createTextNode(tab.values.text);
        newDivSpan.appendChild(myText);
        let main = this.$el.querySelector('#main-sum');
        let mainHeight = main.clientHeight;
        console.log("Height är ",mainHeight)
        main.appendChild(newDiv);
        // 4. Animation på stapel
        let maxTotalParamSum = (store.state.params.length) * 100;
        this.heightAnimatior(newDiv,columnHeight,mainHeight,maxTotalParamSum);
      })
      
      
    },
    heightAnimatior (pointsColumn,columnHeight,mainHeight,maxTotalParamSum) {
        console.log("max", maxTotalParamSum);
        let elem = pointsColumn;
        let heightCalulatedFromPercent = Math.floor((columnHeight/maxTotalParamSum) * mainHeight); 
        let height = 0;
        let id = setInterval(frame, 3);
        function frame() {
          if (height == heightCalulatedFromPercent) {
              clearInterval(id);
          } else {
              height++; 
              elem.style.height = height + 'px'; 
          }
        }
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
    background:$blue;
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
