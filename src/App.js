import React, { Component } from 'react';
import GameInit from './components/GameInit/GameInit';
import GameMain from './components/GameMain/GameMain';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import './App.css';

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
