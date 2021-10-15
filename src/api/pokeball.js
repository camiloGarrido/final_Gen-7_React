export function getPokeballCategory() {
  return fetch("https://pokeapi.co/api/v2/item-pocket/3/")
    .then((response) => response.json())
    .then((data) => data);
}

export function getPokeballCategoryDetail(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

export function getPokeballDetail(id) {
  return fetch("https://pokeapi.co/api/v2/item/" + id)
    .then((response) => response.json())
    .then((data) => data);
}
