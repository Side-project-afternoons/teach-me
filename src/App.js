import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Selectionofcourses from "./components/SelectionOfCourses";

function App() {
  return (
    <div className="App">
      <Selectionofcourses />
      <Router>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
