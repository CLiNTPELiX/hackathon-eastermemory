import React, { Component } from 'react';
import axios from 'axios';
import { Spinner, Col } from 'reactstrap';
import Cards from '../Cards/Cards';

export default class Fetch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eggs: { data: [{ id: 1337, name: 'Dan', image: 'http://myimage' }] },
      loading: true,
      eggsIWant: [],
      duplicatedEggs: [],
      isFiltered: false,
      difficultyLevel: this.props.difficultyLevel
    };
  }

  getArrayOfX(difficultyLevel){
    let cardsNumber = 0;
    if (difficultyLevel === 1) {
      cardsNumber = 8;
    } else if (difficultyLevel === 2) {
      cardsNumber = 16;
    } else if (difficultyLevel === 3) {
      cardsNumber = 32;
    } else {
      cardsNumber = 64;
    }
    let eggsArrIReallyWant = [];

    for (let i = 0; i < cardsNumber; i++){
      if (this.state.isFiltered === false) {
        eggsArrIReallyWant.push(this.state.eggs.data[Math.floor(Math.random() * this.state.eggs.data.length)].image);
        console.log('in for loop l34 (getArrayofX method)');
      }
    }

    this.setState({eggsIWant: eggsArrIReallyWant, isFiltered : true});
    console.log('I run l19 func and eggsIrlywant.length = ' + eggsArrIReallyWant.length);
    console.log(this.state.isFiltered);

    this.makePairs(eggsArrIReallyWant);
  }

  componentDidMount = () => {
    axios.get('http://easteregg.wildcodeschool.fr/api/eggs')
      .then( (data) => {
        this.setState({ eggs: data, loading: false });
      })
      .catch(error => console.log(error));
    this.getArrayOfX(this.state.difficultyLevel);
  }

  makePairs(array){
    let duplicatedArray = [];
    for (let i = 0; i < array.length; i++){
      duplicatedArray.push(array[i], array[i]);
    }
    this.setState({duplicatedEggs : duplicatedArray});
    console.log('I ran func makePairs.');
  }

  render() {
    if (this.state.loading ) {
      return <Spinner color="primary" />;
    }
    
    return (
    
      this.state.eggs.data.map((egg) => {
        return <Col xs='2'><Cards image={egg.image}/></Col>; 
      })
    );
  }
}

