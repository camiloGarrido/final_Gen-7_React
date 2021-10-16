import React from "react";
import { Grid, CardHeader, Card, CardContent } from "@mui/material";

const NotFound = () => {
  return (
    <Grid container>
      <Grid item md={12}>
        <Card>
          <CardHeader title="Error 404" />
          <CardContent>
            <h3>URL no disponible</h3>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NotFound;
