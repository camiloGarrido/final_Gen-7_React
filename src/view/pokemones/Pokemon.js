import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemon } from "../../api/pokemon";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Pagination,
  Card,
  CardContent,
} from "@mui/material";

const Pokemon = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [initialList, setInitialList] = useState(0);
  const endList = 39;

  useEffect(() => {
    getDataPokemon(0, 39);
  }, []);

  const getDataPokemon = (valueActual) => {
    setInitialList(valueActual);
    getPokemon(valueActual, endList).then((data) => {
      console.log(data);
      setListPokemon(data.results);
    });
  };

  const changeListValue = (event, value) => {
    if (!value) return;
    let valueActual = (value - 1) * 40;
    if (initialList === valueActual) return;
    getDataPokemon(valueActual);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Lista de Pokemones</h1>
      </Grid>
      <Grid item xs={12}>
        <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
          <CardContent>
            <Pagination
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
              count={28}
              onChange={changeListValue}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} style={{ margin: "auto" }}>
        <Card>
          <List>
            {listPokemon.map((item, i) => {
              //https://pokeapi.co/api/v2/pokemon/10199/
              let url =
                "/pokemon/" +
                item.url.split("/")[item.url.split("/").length - 2];
              //console.log(item.url.split("/").length, url);
              return (
                <ListItem key={i} component="div" disablePadding>
                  <ListItemButton style={{ textAlign: "center" }}>
                    <Link
                      className="w-100"
                      to={url}
                      style={{ color: "#000", textDecoration: "none" }}
                    >
                      {item.name}
                    </Link>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
          <CardContent>
            <Pagination
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
              count={28}
              onChange={changeListValue}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Pokemon;
