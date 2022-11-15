export const handleMultipleCheck = (event, values) => {
  let checked = values;

  if (event.target.checked) {
    checked = [...checked, event.target.value];
  } else {
    checked.splice(checked.indexOf(event.target.value), 1);
  }

  return checked;
};

export const isInThePast = (date) => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date < today;
};

export const localStorageUpdate = (array) => {
  localStorage.setItem(
    "pokemon",
    JSON.stringify({
      pokemonList: array,
    })
  );
};

export const getlocalStorage = () => {
  const listOfPokemon = JSON.parse(
    localStorage.getItem("pokemon")
  )?.pokemonList;

  return listOfPokemon ?? [];
};
