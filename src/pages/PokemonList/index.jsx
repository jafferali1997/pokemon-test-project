import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getPokemonList,
  reset,
} from "../../app/features/pokemonList/pokemonList.slice";
import PATH from "../../utils/path";
import Pagination from "../../components/Pagination/index.jsx";
import ErrorMessage from "../../components/ErrorMessage/index.jsx";
import { LoaderCenter } from "../../components/Loader/Loader.jsx";
import PokemonListJsx from "./PokemonListJsx";

export default function Index() {
  const history = useNavigate();
  const POKEMON_LIST = useSelector((state) => state.pokemonList);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonList({ offset: 0, limit: 15 }));
    return () => dispatch(reset());
  }, []);

  const moveToPokemonDetail = (pokemon) => {
    history(
      PATH.POKEMON_DETAIL.replace(
        ":id",
        pokemon.url.split("/")[pokemon.url.split("/").length - 2]
      )
    );
  };

  const pageChange = (pageNumber) => {
    dispatch(
      getPokemonList({
        offset: (pageNumber - 1) * 15,
        limit: 15,
      })
    );
    setPage(pageNumber - 1);
  };
  return (
    <>
      {POKEMON_LIST.isError && <ErrorMessage message={POKEMON_LIST.isError} />}
      {POKEMON_LIST.isLoading && <LoaderCenter />}
      {POKEMON_LIST.isSuccess && !POKEMON_LIST.isLoading && (
        <>
          <PokemonListJsx
            pokemonList={POKEMON_LIST.pokemonList}
            moveToPokemonDetail={moveToPokemonDetail}
          />
          {POKEMON_LIST.pokemonList && (
            <Pagination
              pageChange={pageChange}
              page={page}
              totalNumber={
                POKEMON_LIST.pokemonList?.count
                  ? POKEMON_LIST.pokemonList.count / 15
                  : 0
              }
            />
          )}
        </>
      )}
    </>
  );
}
