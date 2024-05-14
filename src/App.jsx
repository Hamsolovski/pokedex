import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'

const pokedex = {
  display: "flex",
  backgroundColor: "#990e05",
  width: "800px",
  height: "475px",
  border: "2px solid black",

};

const samplePokemon =
{
  id: 1,
  name: "Bulbizarre",
  order: 1,
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
}

function App() {
  const [pokemon, setPokemon] = useState(samplePokemon)
  const [filter, setFilter] = useState('bulbasaur')
  const [pokemonList, setPokemonList] = useState([samplePokemon])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.error(error));
    }, [])

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${filter}/`)
      .then((response) => response.json())
      .then(data => {
        console.log('data', data)
        setPokemon(data)
    })
      .catch(e => console.error(e))
  }, [filter])

    console.log('pokemonList', pokemonList)
    console.log('filter', filter)
    console.log('pokemon', pokemon)
    
  return (
    <div style={pokedex}>
      {pokemonList === null ? null : <NavBar pokemonList={pokemonList} setFilter={setFilter}/>}
      <PokemonCard pokemon={pokemon}/>
    
    </div>
  )





























  // useEffect(
  //   () => {
  //     alert("Salut à toi, dresseur Pokémon !")
  //   },
  //   []
  // );
}

export default App
