import React from "react";
import { Card, CardContent, CardMedia, Box } from "@mui/material";
import { useHistory } from "react-router-dom";

const CardImage = (props) => {
  const { img, link, title, parrafo } = props;
  let history = useHistory();
  const redirection = (url) => {
    history.push(url);
  };

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: "100%", maxWidth: "400px" }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <h3>{title}</h3>
          <p>{parrafo}</p>
          <button className="btn-primary" onClick={() => redirection(link)}>
            ir a la página
          </button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardImage;
