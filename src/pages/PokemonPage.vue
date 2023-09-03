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
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[rndInt]
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

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr"/>
  </div>


</template>