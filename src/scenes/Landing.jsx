import React, { useState, useEffect } from "react";

import { BooksCarousel } from "../components/BooksCarousel";
import { ChapterTextCard } from "../components/ChapterTextCard";
import { Banner } from "../components/Banner";
import { ParticlesDefault } from "../components/ParticlesDefault";

import { Container, Box } from "@mui/material";

const Landing = () => {
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
    // window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {books && <BooksCarousel dataBook={books.map((book) => book)} />}
      <Container disableGutters>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          }}
          gap={3}
          sx={{
            placeItems: "start",
            justifyItems: "center",
            py: 15,
          }}
        >
          {cards !== undefined &&
            cards.map((card, index) => (
              <Box display="grid" key={index} sx={{ placeItems: "center" }}>
                <ChapterTextCard dataCard={card} />
              </Box>
            ))}
        </Box>
        <Banner />
        <Box style={{ zIndex: -1, position: "relative" }}>
          <ParticlesDefault />
        </Box>
      </Container>
    </>
  );
};

export default Landing;
