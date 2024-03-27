import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'

const pokedex = {
  display: "flex",
  backgroundColor: "#990e05",
  width: "700px",
  border: "2px solid black",

};

const pokemonList = [
  {
    id: 1,
    order: 1,
    name: "Bulbizarre",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    id: 2,
    order: 4,
    name: "Salamèche",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 3,
    order: 7,
    name: "Carapuce",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: 4,
    order: 25,
    name: "Pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id: 5,
    order: 151,
    name: "Mew"
  },
]

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(
    () => {
      alert("Salut à toi, dresseur Pokémon !")
    },
    []
  );


  return (
    <div style={pokedex}>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex}/>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>

  )
}

export default App
