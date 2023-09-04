import pokemonApi from "@/api/pokemonApi";

describe('pokemonApi', () => {

    test("axios ha d'estar configurat amb l'api de pokemon", () => {

        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')

    })


})