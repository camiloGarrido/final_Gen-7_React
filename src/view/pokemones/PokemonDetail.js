import {
  Card,
  Grid,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPokemonDetail } from "../../api/pokemon";
import SkeletonDinamic from "../../component/SkeletonDinamic";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

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
          <Link to="/pokemones">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>

          <h1>Detalles del Pokemon</h1>
        </Grid>
      </Grid>
      {pokemon ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Imagenes" />
              <CardContent className="text-center">
                {getImgPokemon()}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Nombre</Typography>
                <Typography>{pokemon.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">ID</Typography>
                <Typography>{pokemon.id}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Peso</Typography>
                <Typography>{pokemon.weight}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Altura</Typography>
                <Typography>{pokemon.height}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Experiencia base</Typography>
                <Typography>{pokemon.base_experience}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Tipo</Typography>
                <Typography>
                  {pokemon.types.map((item) => {
                    return (
                      <span style={{ marginRight: "5px" }} key={item.slot}>
                        {item.type.name}
                      </span>
                    );
                  })}
                </Typography>
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
