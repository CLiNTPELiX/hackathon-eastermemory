import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
export default class Fetch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eggs: { data: [{ id: 1337, name: 'Dan', image: 'http://myimage' }] },
      loading: true,
      eggsIWant:[],
      eggsIReallyWant:[],
      isFiltered: false,
      difficultyLevel: 3
    };
    
  }

  getArrayOfX(){
    let cardsNumber = 0;
    if (this.state.difficultyLevel === 1) {
      cardsNumber = 8;
    } else if (this.state.difficultyLevel === 2) {
      cardsNumber = 16;
    } else if (this.state.difficultyLevel === 3) {
      cardsNumber = 32;
    }

    for (let i = 0; i < cardsNumber; i++){
      if (this.state.isFiltered === false) {
        this.state.eggsIWant.push(this.state.eggs.data[Math.floor(Math.random() * this.state.eggs.data.length)].image);
      }
    }
    this.setState({eggsIReallyWant: this.state.eggsIWant, isFiltered : true});
    console.log('I run l15 func');
  }

  componentDidMount = () => {
    axios.get('http://easteregg.wildcodeschool.fr/api/eggs')
      .then(data => this.setState({ eggs: data }))
      .catch(error => console.log(error));
    this.getArrayOfX(2);
  }

  render() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 500);
      return <Spinner color="primary" />;
    }

    return (
      console.log(this.state.eggsIWant + ' want'),
      console.log(this.state.eggsIReallyWant + ' really want'),
      this.state.eggs.data.map((egg) => {
        return <img src={egg.image} alt='noAlternative'></img>;
      })
    );
  }
}