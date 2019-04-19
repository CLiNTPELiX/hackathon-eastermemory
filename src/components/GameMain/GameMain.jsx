import React, { Component } from 'react';
import './GameMain.css';
import Navbar from '../Navbar/Navbar';
import Fetch from '../Fetch/Fetch';
import {Container, Row} from 'reactstrap';

export default class GameMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <React.Fragment>
        <Navbar text={this.props.playerName} number={this.props.difficultyLevel} />
        <Container>
          <Row> <Fetch /></Row>
         
        </Container>
        
      </React.Fragment>
    );
  }
}
