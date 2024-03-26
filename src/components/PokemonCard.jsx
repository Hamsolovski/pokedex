const card = {
    padding: "2em",
    backgroundColor: "silver",
    border: "2px solid black",
}

const cardImg = {
    boxShadow: "0px 0px 5px silver",
    backgroundColor: "white",
    border: "2px solid black",
}

const cardText = {
    backgroundColor: "white",
    color: "black",
    fontSize: "2em",
    border: "2px solid black",
}


function PokemonCard({pokemon}) {
    return <figure style={card}>
        {pokemon.imgSrc ? <img style={cardImg} src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
        <figcaption style={cardText}>{pokemon.name}</figcaption>
    </figure>

}

export default PokemonCard;