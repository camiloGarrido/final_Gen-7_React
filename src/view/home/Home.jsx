import React from "react";
import { Grid } from "@mui/material";
import imgPokemon from "./../../resources/img/pikachu.gif";
import imgBaya from "./../../resources/img/baya.gif";
import imgAtaque from "./../../resources/img/ataques.gif";
import CardImage from "../../component/CardImage";

const Home = () => {
  return (
    <Grid container spacing={2} marginBottom="10px">
      <Grid item xs={12}>
        <h1>Bienvenido </h1>
      </Grid>
      <Grid item xs={12}>
        <CardImage
          img={imgPokemon}
          link="/pokemones"
          title="Pokemon"
          parrafo="Sección para visualizar los pokemones disponibles"
        />
      </Grid>
      <Grid item xs={12}>
        <CardImage
          img={imgBaya}
          link="/berrys"
          title="Bayas"
          parrafo="Sección para visualizar las bayas disponibles"
        />
      </Grid>
      <Grid item xs={12}>
        <CardImage
          img={imgAtaque}
          link="/attack"
          title="Ataques"
          parrafo="Sección para visualizar los ataques disponibles"
        />
      </Grid>
    </Grid>
  );
};

export default Home;
