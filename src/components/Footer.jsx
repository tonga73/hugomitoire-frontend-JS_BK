import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Navigation } from "./Navigation";

export const Footer = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const location = useLocation();
  return (
    <Box
      id="footer"
      display={
        location.pathname === "/media/audio-video" ||
        location.pathname === "/media" ||
        location.pathname.startsWith("/libro")
          ? "none"
          : "flex"
      }
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        pt: 40,
        pb: 15,
        background:
          "linear-gradient(to top, rgba(6, 6, 6, 1) 0%, rgba(6, 6, 6, 1) 20%, rgba(6, 6, 6, 0.7) 45%, rgba(23, 23, 23, 0.5) 75%, rgba(23, 23, 23, 0.3) 90%, rgba(23, 23, 23, 0.1) 90%, rgba(23, 23, 23, 0) 100%)",
      }}
    >
      <Box>
        <Navigation vertical={!isNonMobile} />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          variant="h3"
          noWrap
          component="a"
          href=""
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "Cinzel",
            fontWeight: 500,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Hugo Mitoire
        </Typography>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            display: { xs: "flex", md: "none" },
            fontFamily: "Cinzel",
            fontWeight: 500,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Hugo Mitoire
        </Typography>
        <Typography variant="caption">
          © Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};
