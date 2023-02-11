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

import { ChaptersList } from "./ChaptersList";

export const BookDetails = ({ book }) => {
  const [bookChapters, setBookChapters] = useState([]);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(5, minmax(0, 1fr))"
      flexDirection="column"
      gap={0.9}
      sx={{
        "> *": {
          borderRadius: 1.5,
        },
      }}
    >
      <Box
        gridColumn="span 3"
        display="flex"
        flexDirection="column"
        p={1.3}
        sx={{
          bgcolor: "background.paper",
          opacity: 0.7,
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        <Box px={1.5} pb={0.7}>
          <Typography
            textAlign="center"
            textTransform="lowercase"
            sx={{
              opacity: 0.7,
            }}
          >
            género
          </Typography>
        </Box>
        <Typography variant="h5">{book.genre.name}</Typography>
      </Box>
      <Box
        gridColumn="span 2"
        display="grid"
        sx={{
          placeItems: "center",
          bgcolor: "background.paper",
          opacity: 0.7,
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography
          textAlign="center"
          textTransform="lowercase"
          sx={{
            opacity: 0.7,
          }}
        >
          publicado
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          {book.publicationDate}
        </Typography>
      </Box>
      <Box
        gridColumn="span 5"
        minHeight={250}
        sx={{
          bgcolor: "background.paper",
          opacity: 0.7,
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        <ChaptersList />
      </Box>
      <Box
        gridColumn="span 5"
        display="grid"
        gridTemplateColumns="50% 50%"
        gap={0.9}
      >
        <Box
          display="grid"
          sx={{
            placeItems: "center",
            bgcolor: "background.paper",
            opacity: 0.7,
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          <Typography
            textAlign="center"
            textTransform="lowercase"
            sx={{
              opacity: 0.7,
            }}
          >
            Editorial
          </Typography>
          <Typography variant="h6">{book.publisher.name}</Typography>
        </Box>
        <Box
          display="grid"
          sx={{
            placeItems: "center",
            bgcolor: "background.paper",
            opacity: 0.7,
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          <Typography
            textAlign="center"
            textTransform="lowercase"
            sx={{
              opacity: 0.7,
            }}
          >
            Ilustraciones
          </Typography>
          <Typography variant="h6">{book.illustrator.name}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
