import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { motion } from "framer-motion";

import {
  Container,
  Paper,
  ButtonGroup,
  Button,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FilterList } from "@mui/icons-material";

import { Loading } from "../components/Loading";

import { getBooks } from "../store/actions/books.actions";
import { selectBooks } from "../store/slices/books.slice";

const Books = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { books } = useSelector(selectBooks);

  useEffect(() => {
    dispatch(getBooks());
    // window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <Container>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, minmax(0, 1fr))"
        gap={1.5}
      >
        {books.length > 0 ? (
          books.map((book, index) => (
            <Box
              key={index}
              gridColumn="span 3"
              onClick={() => navigate(`/libro/${book.id}`)}
            >
              <Paper
                component={motion.img}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                elevation={3}
                src={import.meta.env.VITE_API_URL + book.cover.url}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>
          ))
        ) : (
          <Box
            display="grid"
            gridColumn="span 12"
            width="100%"
            sx={{ placeItems: "center" }}
          >
            <Loading />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Books;
