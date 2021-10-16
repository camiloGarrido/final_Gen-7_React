import React, { useEffect, useState } from "react";
import { getbayas } from "../../api/bayas";
import { Grid, CardHeader, Pagination, Card, CardContent } from "@mui/material";
import { useHistory } from "react-router";

const Bayas = () => {
  const [listBerrys, setListBerrys] = useState([]);
  const [initialList, setInitialList] = useState(0);
  const endList = 19;
  const history = useHistory();

  useEffect(() => {
    getDataPokemon(0);
  }, []);

  const getDataPokemon = (valueActual) => {
    setInitialList(valueActual);
    getbayas(valueActual, endList).then((data) => {
      setListBerrys(data.results);
    });
  };

  const changeListValue = (event, value) => {
    if (!value) return;
    let valueActual = (value - 1) * 30;
    if (initialList === valueActual) return;
    getDataPokemon(valueActual);
  };

  const redirection = (url) => {
    history.push(url);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Lista de Bayas</h1>
      </Grid>

      {listBerrys.map((item, i) => {
        let url =
          "/berrys/" + item.url.split("/")[item.url.split("/").length - 2];
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
              count={3}
              onChange={changeListValue}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Bayas;
