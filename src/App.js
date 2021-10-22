import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import './App.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path="/">
            
          </Route>
        </Switch>
     </Router>
        <Header />
   </div>
  );
}
export default App;
            

