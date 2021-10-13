export function getbayas() {
  return fetch("https://pokeapi.co/api/v2/berry")
    .then((response) => response.json())
    .then((data) => data);
}
