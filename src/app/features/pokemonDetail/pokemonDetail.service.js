import api from "../../../utils/api";

const pokemonDetailApi = async ({ id }) => {
  const response = await api().get(`/pokemon/${id}/`);

  return response;
};

const pokemonDetailService = {
  pokemonDetailApi,
};

export default pokemonDetailService;
