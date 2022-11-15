import PropTypes from "prop-types";

export default function PokemonListJsx({ pokemonList, moveToPokemonDetail }) {
  return (
    <ul>
      {pokemonList.results.map((pokemon) => (
        <li
          onClick={() => moveToPokemonDetail(pokemon)}
          onKeyDown={() => moveToPokemonDetail(pokemon)}
          role="presentation"
          ata-testid="pokemon-list-id"
        >
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
}

PokemonListJsx.propTypes = {
  pokemonList: PropTypes.object.isRequired,
  moveToPokemonDetail: PropTypes.func.isRequired,
};
