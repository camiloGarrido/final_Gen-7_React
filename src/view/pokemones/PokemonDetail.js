import { Card, Grid, Typography, CardContent, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPokemonDetail } from "../../api/pokemon";
import SkeletonDinamic from "../../component/SkeletonDinamic";

const PokemonDetail = (props) => {
  const id = props.match.params.id;
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPokemonDetail(id)
      .then((data) => {
        if (error) {
          setError(false);
        }
        setPokemon(data);
        console.log(data);
      })
      .catch((x) => setError(true));
  }, []);

  const getImgPokemon = () => {
    let img = [];
    let i = 0;

    for (const imgPoke in pokemon.sprites) {
      if (
        pokemon.sprites[imgPoke] &&
        "other" !== imgPoke &&
        "versions" !== imgPoke
      ) {
        img.push(<img key={i} src={pokemon.sprites[imgPoke]} alt={imgPoke} />);
        i++;
      }
    }
    return img.map((x) => x);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <h1>Detalles del Pokemon</h1>
        </Grid>
      </Grid>
      {pokemon ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography>Nombre</Typography>
                <Typography variant="h6">{pokemon.name}</Typography>
                <Divider />
                <Typography>Peso</Typography>
                <Typography variant="h6">{pokemon.weight}</Typography>
                <Divider />
                <Typography>Altura</Typography>
                <Typography variant="h6">{pokemon.height}</Typography>
                <Divider />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent className="text-center">
                {getImgPokemon()}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <Grid item xs={12}>
          <SkeletonDinamic />
        </Grid>
      )}
    </>
  );
};
export default PokemonDetail;
