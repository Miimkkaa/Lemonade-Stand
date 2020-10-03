import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GetLemonade from "../Lemonade/getLemonade";
import MainPage from "../MainPage/mainpage";
  
  
export default function Menu() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/mainpage">Home</Link>
              </li>
              <li>
                <Link to="/getLemonade">Get Lemonade</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/mainpage">
              <MainPage />
            </Route>
            <Route path="/getLemonade">
              <GetLemonade />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  



