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
import { getAttackDataId } from "../../api/attack";

const AttackDetail = (props) => {
  const id = props.match.params.id;
  const [move, setMove] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAttackDataId(id)
      .then((data) => {
        if (error) {
          setError(false);
        }
        setMove(data);
        console.log(data);
      })
      .catch((x) => setError(true));
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Link to="/attack">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>

          <h1>Movimiento Pokemon</h1>
        </Grid>
      </Grid>
      {move ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Nombre</Typography>
                <Typography>{move.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">ID</Typography>
                <Typography>{move.id}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Clase de daño</Typography>
                <Typography>{move.damage_class.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Tipo</Typography>
                <Typography>{move.type.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Precisión</Typography>
                <Typography>{move.accuracy}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Poder</Typography>
                <Typography>{move.power}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">PP</Typography>
                <Typography>{move.pp}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <SkeletonDinamic />
        </Grid>
      )}
    </>
  );
};

export default AttackDetail;
