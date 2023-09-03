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
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      console.log(this.pokemonArr)
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
})
</script>

<template>

  <h1>Qui és aquest Pokemon?</h1>

  <PokemonPicture :pokemonId="10" :showPokemon="false" />
  <PokemonOptions :pokemons="pokemonArr"/>

</template>