import PropTypes from "prop-types";

const card = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    margin: "0",
    padding: "2em",
    height: "500px",
    width: "500px",
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
    fontSize: "2em",
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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
    
};

function PokemonCard({pokemon}) {
    return <figure style={card}>
        {pokemon.imgSrc ? <img style={cardImg} src={pokemon.imgSrc} alt={pokemon.name} /> : <p style={noImg}>???</p>}
        <figcaption style={cardText}>#{pokemon.order} {pokemon.name}</figcaption>
    </figure>

}

export default PokemonCard;