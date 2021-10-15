export function getAttackData(offset) {
  return fetch("https://pokeapi.co/api/v2/move?offset=" + offset + "&limit=30")
    .then((response) => response.json())
    .then((data) => data);
}

export function getAttackDataId(id) {
  return fetch("https://pokeapi.co/api/v2/move/" + id)
    .then((response) => response.json())
    .then((data) => data);
}
