import getPokemonOptions, {getPokemons, getPokemonNames} from "@/helpers/getPokemonOptions";

describe('getPokemonOptions helpers', () => {

    test('ha de tornar un array de nombres', () => {

        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)

    })

    test('ha de retornar un array de 4 elements amb noms de Pokemon', async () => {

        const pokemons = await getPokemonNames([1, 2, 3, 4])

        expect(pokemons).toStrictEqual([
            {"id": 1, "name": "bulbasaur"},
            {"id": 2, "name": "ivysaur"},
            {"id": 3, "name": "venusaur"},
            {"id": 4, "name": "charmander"}
        ])

    })

    test('getPokemonOptions ha de retornar un array barrejat', async () => {

        const pokemons = await getPokemonOptions()

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])

    })

})