import React, { Component } from 'react';
import Search from '../MainTop/Search/Search.js';
import TopNav from '../MainTop/TopNav/TopNav.js';
import Home from '../MainMid/Home/Home.js';
import Location from '../MainMid/Home/Location/Location.js';
import HomePage from '../HomePage/HomePage.js';
import SignUp from '../SignUp/SignUp.js';
import Login from '../Login/Login.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import homeData from '../homeData.json.js';
import './App.css';

// console.log(homeData)


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Search />


          <Route exact path="/" component={HomePage} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/LocationPlace" component={Location} />
          <Route path="/home/:id" component={Home} />
      
        </div>
      </Router>
    );
  }
}

export default App;
