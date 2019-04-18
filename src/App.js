import React, { Component } from 'react';
import './App.css';
import GameInit from './components/GameInit/GameInit'
import GameMain from './components/GameMain/GameMain'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/play' component={GameMain} />
          <Route path='/' component={GameInit} />
        </Switch>
      </div>


    );
  }
}

export default App;
