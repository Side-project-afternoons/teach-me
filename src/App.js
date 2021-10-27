import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectionOfCourses from "./components/SelectionOfCourses";
import "./App.css";
import BlueBanner from "./components/BlueBanner/BlueBanner";

function App() {
  return (
    <div className="App">
      <Header>{/* Placeholder for Header component */}</Header>
      <Hero />
      <BlueBanner />
      <SelectionOfCourses />
      <footer>{/* Placeholder for Footer component */}</footer>
    </div>
  );
}
export default App;
