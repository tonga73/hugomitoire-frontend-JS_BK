import React, { useState, useEffect } from "react";

import { RecordsCarousel } from "../components/RecordsCarousel";
import { RecordCard } from "../components/RecordCard";
import { Banner } from "../components/Banner";
import { ParticlesDefault } from "../components/ParticlesDefault";

import { Container, Box, Grid } from "@mui/material";

export const Landing = () => {
  const [data, setData] = useState([]);

  const books = data.books;
  const cards = data.cards;

  const getData = () => {
    fetch(
      "data.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {books && <RecordsCarousel dataBook={books.map((book) => book)} />}
      <Container disableGutters>
        <Grid container justifyContent="center" gap={3} sx={{ py: 15 }}>
          {cards !== undefined &&
            cards.map((card, index) => (
              <Grid key={index} item>
                <RecordCard dataCard={card} />
              </Grid>
            ))}
        </Grid>
        <Banner />
        <Box style={{ zIndex: -1, position: "relative" }}>
          <ParticlesDefault />
        </Box>
      </Container>
    </>
  );
};
