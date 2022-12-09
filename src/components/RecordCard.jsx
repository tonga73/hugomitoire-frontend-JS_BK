import React from "react";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { motion } from "framer-motion";

export const RecordCard = ({ dataCard }) => {
  return (
    <Box component={motion.div} whileTap={{ scale: 0.95 }}>
      <Grid
        container
        sx={{
          cursor: "pointer",
          userSelect: "none",
          maxWidth: { xs: "21rem", md: "23rem" },
        }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              height: "100%",
              minHeight: "13rem",
              width: { xs: "21rem", md: "23rem" },
              backgroundImage: `url(${
                dataCard !== undefined && dataCard.image
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                height: "100%",
                background:
                  "linear-gradient(to top, rgb(0, 0, 0, 1) 0%, rgb(0, 0, 0, 0.3) 51% , rgb(0, 0, 0, 0.1) 100%)",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            sx={{
              px: 12,
              transform: "translateY(-60px)",
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily="cinzel">
              {dataCard !== undefined && dataCard.type}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {dataCard !== undefined && dataCard.title}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
