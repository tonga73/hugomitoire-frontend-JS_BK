import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import FileOpenIcon from "@mui/icons-material/FileOpen";

import { Loading } from "../components/Loading";
import { BookDetails } from "../components/BookDetails";

import { selectBook } from "../store/slices/book.slice";

import { getBook } from "../store/actions/book.actions";

const Book = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [bookChapters, setBookChapters] = useState([]);

  const book = useSelector(selectBook);

  useEffect(() => {
    dispatch(getBook(params.id));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box width="100%">
      {Object.keys(book).length > 0 ? (
        <>
          <Box
            sx={{
              backgroundImage: `url(${
                import.meta.env.VITE_API_URL + book.secondaryImage.url
              })`,
              backgroundPosition: "center 60%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Box sx={{ bgcolor: "rgba(23, 23, 23, 0.9)" }}>
              <Box
                component={Container}
                disableGutters
                display="grid"
                gridTemplateColumns="repeat(5, minmax(0, 1fr))"
                columnGap={1}
                alignItems="center"
                py={1.7}
              >
                <Box
                  display="flex"
                  justifyContent={{ xs: "center", sm: "end" }}
                  gridColumn={{ xs: "span 5", sm: "span 2" }}
                >
                  <Box
                    component="img"
                    height="330px"
                    src={import.meta.env.VITE_API_URL + book.cover.url}
                  />
                </Box>
                <Box
                  gridColumn={{ xs: "span 5", sm: "span 2" }}
                  display="flex"
                  flexDirection="column"
                  px={{ xs: 3, sm: 1 }}
                  py={{ xs: 3, sm: 0 }}
                >
                  <Typography variant="h5" fontFamily="Cinzel">
                    {book.type}
                  </Typography>

                  <Typography variant="h2">{book.name}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <BookDetails book={book} />
        </>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default Book;
