function NavBar({pokemonList, setPokemonIndex}) {
    const handleClick = (id) => {
        setPokemonIndex(id - 1)
      }
    
    return (<div>
        {pokemonList.map((pokemon) => (
            <button key={pokemon.id} onClick={() => handleClick(pokemon.id)}>{pokemon.name}</button>
            ))
        }
    </div>)
}

export default NavBar;