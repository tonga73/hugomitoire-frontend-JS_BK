import React, { useState, useEffect } from "react";
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

export const Book = () => {
  const params = useParams();
  const [bookData, setBookData] = useState({});
  const [bookChapters, setBookChapters] = useState([]);

  const getData = async () => {
    await axios("http://localhost:8000/books")
      .then((response) => {
        const { data } = response;

        data.data.filter(async (e) => {
          if (e.titulo.toLowerCase().replaceAll(" ", "-") === params.name) {
            const publicationDateConverted = new Date(e.fecha_publicacion);
            const genre = await axios(
              `http://localhost:8000/genres?id=${e.genero}`
            )
              .then((response) => {
                const { data } = response;
                const { nombre, edad_recomendada } = (!!data && data[0]) || [];

                return { genre: nombre, ageRange: edad_recomendada };
              })
              .catch((err) => console.log(err));

            setBookData({
              id: e.id,
              image: e.imagen,
              name: e.titulo,
              description: e.descripcion,
              type: e.tipo,
              illustrator: e.ilustrador,
              publisher: e.editorial,
              publicationDate: Intl.DateTimeFormat("es-AR").format(
                publicationDateConverted
              ),
              ...genre,
            });
          }
        });
      })
      .catch((err) => console.log(err));
  };

  const getBook = async () => {
    try {
      const { data } = await axios("http://localhost:8000/books");

      data.data.filter(async (e) => {
        if (e.titulo.toLowerCase().replaceAll(" ", "-") === params.name) {
          const publicationDateConverted = new Date(e.fecha_publicacion);
          const genre = await axios(
            `http://localhost:8000/genres?id=${e.genero}`
          )
            .then((response) => {
              const { data } = response;
              const { nombre, edad_recomendada } = (!!data && data[0]) || [];

              return { genre: nombre, ageRange: edad_recomendada };
            })
            .catch((err) => console.log(err));

          setBookData({
            id: e.id,
            image: e.imagen,
            name: e.titulo,
            description: e.descripcion,
            type: e.tipo,
            illustrator: e.ilustrador,
            publisher: e.editorial,
            publicationDate: Intl.DateTimeFormat("es-AR").format(
              publicationDateConverted
            ),
            ...genre,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getChapters = async (id) => {
    setBookChapters("loading");
    const chapters = await axios(
      `http://localhost:8000/chapters?id=${id}`
    ).then((response) => {
      const { data } = response;

      return data;
    });
    return setBookChapters(chapters);
  };

  useEffect(() => {
    getBook();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (bookData.id !== undefined) {
      getChapters(bookData.id);
    }
  }, [bookData.id]);

  return (
    <Box width="100%">
      <Box
        sx={{
          backgroundImage: `url(${bookData.image})`,
          backgroundPosition: "center 60%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {Object.values(bookData).length > 0 ? (
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
                <Box component="img" height="330px" src={bookData.image} />
              </Box>
              <Box
                gridColumn={{ xs: "span 5", sm: "span 2" }}
                display="flex"
                flexDirection="column"
                px={{ xs: 3, sm: 1 }}
                py={{ xs: 3, sm: 0 }}
              >
                <Typography variant="h5" fontFamily="Cinzel">
                  {bookData.type}
                </Typography>

                <Typography variant="h2">{bookData.name}</Typography>
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
      {Object.values(bookData).length > 0 ? (
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
                {!!bookData.ageRange && bookData.ageRange}
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
                {bookData.description}
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
                {bookData.genre}
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
                {bookData.publicationDate}
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
                {bookData.illustrator}
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
                {bookData.publisher}
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
