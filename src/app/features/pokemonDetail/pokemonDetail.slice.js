import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pokemonDetailService from "./pokemonDetail.service";

const initialState = {
  pokemonDetail: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Login user
export const getPokemonDetail = createAsyncThunk(
  "pokemonDetail/getPokemonDetail",
  async ({ id, callBackMessage }, thunkAPI) => {
    try {
      const response = await pokemonDetailService.pokemonDetailApi({
        id,
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

export const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.pokemonDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonDetail.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(getPokemonDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pokemonDetail = action.payload;
      })
      .addCase(getPokemonDetail.rejected, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
        state.isError = true;
        state.pokemonDetail = null;
      });
  },
});

export const { reset } = pokemonDetailSlice.actions;

export default pokemonDetailSlice.reducer;
