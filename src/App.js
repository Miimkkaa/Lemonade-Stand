import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Link, Switch, Route } from 'react-router-dom';
import GetLemonade from "./Lemonade/getLemonade";
import MainPage from "./MainPage/mainpage";

function App() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/getLemonade">Get Lemonade</Link>
        </li>
      </ul>
    </nav>

    <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/getLemonade' component={GetLemonade}/>
          </Switch>
    </div>
    
  );
}

export default App;
