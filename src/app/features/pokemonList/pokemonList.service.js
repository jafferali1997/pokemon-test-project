import api from "../../../utils/api";

const pokemonListApi = async (userData) => {
  const response = await api().get(
    `/pokemon?offset=${userData.offset}&limit=${userData.limit}`
  );

  return response;
};

const pokemonListService = {
  pokemonListApi,
};

export default pokemonListService;
