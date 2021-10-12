import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemon } from "../../api/pokemon";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Pagination,
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
    <Grid container>
      <Grid item xs={12}>
        <h1>Pokemon List</h1>
      </Grid>
      <Grid item xs={12} md={6}>
        <List>
          {listPokemon.map((item, i) => {
            //https://pokeapi.co/api/v2/pokemon/10199/
            let url =
              "/pokemon/" + item.url.split("/")[item.url.split("/").length - 2];
            //console.log(item.url.split("/").length, url);
            return (
              <ListItem key={i} component="div" disablePadding>
                <ListItemButton>
                  <Link className="w-100" to={url}>
                    {item.name}
                  </Link>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Pagination count={28} onChange={changeListValue} />
      </Grid>
    </Grid>
  );
};
export default Pokemon;
