import React from "react";
import { Link } from "react-router-dom";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Box, AppBar } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <AppBar
        style={{
          background:
            "linear-gradient(0deg, rgba(255,178,178,1) 0%, rgba(255,0,0,1) 100%)",
          padding: "5px",
        }}
        position="static"
      >
        <div style={{ display: "flex", padding: "20px 0px" }}>
          <Link className="link" to="/">
            <CatchingPokemonIcon />
          </Link>
          <Link className="link" to="/pokemones">
            Pokemon
          </Link>
          <Link className="link" to="/berrys">
            Bayas
          </Link>
        </div>
      </AppBar>
    </Box>
  );
};

export default Header;
