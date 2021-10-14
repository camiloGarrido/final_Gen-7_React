import React, { useEffect, useState } from "react";
import { getbayas } from "../../api/bayas";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Pagination,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

const Bayas = () => {
  const [listBerrys, setListBerrys] = useState([]);
  const [initialList, setInitialList] = useState(0);
  const endList = 19;

  useEffect(() => {
    getDataPokemon(0);
  }, []);

  const getDataPokemon = (valueActual) => {
    setInitialList(valueActual);
    getbayas(valueActual, endList).then((data) => {
      console.log(data);
      setListBerrys(data.results);
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
            {listBerrys.map((item, i) => {
              //https://pokeapi.co/api/v2/pokemon/10199/
              let url =
                "/berrys/" +
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
              count={4}
              onChange={changeListValue}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Bayas;
