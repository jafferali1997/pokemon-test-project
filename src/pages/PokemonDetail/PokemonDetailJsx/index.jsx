import PropTypes from "prop-types";

export default function PokemonDetailJsx({ pokemonDetail }) {
  return (
    <ul>
      <li>{pokemonDetail.name}</li>
      <li>{pokemonDetail.stats[0].stat?.name}</li>
      <li>{pokemonDetail.moves[0].move?.name}</li>
      <li>{pokemonDetail.abilities[0].ability?.name}</li>
      <li>{pokemonDetail.base_experience}</li>
    </ul>
  );
}

PokemonDetailJsx.propTypes = {
  pokemonDetail: PropTypes.object.isRequired,
};
