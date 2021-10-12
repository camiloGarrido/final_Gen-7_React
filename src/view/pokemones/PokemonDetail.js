import React, { useEffect, useState } from "react";
import { getPokemonDetail } from "../../api/pokemon";

const PokemonDetail = (props) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemonDetail(props.match.params.id).then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>pokemon list</h1>
    </div>
  );
};
export default PokemonDetail;
