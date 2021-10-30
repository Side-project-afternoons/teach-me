import { createTheme } from "@mui/material/styles";

const black = "#000000";
const white = "#FFFFFF";

const theme = createTheme({
  palette: {
    common: {
      black: `${black}`,
      white: `${white}`,
    },
  },
  typography: {
    buttons: {
      fontFamily: "Manrope",
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      docSize: 1023,
      lg: 1200,
      xl: 1536,
      macbookPro: 1792,
      fhd: 1920,
      qhd: 2560,
    },
  },
});

export default theme;
