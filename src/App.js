import React, { Component } from 'react';
import './App.css';
//import GameInit from './components/GameInit/GameInit'
const baseUrl = "easteregg.wildcodeschool.fr/api"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs: [],
      isLoading: false
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })

    fetch(`${baseUrl}/eggs`)
      .then(response => this.setState({ eggs: response.data.results }))
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state)
    const { isLoading } = this.state;
    if (isLoading) { return <p>Eggs Array Loading ...</p> }

    return (
      <div className="App">
        {

        }
      </div>
    )
  }
}


export default App;
