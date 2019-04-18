import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
<<<<<<< HEAD
=======
import GameInit from './components/GameInit/GameInit';
import GameMain from './components/GameMain/GameMain';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
>>>>>>> 6e8f6f64858b56c317f0229c9a23eb08b7ecc20c

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eggs: { data: [{ id: 1, name: "Dan" }] },
      isLoading: false
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    axios.get(`http://easteregg.wildcodeschool.fr/api/eggs`)
      .then(data => this.setState({ eggs: data }))
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.eggs.data + "this is my eggs.data")
    if (this.state.isLoading === true) { return <p>Eggs Array Loading ...</p> }

    return (
<<<<<<< HEAD
      this.state.eggs.data.map((egg, idx) => {
        console.log('Line thirty one');
        return (
          <div key={`${idx}`}>
            <h2>{egg.id}</h2>
            <h2>{egg.name}</h2>
          </div>
        );
      })
    )
=======
      <div className="App">
        <Switch>
          <Route path='/play' component={GameMain} />
          <Route path='/' component={GameInit} />
        </Switch>
        <Footer />
      </div>
    );
>>>>>>> 6e8f6f64858b56c317f0229c9a23eb08b7ecc20c
  }
}

export default App;
