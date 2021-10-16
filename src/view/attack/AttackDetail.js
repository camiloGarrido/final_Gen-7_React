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
import CardContentDetail from "../../component/CardContentDetail";

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
          <CardContentDetail title="Nombre" desc={move.name} />
          <CardContentDetail title="ID" desc={move.id} />
          <CardContentDetail
            title="Clase de daño"
            desc={move.damage_class.name}
          />
          <CardContentDetail title="Tipo" desc={move.type.name} />
          <CardContentDetail title="Precisión" desc={move.accuracy} />
          <CardContentDetail title="Poder" desc={move.type.name} />
          <CardContentDetail title="PP" desc={move.pp} />
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
