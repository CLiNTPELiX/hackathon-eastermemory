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
      duplicatedEggs: [],
      isFiltered: false,
      difficultyLevel: 3
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
    let eggsIReallyWant = [];

    for (let i = 0; i < cardsNumber; i++){
      if (this.state.isFiltered === false) {
        eggsIReallyWant.push(this.state.eggs.data[Math.floor(Math.random() * this.state.eggs.data.length)].image);
      }
    }

    this.setState({eggsIWant: eggsIReallyWant, isFiltered : true});
    console.log('I run l19 func and eggsIrlywant.length = ' + eggsIReallyWant.length);
    console.log(this.state.isFiltered);

    this.makePairs(eggsIReallyWant);
  }

  componentDidMount = () => {
    axios.get('http://easteregg.wildcodeschool.fr/api/eggs')
      .then( (data) => {
        this.setState({ eggs: data, loading: false });
      })
      .catch(error => console.log(error));
    this.getArrayOfX(1);
    console.log(this.state.eggsIWant + ' are eggsIWant (cdm l48)');
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
      this.state.eggs.data.map((egg, index) => {
        return <img src={egg.image} alt='noAlternative' key={index}></img>;
      })
    );
  }
      
  // console.log(this.state.eggsIWant + ' want arr'),
  // console.log(this.state.duplicatedEggs + ' duplicated arr')
}

