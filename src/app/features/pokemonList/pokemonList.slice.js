import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pokemonListService from "./pokemonList.service";

const initialState = {
  pokemonList: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Login user
export const getPokemonList = createAsyncThunk(
  "pokemonList/getPokemonList",
  async ({ offset, limit, callBackMessage }, thunkAPI) => {
    try {
      const response = await pokemonListService.pokemonListApi({
        offset,
        limit,
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.message);
    } catch (error) {
      callBackMessage("error", error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.pokemonList = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonList.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pokemonList = action.payload;
      })
      .addCase(getPokemonList.rejected, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
        state.isError = true;
        state.pokemonList = null;
      });
  },
});

export const { reset } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
