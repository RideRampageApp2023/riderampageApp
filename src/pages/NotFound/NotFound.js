import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import "./styles.css";

function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h1" component="h1" color="primary" className="number">
        404
      </Typography>
      <Typography variant="h4" component="h2">
        ¡Página no encontrada!
      </Typography>
      <Link to="/" className="return">
        VOLVER
      </Link>
    </Box>

  );
}

export default NotFound;
