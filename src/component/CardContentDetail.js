import React from "react";
import PropTypes from "prop-types";
import { Card, Grid, Typography, CardContent } from "@mui/material";

const CardContentDetail = ({ title, desc }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography>{desc}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

CardContentDetail.propTypes = {
  desc: PropTypes.string,
  title: PropTypes.string,
};

export default CardContentDetail;
