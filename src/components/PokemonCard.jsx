const card = {
    padding: "2em",
    backgroundColor: "gray",
    border: "2px solid black",
}

const cardImg = {
    boxShadow: "0px 0px 5px gray",
    backgroundColor: "white",
    border: "2px solid black",
}

const cardText = {
    backgroundColor: "white",
    color: "black",
    fontSize: "2em",
    border: "2px solid black",
}

function PokemonCard() {
    return <figure style={card}>
        <img style={cardImg} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbizarre" />
        <figcaption style={cardText}>Bulbizarre</figcaption>
    </figure>
}

export default PokemonCard;