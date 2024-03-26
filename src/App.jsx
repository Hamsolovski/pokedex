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
      name: "Mew"
  }
]

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]}/>
    </div>
  )
}

export default App
