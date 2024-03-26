import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

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
  }
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
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && <button onClick={handleClickPrevious}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickNext}>Suivant</button>}
    </div>

  )
}

export default App
