import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {
  getPokemonDetail,
  reset,
} from "../../app/features/pokemonDetail/pokemonDetail.slice";
import ErrorMessage from "../../components/ErrorMessage/index.jsx";
import { LoaderCenter } from "../../components/Loader/Loader.jsx";
import ModalToAddNickName from "./ModelToAddNickName";
import PokemonDetailJsx from "./PokemonDetailJsx";
import { localStorageUpdate, getlocalStorage } from "../../utils/helpers";

export default function Index() {
  const POKEMON_DETAIL = useSelector((state) => state.pokemonDetail);
  const [userPokemon, setUserPokemon] = useState(getlocalStorage());
  const [modal, setModal] = useState(false);
  const [nickName, setNickName] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetail({ id }));
    return () => dispatch(reset());
  }, []);

  const catchPokemon = () => {
    setModal(true);
  };

  const pokemonCaught = () => {
    setModal(false);
    const newArray = [
      ...userPokemon,
      { id, name: POKEMON_DETAIL.pokemonDetail.name, nickName },
    ];
    setUserPokemon(newArray);
    localStorageUpdate(newArray);
  };

  return (
    <>
      {POKEMON_DETAIL.isError && (
        <ErrorMessage message={POKEMON_DETAIL.isError} />
      )}
      {POKEMON_DETAIL.isLoading && <LoaderCenter />}
      {POKEMON_DETAIL.isSuccess && (
        <>
          <PokemonDetailJsx pokemonDetail={POKEMON_DETAIL.pokemonDetail} />
          {!userPokemon.find((pokemonId) => pokemonId.id === id) && (
            <Button onClick={catchPokemon}>Catch</Button>
          )}
          <ModalToAddNickName
            modal={modal}
            setModal={setModal}
            setNickName={setNickName}
            pokemonCaught={pokemonCaught}
          />
        </>
      )}
    </>
  );
}
