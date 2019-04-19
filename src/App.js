import React, { Component } from 'react';
import GameInit from './components/GameInit/GameInit';
import GameMain from './components/GameMain/GameMain';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import Fetch from './components/Fetch/Fetch';

import './App.css';

class App extends Component {

  render() {

    return (

      <div className="App">
        <Switch>
          <Route exact path='/play' component={GameMain} />
          <Route exact path='/' component={GameInit} />
          {/* <Route exact path='/easteregg' componenent={EasterEgg} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;