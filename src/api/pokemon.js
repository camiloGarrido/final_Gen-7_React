export function getPokemon(start, end) {
  return fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=" + start + "&limit=" + end
  )
    .then((response) => response.json())
    .then((data) => data);
}

export function getPokemonDetail(id) {
  return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => data);
}
