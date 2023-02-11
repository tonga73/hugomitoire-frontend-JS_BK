import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ImageGallery from "./ImageGallery";

export const BookImages = () => {
  return (
    <Box display="grid" gridTemplateColumns="49% 49%">
      <ImageGallery />
    </Box>
  );
};
