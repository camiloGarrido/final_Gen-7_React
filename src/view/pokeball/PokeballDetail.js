import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPokeballDetail } from "../../api/pokeball";
import SkeletonDinamic from "../../component/SkeletonDinamic";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const PokeballDetail = (props) => {
  const id = props.match.params.id;
  const [pokeball, setPokeball] = useState(null);

  useEffect(() => {
    getPokeball();
  }, []);

  const getPokeball = () => {
    getPokeballDetail(id).then((data) => {
      setPokeball(data);
    });
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Link to="/pokeballs">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>

          <h1>Detalles de la Pokeball</h1>
        </Grid>
      </Grid>
      {pokeball ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Nombre</Typography>
                <Typography>{pokeball.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">ID</Typography>
                <Typography>{pokeball.id}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Categoria</Typography>
                <Typography>{pokeball.category.name}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Descripción</Typography>
                <Typography>
                  {
                    pokeball.flavor_text_entries.filter(
                      (item) => item.language.name === "es"
                    )[0].text
                  }
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Imagen</Typography>
                <img src={pokeball.sprites.default} alt={pokeball.name} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <SkeletonDinamic />
        </Grid>
      )}
    </>
  );
};

export default PokeballDetail;
