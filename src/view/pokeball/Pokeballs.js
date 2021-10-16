import React, { useEffect, useState } from "react";
import {
  getPokeballCategory,
  getPokeballCategoryDetail,
} from "../../api/pokeball";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Card,
  CardHeader,
} from "@mui/material";
import { useHistory } from "react-router";

const Pokeballs = () => {
  const [categoryPokeball, setCategoryPokeball] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    let dataReturn = [];
    getPokeballCategory().then((data) => {
      for (let i = 0; i < data.categories.length; i++) {
        let item = data.categories[i];
        let f = data.categories.length - 1;
        getPokeballCategoryDetail(item.url).then((detail) => {
          dataReturn[i] = {
            url: item.url,
            name: item.name,
            items: detail.items,
          };
          if (i === f) {
            setCategoryPokeball(dataReturn);
          }
        });
      }
    });
  };

  const redirection = (url) => {
    history.push(url);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Categorías de Pokeball</h1>
      </Grid>
      {categoryPokeball.map((item, i) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <Card key={i} style={{ marginTop: "10px" }}>
              <CardHeader title={item.name} />
              <List>
                {item.items.map((pokeball) => {
                  let url =
                    "/pokeball/" +
                    pokeball.url.split("/")[pokeball.url.split("/").length - 2];
                  return (
                    <ListItem key={pokeball.name} disablePadding>
                      <ListItemButton onClick={() => redirection(url)}>
                        {pokeball.name}
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Pokeballs;
