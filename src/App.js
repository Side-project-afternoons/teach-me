import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/Components/ui/Theme";
import Footer from "../src/Components/Footer";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
