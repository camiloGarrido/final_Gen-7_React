import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./view/home/Home";
import NotFound from "./view/notFound/NotFound";
import Header from "./component/Header";
import Pokemon from "./view/pokemones/Pokemon";
import PokemonDetail from "./view/pokemones/PokemonDetail";
import { Container } from "@mui/material";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemones" component={Pokemon} />
          <Route exact path="/pokemon/:id" component={PokemonDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
