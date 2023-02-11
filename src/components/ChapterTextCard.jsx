import React from "react";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { motion } from "framer-motion";

export const ChapterTextCard = ({ dataCard }) => {
  return (
    <Box component={motion.div} whileTap={{ scale: 0.95 }}>
      <Box
        sx={{
          cursor: "pointer",
          userSelect: "none",
          maxWidth: { xs: "21rem", md: "23rem" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            minHeight: "13rem",
            backgroundImage: `url(${dataCard.image || null})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: { xs: "21rem", md: "23rem" },
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
        <Box>
          <Box
            display="grid"
            sx={{
              placeItems: "center",
              px: 12,
              transform: "translateY(-60px)",
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily="cinzel">
              {dataCard.type || null}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {dataCard.title || null}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
