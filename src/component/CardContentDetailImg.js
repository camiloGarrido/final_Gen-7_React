import React from "react";
import PropTypes from "prop-types";
import { Card, Grid, Typography, CardContent } from "@mui/material";

const CardContentDetailImg = ({ title, url, titleUrl }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <img src={url} alt={titleUrl} />
        </CardContent>
      </Card>
    </Grid>
  );
};

CardContentDetailImg.propTypes = {
  url: PropTypes.string,
  titleUrl: PropTypes.string,
  title: PropTypes.string,
};

export default CardContentDetailImg;
