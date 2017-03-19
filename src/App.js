import React, { Component } from 'react';

import Navigation from './Components/Navigation';
import Home from './Components/Home';

import './App.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
import './css/business-frontpage.css'





class App extends Component {
  render() {
    return (
      <div>
       <Navigation />
       <Home />
      </div>
    );
  }
}

export default App;
