import React, { Component } from 'react';
import './GameMain.css';
import Navbar from '../Navbar/Navbar';
import Fetch from '../Fetch/Fetch';
import {Container, Row} from 'reactstrap';
import './GameMain.css';

export default class GameMain extends Component {
  render() {
    return (
      <div className="Mybody">
        <Navbar text={this.props.playerName} number={this.props.difficultyLevel} />
        <Container fluid  className="bgrd">
          <Row> <Fetch /></Row>
         
        </Container>
        
      </div>
    );
  }
}
