import React, { useEffect, useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Card,
  CardHeader,
  CardContent,
  Pagination,
} from "@mui/material";
import { getAttackData } from "../../api/attack";
import { useHistory } from "react-router";

const Attack = () => {
  const [listAttack, setListAttack] = useState([]);
  const [initialList, setInitialList] = useState(0);
  const history = useHistory();

  useEffect(() => {
    getListAttack(0);
  }, []);

  const getListAttack = (valueActual) => {
    setInitialList(valueActual);
    getAttackData(valueActual).then((data) => {
      console.log(data);
      setListAttack(data.results);
    });
  };

  const changeListValue = (event, value) => {
    if (!value) return;
    let valueActual = (value - 1) * 30;
    if (initialList === valueActual) return;
    getListAttack(valueActual);
    console.log(valueActual);
  };

  const redirection = (url) => {
    console.log(url, "url");
    history.push(url);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Movimientos de pokemones</h1>
      </Grid>

      {listAttack.map((item, i) => {
        let url =
          "/attack/" + item.url.split("/")[item.url.split("/").length - 2];
        return (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Card style={{ marginTop: "10px" }}>
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
              count={29}
              onChange={changeListValue}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Attack;
