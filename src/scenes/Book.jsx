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

import { selectBook } from "../store/slices/books.slice";

import { getBook } from "../store/actions/books.actions";

export const Book = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [bookChapters, setBookChapters] = useState([]);

  const book = useSelector((state) => state.books.book);

  useEffect(() => {
    dispatch(getBook(params.id));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box width="100%">
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
        {Object.values(book).length > 0 ? (
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
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="75vh"
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
        )}
      </Box>
      {Object.values(book).length > 0 ? (
        <Box
          component={Container}
          display="grid"
          gap={1.5}
          gridTemplateColumns={{
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
          }}
        >
          {/* START BOOK DETAILS */}
          <Box display="flex" flexDirection="column" rowGap={1.5} py={3}>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="caption"
                textTransform="uppercase"
                fontWeight={400}
                fontFamily="Cinzel"
              >
                Edad Recomendada
              </Typography>
              <Typography variant="h5" fontFamily="Bellefair">
                {!!book.ageRange && book.ageRange}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="caption"
                textTransform="uppercase"
                fontWeight={400}
                fontFamily="Cinzel"
              >
                Sinópsis
              </Typography>
              <Typography variant="h5" fontFamily="Bellefair">
                {book.description}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="caption"
                textTransform="uppercase"
                fontWeight={400}
                fontFamily="Cinzel"
              >
                Género
              </Typography>
              <Typography variant="h5" fontFamily="Bellefair">
                {book.genre}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="caption"
                textTransform="uppercase"
                fontWeight={400}
                fontFamily="Cinzel"
              >
                Fecha de Publicación
              </Typography>
              <Typography variant="h5" fontFamily="Bellefair">
                {book.publicationDate}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="caption"
                textTransform="uppercase"
                fontWeight={400}
                fontFamily="Cinzel"
              >
                Ilustraciones
              </Typography>
              <Typography variant="h5" fontFamily="Bellefair">
                {book.illustrator}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="caption"
                textTransform="uppercase"
                fontWeight={400}
                fontFamily="Cinzel"
              >
                Editorial
              </Typography>
              <Typography variant="h5" fontFamily="Bellefair">
                {book.publisher}
              </Typography>
            </Box>
          </Box>
          {/* END BOOK DETAILS */}
          {/* START BOOK CHAPTERS LIST */}
          <Box display="flex" flexDirection="column" rowGap={1} py={3}>
            <Typography
              variant="caption"
              textTransform="uppercase"
              fontWeight={400}
              fontFamily="Cinzel"
            >
              Capítulos
            </Typography>

            {bookChapters === "loading" ? (
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
                "Cargando capitulos..."
              </Box>
            ) : (
              <Box>
                <List
                  disablePadding
                  sx={{ height: "400px", overflow: "scroll" }}
                >
                  {bookChapters.map((e, index) => (
                    <ListItem key={index} component="div" disablePadding>
                      <ListItemButton
                        onClick={
                          e.fragmento.length > 5
                            ? () => alert(e.fragmento)
                            : undefined
                        }
                      >
                        <ListItemText
                          primary={
                            <Typography fontFamily="Bellefair">{`${e.numero_capitulo} | ${e.nombre}`}</Typography>
                          }
                        />
                        {e.fragmento.length > 5 ? (
                          <ListItemIcon>
                            <FileOpenIcon />
                          </ListItemIcon>
                        ) : undefined}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Box>
          {/* END BOOK CHAPTERS LIST */}
        </Box>
      ) : undefined}
    </Box>
  );
};
