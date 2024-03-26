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
    pokemonIndex > 0 ? setPokemonIndex(pokemonIndex - 1) : null;
  }
      if (pokemonIndex === 0) {
        return<div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <button onClick={handleClickNext}>Suivant</button>
        </div>
      } else if (pokemonIndex === pokemonList.length - 1) {
        return <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <button onClick={handleClickPrevious}>Précédent</button>
        </div>
      } else {
        return <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <button onClick={handleClickPrevious}>Précédent</button>
        <button onClick={handleClickNext}>Suivant</button>
        </div>
    }
}

export default App
