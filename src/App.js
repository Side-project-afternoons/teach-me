import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectionOfCourses from "./components/SelectionOfCourses";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <SelectionOfCourses />
      <Router>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
      <Header />
    </div>
  );
}
export default App;
