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
      <Container>
        <Row>
          <Navbar />
          <Col>
            <h1>{this.props.playerName}</h1>
          </Col>

          <Col>
            <h1>{this.props.difficultyLevel}</h1>
          </Col>

          <h1>{this.props.difficultyLevel}</h1>
        </Row>
      </Container> 
    );
  }
}
