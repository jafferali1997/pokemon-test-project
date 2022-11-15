import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { localStorageUpdate, getlocalStorage } from "../../utils/helpers";
import PATH from "../../utils/path";

export default function Index() {
  const [userPokemon, setUserPokemon] = useState(getlocalStorage());
  const history = useNavigate();

  const releasePokemon = (pokemon) => {
    const newArray = userPokemon.filter((poke) => poke.id !== pokemon.id);
    setUserPokemon(newArray);
    localStorageUpdate(newArray);
  };

  const moveToPokemonDetail = (id) => {
    history(PATH.POKEMON_DETAIL.replace(":id", id));
  };

  return (
    <ul>
      <table>
        <thead>
          <tr className=" " style={{ borderBottomWidth: "1px" }}>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">NickName</th>
            <th scope="col">Release</th>
          </tr>
        </thead>
      </table>
      {userPokemon.length > 0 ? (
        userPokemon.map((pokemon) => (
          <div>
            <table className="table">
              <tbody>
                <tr>
                  <th style={{ fontWeight: "inherit" }} scope="row">
                    {pokemon.id}
                  </th>
                  <th
                    className="link-view"
                    style={{ fontWeight: "inherit" }}
                    onClick={() => {
                      moveToPokemonDetail(pokemon.id);
                    }}
                    onKeyDown={() => moveToPokemonDetail(pokemon.id)}
                  >
                    {pokemon.name}
                  </th>

                  <td>{pokemon.nickName}</td>
                  <td>
                    <Button onClick={() => releasePokemon(pokemon)}>
                      Release
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <li>User has not caught any pokemon</li>
      )}
    </ul>
  );
}
