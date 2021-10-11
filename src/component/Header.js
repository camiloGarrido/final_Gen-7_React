import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/"> Home</Link>
      <Link to="404"> 404</Link>
    </>
  );
};

export default Header;
