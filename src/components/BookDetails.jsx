import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ChaptersList } from "./ChaptersList";

export const BookDetails = ({ book }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(5, minmax(0, 1fr))"
      gap={0.9}
      width="100%"
      minHeight={450}
      sx={{
        "> *": {
          borderRadius: 1.1,
          userSelect: "none",
        },
      }}
    >
      <Box
        gridColumn={{ xs: "span 12", sm: "span 3" }}
        display="grid"
        p={1.3}
        sx={{
          placeItems: "center",
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
        gridColumn={{ xs: "span 12", sm: "span 2" }}
        display="grid"
        p={1.3}
        sx={{
          placeItems: "center",
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
            publicado
          </Typography>
        </Box>
        <Typography variant="h5" fontWeight="bold">
          {book.publicationDate}
        </Typography>
      </Box>
      <Box
        gridColumn={{ xs: "span 12", sm: "span 5" }}
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
        gridColumn={{ xs: "span 12", sm: "span 5" }}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-evenly"
        gap={1}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          sx={{
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
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          sx={{
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
