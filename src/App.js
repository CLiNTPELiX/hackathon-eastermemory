import React, { Component } from 'react';
import './App.css';
import GameInit from './components/GameInit/GameInit'
import GameMain from './components/GameMain/'
import { Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/play' component={GameMain} />
          <Route path='/' component={GameInit} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
