import React from "react";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/Components/ui/Theme";
import Footer from "../src/Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";

    
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/"></Route>
            </Switch>
          </Router>
          <Header />
          <Footer />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
export default App;
