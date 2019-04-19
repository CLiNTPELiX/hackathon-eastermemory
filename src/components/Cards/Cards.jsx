import React, { Component } from 'react';
import './Cards.css';

let myCardBack = 'https://i.ibb.co/c8CS74x/Easter-egg.png';

export default class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden : true,
      picture : ' ',
    };
  }
  render() {
    return (
      <div className="borderEgg">
        <img 
          onClick={() => {
            this.setState({isHidden : !this.state.isHidden});
          }}
          src={this.state.isHidden? myCardBack : this.props.image} 
          alt={this.props.image} 
          height="150px" width="100px"></img>
      </div>
    );
  }
}
