import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getPokemon } from "../../api/pokemon";
import { Grid, CardHeader, Pagination, Card, CardContent } from "@mui/material";

const Pokemon = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [initialList, setInitialList] = useState(0);
  const history = useHistory();

  useEffect(() => {
    getDataPokemon(0);
  }, []);

  const getDataPokemon = (valueActual) => {
    setInitialList(valueActual);
    getPokemon(valueActual).then((data) => {
      console.log(data);
      setListPokemon(data.results);
    });
  };

  const changeListValue = (event, value) => {
    if (!value) return;
    let valueActual = (value - 1) * 30;
    if (initialList === valueActual) return;
    getDataPokemon(valueActual);
  };

  const redirection = (url) => {
    console.log(url, "url");
    history.push(url);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Lista de Pokemones</h1>
      </Grid>
      {listPokemon.map((item, i) => {
        let url =
          "/pokemon/" + item.url.split("/")[item.url.split("/").length - 2];
        return (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader
                onClick={() => redirection(url)}
                title={item.name}
                className="headerCard"
              />
            </Card>
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
          <CardContent>
            <Pagination
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
              count={38}
              onChange={changeListValue}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Pokemon;
