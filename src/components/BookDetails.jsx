import React, { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export const BookDetails = ({ book }) => {
  const [bookChapters, setBookChapters] = useState([]);

  return (
    <div>
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
              <List disablePadding sx={{ height: "400px", overflow: "scroll" }}>
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
    </div>
  );
};
