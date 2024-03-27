import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    name: "Salamèche",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Carapuce",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew"
  },
]

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  }

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  }


  return (
    <div>
      <NavBar pokemonIndex={pokemonIndex} handleClickNext={handleClickNext} handleClickPrevious={handleClickPrevious} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>

  )
}

export default App
