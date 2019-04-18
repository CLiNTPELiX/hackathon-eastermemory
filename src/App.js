import React, { Component } from 'react';
import './App.css';
import GameInit from './components/GameInit/GameInit';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <GameInit />  
        <Footer />     
      </div>
    );
  }
}

export default App;
