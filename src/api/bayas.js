export function getbayas(offset) {
  return fetch("https://pokeapi.co/api/v2/berry?offset=" + offset + "&limit=30")
    .then((response) => response.json())
    .then((data) => data);
}

export function getBayasId(id) {
  return fetch("https://pokeapi.co/api/v2/berry/" + id)
    .then((response) => response.json())
    .then((data) => data);
}
