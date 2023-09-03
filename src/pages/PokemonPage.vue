<script>
import {defineComponent} from 'vue'
import PokemonOptions from "@/components/PokemonOptions.vue"
import PokemonPicture from "@/components/PokemonPicture.vue"

import getPokemonOptions from '@/helpers/getPokemonOptions'

//console.log(getPokemonOptions())

export default defineComponent({
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(selectedId) {

      this.showPokemon = true
      this.showAnswer = true

      if (selectedId === this.pokemon.id) {
        this.message = `Correcte! És ${this.pokemon.name}`
      } else {
        this.message = `Ooops! Era ${this.pokemon.name}`
      }
    },
    newGame(){
      this.pokemonArr = []
      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null

      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
})
</script>

<template>

  <h1 v-if="!pokemon">Esperi, sisplau...</h1>

  <div v-else>
    <h1>Qui és aquest Pokemon?</h1>

    <PokemonPicture
        :pokemonId="pokemon.id"
        :showPokemon="showPokemon"
    />
    <PokemonOptions
        :pokemons="pokemonArr"
        @selectionPokemon="checkAnswer"
    />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">
        Nou joc
      </button>
    </template>

  </div>


</template>