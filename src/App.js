import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import SelectionOfCourses from "./components/SelectionOfCourses";
import "./App.css";
import BlueBanner from "./components/BlueBanner/BlueBanner";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />{" "}
          {/* the other header is for the other two pages, waiting on merge */}
          <Hero />
          <SelectionOfCourses />
          {/* <BlueBanner /> <------ I'm pretty sure this component belongs on other pages not on the main page */}
        </Route>

        <Route exact path="/login">
          <Navbar />
        </Route>

        <Route exact path="/register">
          <Navbar />
        </Route>

        <Route exact path="/business">
          <Header />
        </Route>

        <Route exact path="/teach">
          <Header />
        </Route>
      </Switch>
      <footer>{/* Placeholder for Footer component */}</footer>
    </div>
  );
}
export default App;
