import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";

import { selectBook, setBook } from "../store/slices/book.slice";

export const Navigation = ({ vertical }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const book = useSelector(selectBook);

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

  console.log(location);

  useEffect(() => {
    if (location.pathname !== `/libro/${book.id}`) {
      dispatch(setBook({}));
    }
  }, [location.pathname, dispatch]);

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
