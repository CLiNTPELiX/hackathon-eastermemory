import React, { Component } from 'react';
import './App.css';
import GameInit from './components/GameInit/GameInit';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameInit />  
        <Footer />     
      </div>
    );
  }
}

export default App;
