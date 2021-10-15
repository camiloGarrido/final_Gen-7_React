import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { Container } from "@mui/material";
import Home from "./view/home/Home";
import NotFound from "./view/notFound/NotFound";
import Header from "./component/Header";
import Pokemon from "./view/pokemones/Pokemon";
import PokemonDetail from "./view/pokemones/PokemonDetail";
import Bayas from "./view/bayas/Bayas";
import Attack from "./view/attack/Attack";
import BayasDetail from "./view/bayas/BayasDetail";
import Pokeballs from "./view/pokeball/Pokeballs";
import PokeballDetail from "./view/pokeball/PokeballDetail";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemones" component={Pokemon} />
          <Route exact path="/pokeballs" component={Pokeballs} />
          <Route exact path="/pokeball/:id" component={PokeballDetail} />
          <Route exact path="/berrys" component={Bayas} />
          <Route exact path="/berrys/:id" component={BayasDetail} />
          <Route exact path="/attack" component={Attack} />
          <Route exact path="/pokemon/:id" component={PokemonDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
