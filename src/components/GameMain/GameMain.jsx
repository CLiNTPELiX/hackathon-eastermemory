import React, { Component } from 'react';
<<<<<<< HEAD
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../Navbar/Navbar';

import './GameMain.css';

export default class GameMain extends Component{
  constructor(props){
=======
import './GameMain.css';
import Navbar from '../Navbar/Navbar';

export default class GameMain extends Component {
  constructor(props) {
>>>>>>> 404146a540b96d35a8c527203124d6cf41b016b3
    super(props);
    this.state = {
    };
  }
  render() {
    return (
<<<<<<< HEAD
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
      
=======
      <div>
        <Navbar text={this.props.playerName} number={this.props.difficultyLevel} />
      </div>
>>>>>>> 404146a540b96d35a8c527203124d6cf41b016b3
    );
  }
}
