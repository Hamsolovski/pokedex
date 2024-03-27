const pokenav = {
    padding: "16px",
    border: "2px solid black",
    width: "150px",
}

function NavBar({pokemonList, setPokemonIndex, pokemonIndex}) {
    const handleClick = (id) => {
        setPokemonIndex(id - 1)
      }

    pokemonIndex === 3 ? alert("Pika, pikaaa !!!") : null;
    
    return (<div style={pokenav}>
        {pokemonList.map((pokemon) => (
            <button key={pokemon.id} onClick={() => handleClick(pokemon.id)}>{pokemon.name}</button>
            ))
        }
    </div>)
}

export default NavBar;