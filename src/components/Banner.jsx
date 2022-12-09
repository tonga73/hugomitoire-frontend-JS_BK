import React from "react";

import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const Banner = () => {
  return (
    <Grid container>
      <Grid
        display="flex"
        flexDirection="column"
        item
        sx={{
          maxWidth: "700px",
          minHeight: { xs: "250px" },
          mx: "auto",
          order: { xs: 2, lg: "inherit" },
          justifyContent: { xs: "initial", lg: "center" },
          alignItems: { xs: "initial", lg: "center" },
          position: { xs: "relative", lg: "relative" },
          userSelect: "none",
        }}
        xs={12}
        lg={4}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            position: { xs: "absolute", lg: "absolute" },
            left: { xs: 0, lg: 100 },
            right: { xs: 0, lg: -100 },
            top: { xs: -65, lg: "initial" },
            p: { xs: 1.5, lg: "initial" },
            textAlign: "right",
            rowGap: 1.5,
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            textTransform="uppercase"
            fontFamily="cinzel"
          >
            Creaciones de lectores
          </Typography>
          <Typography
            sx={{ typography: { xs: "h4", lg: "h2" } }}
            fontWeight="bold"
          >
            Envianos tu fan art!
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              rowGap: 1.5,
            }}
          >
            <Typography variant="h5" fontFamily="bellefair">
              Queremos ver todas las formas en que las historias y cuentos de
              Hugo inspiran a sus lectores para crear arte a partir de ello.
              ¿Haces arte o conoces a alguien que lo haga? Pueden enviarnoslo a
              continuación.
            </Typography>
            <Button variant="contained" sx={{ placeSelf: "end" }} size="large">
              Participar
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box
          component="img"
          src="/images/fanArt.png"
          sx={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};
