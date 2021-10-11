import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./view/home/Home";
import NotFound from "./view/notFound/NotFound";
import Header from "./component/Header";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
