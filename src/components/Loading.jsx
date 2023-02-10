import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Loading = () => {
  return (
    <Box
      gridColumn="span 12"
      height="75vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        animation: "animate 2s infinite",
        "@keyframes animate": {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <Typography variant="h5">Cargando...</Typography>
    </Box>
  );
};
