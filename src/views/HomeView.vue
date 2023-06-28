<script>
import Champion from '../components/Champion.vue'
import champions from '../assets/champions'
import compositions from '../assets/compositions'
import Composition from '../components/Composition.vue'

let choosedChampions = []
let score_comp = []

export default {
  components: {
    Champion,
    Composition
  },
  data() {
    return {
      champions,
      choosedChampions,
      score_comp
    }
  },
  methods: {
    addChoseedChamp(data) {
      this.choosedChampions.push(data)
    },
    removeFromChoosedChampions(index) {
      this.choosedChampions.splice(index, 1)
    },
    refreshCompositionsMatch() {
      this.score_comp = []
      for (let i = 0; i < compositions.length; i++) {
        let score = 0
        for (let j = 0; j < compositions[i].champions.length; j++) {
          for (let k = 0; k < this.choosedChampions.length; k++) {
            if (compositions[i].champions[j] === this.choosedChampions[k].name) {
              score++
            }
          }
        }
        const comp_score = {
          score,
          name: compositions[i].comp,
          composition: compositions[i].champions
        }
        this.score_comp.push(comp_score)
      }
      let filtred_score_comp = this.score_comp.filter((comp) => comp.score > 0)
      let sorted_score_comp = filtred_score_comp.sort((a, b) => b.score - a.score)
      this.score_comp = sorted_score_comp
    }
  }
}
</script>

<template>
  <div class="container mx-auto grid grid-cols-12 gap-1 border-solid border-4 p-4">
    <Champion
      @my-champions="addChoseedChamp"
      @refresh-composition="refreshCompositionsMatch"
      v-for="(champ, index) in champions"
      :name="champ.name"
      :img="champ.img"
      :cost="champ.cost"
      :index="index"
    />
  </div>
  <div class="container mx-auto mt-10 border-solid border-4 p-4">
    <h1 class="text-center font-bold mb-4">SUA COMPOSIÇÃO ATUAL</h1>
    <div class="container mx-auto grid grid-cols-12" v-if="choosedChampions.length > 0">
      <Champion
        @refresh-composition="refreshCompositionsMatch"
        @click="removeFromChoosedChampions(index)"
        v-for="(champ, index) in choosedChampions"
        :name="champ.name"
        :img="champ.img"
        :cost="champ.cost"
        :index="index"
      >
      </Champion>
    </div>
  </div>

  <div class="container mx-auto mt-10 border-solid border-4 p-4">
    {{ score_comp }}
  </div>
</template>
