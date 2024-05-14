import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'

const pokedex = {
  display: "flex",
  backgroundColor: "#990e05",
  width: "800px",
  height: "700px",
  border: "2px solid black",

};

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [filter, setFilter] = useState('bulbasaur')
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.error(error));
    }, [])

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${filter}/`)
      .then((response) => response.json())
      .then(data => 
        setPokemon(data))
      .catch(e => console.error(e))
  }, [filter])
    
  return (
    <div style={pokedex}>
      {pokemonList === null ? null : <NavBar pokemonList={pokemonList} setFilter={setFilter}/>}
      {pokemon ? <PokemonCard pokemon={pokemon}/> : <p>Welcome to my pokedex !</p>}
    
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
