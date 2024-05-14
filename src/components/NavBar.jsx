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
    height: "600px",
    overflowY: "scroll",
}

const img = {
    height: "20px",
}

function NavBar({pokemonList, setFilter}) {
    const handleClick = (value) => {
        setFilter(value)
      }

    // pokemonIndex === 3 ? alert("Pika, pikaaa !!!") : null;
    return (<div style={pokenav}>
        <div style={navscreen}>
        {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name} onClick={() => handleClick(pokemon.name)}><img style={img} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/${index+1}.png`} /> {index+1} - {pokemon.name}</button>
            ))
        }
        </div>
    </div>)
}

NavBar.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    setFilter: PropTypes.func,
};

export default NavBar;