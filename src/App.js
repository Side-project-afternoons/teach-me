<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import './App.css';
=======
import "./App.css";
import Hero from "./components/Hero";
>>>>>>> fca4c7b26f3c85dde2875ffa1ace9142317faf3e




function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route  path="/">
            <Header />
          </Route>
        </Switch>
        </Router>
     
=======
      <header>{/* Placeholder for Header component */}</header>
      <Hero />
      <footer>{/* Placeholder for Footer component */}</footer>
>>>>>>> fca4c7b26f3c85dde2875ffa1ace9142317faf3e
    </div>
  );
}
export default App;
            

