import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFCC33",
    },
    secondary: {
      main: "#38bc95",
    },
    terciary: {
      main: "#ff2e43",
    },
    background: {
      default: "#171717",
      secondary: "#060606",
    },
  },
  typography: {
    fontFamily: ["Reggae One"],
  },
});

export default theme;
