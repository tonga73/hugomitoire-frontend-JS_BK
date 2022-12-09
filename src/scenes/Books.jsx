import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  Container,
  Paper,
  ButtonGroup,
  Button,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { FilterList } from "@mui/icons-material";

import { motion } from "framer-motion";

import { getBooks } from "../store/actions/books.actions";
import { selectBooks } from "../store/slices/books.slice";

export const Books = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);

  const fetchAllBooks = async () => {
    try {
      const books = await dispatch(getBooks());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllBooks();
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, minmax(0, 1fr))"
        gap={1.5}
      >
        {books ? (
          books.map((book, index) => (
            <Box
              key={index}
              gridColumn="span 3"
              onClick={() =>
                navigate(
                  `/libros/${book.titulo.toLowerCase().replaceAll(" ", "-")}`
                )
              }
            >
              <Paper
                component={motion.img}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                elevation={3}
                src={book.imagen}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>
          ))
        ) : (
          <Box
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
            Cargando...
          </Box>
        )}
      </Box>
    </Container>
  );
};
