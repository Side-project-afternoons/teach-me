import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import './App.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path="/">
            <Header />
          </Route>
        </Switch>
        </Router>
     
    </div>
  );
}
export default App;
            

