import PropTypes from "prop-types";

const card = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  margin: "0",
  padding: "2em",
  height: "90%",
  width: "400px",
  backgroundColor: "#990e05",
  border: "2px solid black",
};

const cardImg = {
  boxShadow: "0px 0px 5px black",
  backgroundColor: "white",
  height: "90%",
};

const cardText = {
  backgroundColor: "white",
  color: "black",
  fontSize: "1.5em",
};

const noImg = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "white",
  color: "black",
  height: "100%",
  width: "100%",
  fontSize: "2em",
};

const cardDetails = {
  backgroundColor: "white",
  color: "black",
  borderTop: "20px solid #990e05",
  fontSize: "0.8em",
};

const cardStats = {
  listStyle: "none",
  padding: "0",
};

function PokemonCard({ pokemon }) {
  return (
    <figure style={card}>
      {pokemon.sprites.front_default ? (
        <img
          style={cardImg}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      ) : (
        <p style={noImg}>???</p>
      )}
      <figcaption style={cardText}>
        #{pokemon.id} {pokemon.name}
      </figcaption>
      <div style={cardDetails}>
        <p>
          Types :{" "}
          {pokemon.types
            ? pokemon.types.map((element) => <span> {element.type.name} </span>)
            : null}
        </p>
        <ul style={cardStats}>
          Stats :{" "}
          {pokemon.stats
            ? pokemon.stats.map((stat) => (
                <li>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))
            : null}
        </ul>
      </div>
    </figure>
  );
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
