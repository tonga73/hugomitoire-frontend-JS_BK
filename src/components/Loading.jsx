import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Loading = ({ message, noAnimation, noDots }) => {
  return (
    <Box
      height="75vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        animation: noAnimation ? "" : "animate 2s infinite",
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
      <Typography variant="h5">{`${message || "Cargando"} ${
        noDots ? "" : "..."
      }`}</Typography>
    </Box>
  );
};
