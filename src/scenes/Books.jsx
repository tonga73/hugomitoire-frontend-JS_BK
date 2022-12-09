import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Paper,
  ButtonGroup,
  Button,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FilterList } from "@mui/icons-material";

import { motion } from "framer-motion";

export const Books = () => {
  const navigate = useNavigate();
  const [booksData, setBooksData] = useState([]);

  const getData = async () => {
    await axios("http://localhost:8000/books").then((response) => {
      const { data } = response;

      setBooksData(data.data);
    });
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Grid container spacing={1}>
        {booksData !== undefined
          ? booksData.map((book, index) => (
              <Grid
                onClick={() =>
                  navigate(
                    `/libros/${book.titulo.toLowerCase().replaceAll(" ", "-")}`
                  )
                }
                item
                key={index}
                xs={6}
                sm={3}
              >
                <Paper
                  component={motion.img}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  elevation={3}
                  src={book.imagen}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Grid>
            ))
          : "Loading"}
      </Grid>
    </Container>
  );
};
