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

// const sortOrder = (a, b) => {
//   return a.order - b.order;
// }

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const [pokemonList, setPokemonList] = useState([samplePokemon])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      .then(response => response.json())
      .then(data => {
        const tab = [];
        for (let i = 0; i < 151; i++) {
          fetch(data.results[i].url)
            .then(response => response.json())
            .then(data => {
              tab.push(data)
              tab.sort()
              setPokemonList(tab)
              })
            .catch(error => console.error(error));
        } 
      })
      .catch(error => console.error(error));
    }, 
    [])

    
  return (
    <div style={pokedex}>
      {pokemonList === null ? null : <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex}/>}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    
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
