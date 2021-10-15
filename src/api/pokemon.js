export function getPokemon(start) {
  return fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=" + start + "&limit=30"
  )
    .then((response) => response.json())
    .then((data) => data);
}

export function getPokemonDetail(id) {
  return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => data);
}
