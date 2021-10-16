import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPokeballDetail } from "../../api/pokeball";
import SkeletonDinamic from "../../component/SkeletonDinamic";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import CardContentDetail from "../../component/CardContentDetail";
import CardContentDetailImg from "../../component/CardContentDetailImg";

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
          <CardContentDetail title="Nombre" desc={pokeball.name} />
          <CardContentDetail title="ID" desc={pokeball.id} />
          <CardContentDetail title="Categoria" desc={pokeball.category.name} />
          <CardContentDetail
            title="Descripción"
            desc={
              pokeball.flavor_text_entries.filter(
                (item) => item.language.name === "es"
              )[0].text
            }
          />
          <CardContentDetailImg
            title="Imagen"
            url={pokeball.sprites.default}
            titleUrl={pokeball.name}
          />
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
