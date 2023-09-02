<script>
import {defineComponent} from 'vue'
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

export default defineComponent({
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions
  }
})
</script>

<template>

  <h1>Qui és aquest Pokemon?</h1>

  <PokemonPicture />
  <PokemonOptions />

</template>