import { shallowMount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage.vue";
import { mockPokemons } from "../mocks/pokemons.mock";

describe('PokemonPage Component', () => {

    let wrapper

    beforeEach( () => {

        wrapper = shallowMount( PokemonPage )

    })

    test('ha de coincidir amb snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('ha de cridar mixPokemonArray al muntar', () => {

        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount( PokemonPage )

        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('ha de fer match amb el snapshot quan carreguen els pokemons', () => {

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('ha de mostrar els components de PokemonPicture i PokemonOptions', () => {

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const pictureWrapper = wrapper.find('pokemon-picture-stub')
        const optionsWrapper = wrapper.find('pokemon-options-stub')

        expect(pictureWrapper.exists()).toBeTruthy()
        expect(optionsWrapper.exists()).toBeTruthy()

        expect(pictureWrapper.attributes('pokemonid')).toBe("5")
        expect(optionsWrapper.attributes('pokemons')).toBeTruthy()

    })

    test('proves amb checkAnswer', async() => {

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(5)

        expect( wrapper.find('h2').exists() ).toBeTruthy()
        expect( wrapper.vm.showPokemon).toBe(true)
        expect( wrapper.find('h2').text() ).toBe(`Correcte! És ${mockPokemons[0].name}`)

        await wrapper.vm.checkAnswer(10)

        expect(wrapper.vm.message).toBe(`Ooops! Era ${mockPokemons[0].name}`)
    })

})