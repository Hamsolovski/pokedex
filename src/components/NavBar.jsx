import PropTypes from "prop-types";

const pokenav = {
    padding: "16px",
    border: "2px solid black",
    width: "350px",
    
}

const navscreen = {
    padding: "16px",
    border: "2px solid black",
    backgroundColor: "white",
    height: "400px",
    overflowY: "scroll",
}

const img = {
    height: "20px",
}

function NavBar({pokemonList, setPokemonIndex}) {
    const handleClick = (num) => {
        setPokemonIndex(num)
      }

    // pokemonIndex === 3 ? alert("Pika, pikaaa !!!") : null;
    return (<div style={pokenav}>
        <div style={navscreen}>
        {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name} onClick={() => handleClick(index)}><img style={img} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/${index+1}.png`} /> {pokemon.id} - {pokemon.name}</button>
            ))
        }
        </div>
    </div>)
}

NavBar.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    setPokemonIndex: PropTypes.func,
};

export default NavBar;