import React, { useEffect, useState } from "react";
import { getBayasId } from "../../api/bayas";

import {
  Card,
  Grid,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import SkeletonDinamic from "../../component/SkeletonDinamic";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import CardContentDetail from "../../component/CardContentDetail";

const BayasDetail = (props) => {
  const id = props.match.params.id;
  const [berry, setBerry] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBayasId(id)
      .then((data) => {
        if (error) {
          setError(false);
        }
        setBerry(data);
      })
      .catch((x) => setError(true));
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Link to="/berrys">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>

          <h1>Detalles de la baya</h1>
        </Grid>
      </Grid>
      {berry ? (
        <Grid container spacing={2}>
          <CardContentDetail title="Nombre" desc={berry.name} />
          <CardContentDetail title="ID" desc={berry.id} />
          <CardContentDetail title="Tamaño" desc={berry.size} />
          <CardContentDetail title="Suavidad" desc={berry.smoothness} />
          <CardContentDetail title="Firmeza" desc={berry.firmness.name} />
          <CardContentDetail
            title="Poder de regalo natural"
            desc={berry.natural_gift_power}
          />
        </Grid>
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <Grid item xs={12}>
          <SkeletonDinamic />
        </Grid>
      )}
    </>
  );
};

export default BayasDetail;
