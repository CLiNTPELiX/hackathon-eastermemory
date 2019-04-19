import React, { Component } from 'react';
import './GameMain.css';
import Navbar from '../Navbar/Navbar';
import Fetch from '../Fetch/Fetch';

export default class GameMain extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar text={this.props.playerName} number={this.props.difficultyLevel} />
        <Fetch difficultyLevel={this.props.difficultyLevel} />
      </React.Fragment>
    );
  }
}
