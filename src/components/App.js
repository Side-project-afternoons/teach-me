import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          {/* Home */}
        </Route>
        <Route exact path='/login'>
          {/* Login Page */}
        </Route>
        <Route exact path='/register'>
          {/* Register Page */}
        </Route>
        <Route exact path='/business'>
          {/* TeachMe Business Page */}
        </Route>
        <Route exact path='/teach'>
          {/* Teach on TeachMe Page */}
        </Route>
      </Switch>
      {/* Footer */}
    </div>
  );
}

export default App;
