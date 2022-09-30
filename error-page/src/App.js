import React from "react";
import About from "./About";
import Home from "./Home";
import Error from "./Error";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
        </ul>
<hr />
    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route >
            <Error/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}



