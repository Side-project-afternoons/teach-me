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
});

export default theme;
