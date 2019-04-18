import React, { Component } from 'react';
import axios from 'axios';
//import GameInit from './components/GameInit/GameInit'

export default class Fetch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eggs: { data: [{ id: 1, name: 'Dan' }] },
      isLoading: false
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    axios.get('http://easteregg.wildcodeschool.fr/api/eggs')
      .then(data => this.setState({ eggs: data }))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.eggs.data + 'this is my eggs.data');
    if (this.state.isLoading === true) {
      return <p>Eggs Array Loading ...</p>;
    }
    return ( 
      this.state.eggs.data.map((egg, idx) => {
        return (
          <div key={`${idx}`}>
            <h2>{egg.id}</h2>
            <h2>{egg.name}</h2>
          </div>
        );
      })
    );
  }
}