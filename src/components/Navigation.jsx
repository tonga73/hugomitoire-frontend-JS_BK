import React from "react";

import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";

const pages = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Bio",
    path: "/bio",
  },
  {
    name: "Libros",
    path: "/libros",
  },
  {
    name: "Media",
    path: "/media",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
];

export const Navigation = ({ vertical }) => {
  return (
    <Box display="flex" flexDirection={vertical ? "column" : undefined}>
      {pages.map((page, index) => (
        <Button
          key={index}
          component={Link}
          to={page.path}
          disableRipple
          size="large"
          sx={{
            my: 2,
            color: "rgba(255, 255, 255, 0.7)",
            display: "block",
            textTransform: "capitalize",
            textAlign: "center",
            "&:hover": {
              color: "rgba(255, 255, 255, 1)",
              bgcolor: "transparent",
            },
          }}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};
