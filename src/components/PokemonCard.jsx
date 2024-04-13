import PropTypes from "prop-types";

const card = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    margin: "0",
    padding: "2em",
    height: "400px",
    width: "400px",
    backgroundColor: "#990e05",
    border: "2px solid black",
}

const cardImg = {
    boxShadow: "0px 0px 5px black",
    backgroundColor: "white",
    height: "90%",
    border: "2px solid black",
}

const cardText = {
    backgroundColor: "white",
    boxShadow: "0px 0px 5px black",
    color: "black",
    fontSize: "1.5em",
    border: "2px solid black",
}

const noImg = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    height: "100%",
    width: "100%",
    fontSize: "2em",
    border: "2px solid black",
}

function PokemonCard({pokemon}) {
    return <figure style={card}>
        {pokemon.sprites.front_default ? <img style={cardImg} src={pokemon.sprites.front_default} alt={pokemon.name} /> : <p style={noImg}>???</p>}
        <figcaption style={cardText}>#{pokemon.id} {pokemon.name}</figcaption>
    </figure>

}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        sprites: PropTypes.shape({
            front_default: PropTypes.string,
            }),
        
    }).isRequired,
};

export default PokemonCard;