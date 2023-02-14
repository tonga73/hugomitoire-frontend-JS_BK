import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Box, Typography, Button } from "@mui/material";

import { motion } from "framer-motion";

import { Loading } from "./Loading";

export const BooksCarousel = ({ dataBook }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateToBook = () => navigate(`/libro/${dataBook[currentIndex].id}`);

  if (!dataBook[0].secondaryImage || !dataBook[0].cover) {
    return <Loading />;
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.7 }}
      transition={{ duration: 0.3 }}
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${
          import.meta.env.VITE_API_URL +
          dataBook[currentIndex].secondaryImage.url
        })`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "30%", sm: "35%", md: "center" },
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        style={{
          background:
            "linear-gradient(to bottom, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23, 0.51) 51%, rgba(23, 23, 23, 1) 100%)",

          minHeight: "100vh",
        }}
        sx={{
          py: 3,
          alignItems: { xs: "center" },
          // justifyContent: { xs: "center" },
          overflow: { xs: "hidden" },
        }}
      >
        <Grid
          container
          item
          columnGap={2}
          alignItems="center"
          sx={{
            order: { md: 2 },
          }}
          xs={12}
          md={5}
        >
          <Grid
            component={motion.div}
            key={currentIndex}
            layoutId="underline"
            initial={{
              opacity: 0.5,
              transform: "translate(-15%)",
            }}
            animate={{
              opacity: 1,
              transform: "translate(0%)",
            }}
            exit={{ opacity: 0.5, transform: "translate(5%)" }}
            transition={{ duration: 0.3 }}
            display="flex"
            sx={{
              justifyContent: { xs: "end", md: "center" },
              zIndex: 999,
            }}
            xs={10}
            md={9}
            item
          >
            <Box
              component="img"
              src={
                import.meta.env.VITE_API_URL + dataBook[currentIndex].cover.url
              }
              onClick={navigateToBook}
              sx={{
                height: {
                  xs: `clamp(23rem, 1vw + 1rem, 2.2rem)`,
                  sm: `clamp(37rem, 1vw + 1rem, 2.2rem)`,
                  md: `clamp(30rem, 1vw + 1rem, 2.2rem)`,
                  xl: `clamp(45rem, 1vw + 1rem, 2.2rem)`,
                },
                mt: {
                  xs: 5,
                  sm: 5,
                },
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Box
              component="img"
              onClick={() =>
                setCurrentIndex(
                  currentIndex < dataBook.length - 1 ? currentIndex + 1 : 0
                )
              }
              src={
                currentIndex < dataBook.length - 1
                  ? import.meta.env.VITE_API_URL +
                    dataBook[currentIndex + 1].cover.url
                  : import.meta.env.VITE_API_URL + dataBook[0].cover.url
              }
              sx={{
                maskSize: "100%",
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 1.0) 20%, transparent 40% 100%)",

                height: {
                  xs: `clamp(16rem, 1vw + 1rem, 2.2rem)`,
                  sm: `clamp(30rem, 1vw + 1rem, 2.2rem)`,
                  md: `clamp(23rem, 1vw + 1rem, 2.2rem)`,
                  xl: `clamp(38rem, 1vw + 1rem, 2.2rem)`,
                },
                opacity: 0.6,
                "&:hover": {
                  opacity: 0.9,
                  maskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 1.0) 25%, transparent 45% 100%)",
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          rowGap={0.5}
          sx={{
            p: 3,
            textAlign: "right",
            pl: {
              md: "20%",
            },
            pr: {
              md: "5%",
            },
          }}
          xs={12}
          md={7}
          item
        >
          <Typography variant="h6" fontFamily="cinzel" fontWeight="bold">
            {dataBook[currentIndex].type}
          </Typography>
          <Typography variant="h2">{dataBook[currentIndex].name}</Typography>
          <Typography
            variant="h5"
            sx={{ py: 3 }}
            fontFamily="bellefair"
            fontWeight="bold"
          >
            {dataBook[currentIndex].description}
          </Typography>
          <Button
            onClick={navigateToBook}
            size="large"
            variant="contained"
            sx={{ placeSelf: "end" }}
          >
            Ver Libro
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
