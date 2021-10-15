import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { Container } from "@mui/material";

import Header from "./component/Header";

const Home = React.lazy(() => import("./view/home/Home"));
const NotFound = React.lazy(() => import("./view/notFound/NotFound"));
const Pokemon = React.lazy(() => import("./view/pokemones/Pokemon"));
const PokemonDetail = React.lazy(() =>
  import("./view/pokemones/PokemonDetail")
);
const Bayas = React.lazy(() => import("./view/bayas/Bayas"));
const Attack = React.lazy(() => import("./view/attack/Attack"));
const BayasDetail = React.lazy(() => import("./view/bayas/BayasDetail"));
const Pokeballs = React.lazy(() => import("./view/pokeball/Pokeballs"));
const PokeballDetail = React.lazy(() =>
  import("./view/pokeball/PokeballDetail")
);
const AttackDetail = React.lazy(() => import("./view/attack/AttackDetail"));

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemones" component={Pokemon} />
            <Route exact path="/pokeballs" component={Pokeballs} />
            <Route exact path="/pokeball/:id" component={PokeballDetail} />
            <Route exact path="/berrys" component={Bayas} />
            <Route exact path="/berrys/:id" component={BayasDetail} />
            <Route exact path="/attack" component={Attack} />
            <Route exact path="/attack/:id" component={AttackDetail} />
            <Route exact path="/pokemon/:id" component={PokemonDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Container>
      <div className="divFooter"></div>
      <footer>ShadowLine R</footer>
    </>
  );
};

export default App;
