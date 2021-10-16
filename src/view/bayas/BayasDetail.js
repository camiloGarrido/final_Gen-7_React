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
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Nombre</Typography>
                <Typography>{berry.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">ID</Typography>
                <Typography>{berry.id}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Tamaño</Typography>
                <Typography>{berry.size}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">suavidad</Typography>
                <Typography>{berry.smoothness}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Firmeza</Typography>
                <Typography>{berry.firmness.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Poder de regalo natural</Typography>
                <Typography>{berry.natural_gift_power}</Typography>
              </CardContent>
            </Card>
          </Grid>
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
