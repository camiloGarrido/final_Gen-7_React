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
        console.log(data);
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

          <h1>Detalles del Pokemon</h1>
        </Grid>
      </Grid>
      {berry ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Imagenes" />
              <CardContent className="text-center">
                {/* //{getImgPokemon()} */}
              </CardContent>
            </Card>
          </Grid>
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
                <Typography variant="h6">Peso</Typography>
                <Typography>{berry.weight}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Altura</Typography>
                <Typography>{berry.height}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Experiencia base</Typography>
                <Typography>{berry.base_experience}</Typography>
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
