import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './GameMain.css';
import Navbar from '../Navbar/Navbar';

export default class GameMain extends Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  render() {
    return (
      <Container-fluide>
        <Navbar />
        <h1>{this.props.playerName}</h1>

        <h1>{this.props.difficultyLevel}</h1>
      </Container-fluide>
    );
  }
}
