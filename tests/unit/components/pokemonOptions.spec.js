import { shallowMount } from "@vue/test-utils";
import pokemonOptions from "@/components/PokemonOptions.vue";
import { mockPokemons } from "../mocks/pokemons.mock";

describe('PokemonOptions Component', () => {

    let wrapper

    beforeEach( () => {
        wrapper = shallowMount(pokemonOptions, {
            props: {
                pokemons: mockPokemons
            }
        })
    })

    test('Ha de coincidir amb la captura', () => {

        //console.log(wrapper.html())
        //toMatchInlineSnapshot
        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Ha de mostrar les 4 opcions correctament', () => {

        const liTags = wrapper.findAll('li')

        expect(liTags.length).toBe(4)

        expect( liTags[0].text() ).toBe('Pikachu')
        expect( liTags[1].text() ).toBe('Charmander')
        expect( liTags[2].text() ).toBe('Venusaur')
        expect( liTags[3].text() ).toBe('Mew')

    })

    test("Ha d'admetre 'selectionPokemon' amb els respectius paràmetres al fer click", () => {

        const [li1, li2, li3, li4 ] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selectionPokemon').length).toBe(4)
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([5])
        expect(wrapper.emitted('selectionPokemon')[1]).toEqual([10])
        expect(wrapper.emitted('selectionPokemon')[2]).toEqual([15])
        expect(wrapper.emitted('selectionPokemon')[3]).toEqual([20])

    })

})