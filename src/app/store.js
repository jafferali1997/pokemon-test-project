import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "./features/pokemonList/pokemonList.slice";
import pokemonDetailReducer from "./features/pokemonDetail/pokemonDetail.slice";

const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    pokemonDetail: pokemonDetailReducer,
  },
});

export default store;
