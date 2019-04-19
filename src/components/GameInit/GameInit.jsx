import React, { Component } from 'react';
import { Container, Col, Row, Button, ButtonGroup } from 'reactstrap';
import GameMain from '../GameMain/GameMain';
import './GameInit.css';
// import EasterEgg from '../EasterEgg/EasterEgg';

export default class GameInit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: 'Player',
      rSelected: 1,
      playerInput: '',
      playerName: '',
      isPlayerReady: false,
      title: 'Welcome'
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  async submitForm(e) {
    e.preventDefault();
    await this.setState({ playerName: this.state.playerInput, isPlayerReady: true });
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  handleClick(){
    return this.setState({title: 'EASTEREGGS!!!!!'});
  }

  render() {
    
    if (this.state.isPlayerReady === true) {
      return <GameMain playerName={this.state.playerName} difficultyLevel={this.state.rSelected} />;
    }
    return (
      <div className="myBackground">
        <Container >
          <Row >

            <Col xs='12'>
              <h1 onClick={() => this.handleClick()} className="mainTitle">{this.state.title}</h1>
            </Col>

            <Col xs='12'>
              <h3 className="gameInitText">Choose your level <em>(default is 1)</em></h3>
            </Col>

            <Col xs='12'>
              <ButtonGroup>
                <Button className="myButton" color="success" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Level 1</Button>
                <Button className="myButton" color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Level 2</Button>
                <Button className="myButton" color="warning" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Level 3</Button>
                <Button className="myButton" color="danger" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>Level 4</Button>
              </ButtonGroup>
            </Col>

            <Col xs='12'>
              <h3 className="gameInitText">Enter your name <em>(default is Player)</em></h3>
            </Col>

            <Col xs='12'>
              <form onSubmit={this.submitForm}>
                <fieldset>
                  <div className="form-data">
                    <input
                      type="text"
                      id="playerInput"
                      name="playerInput"
                      onChange={this.onChange}
                      value={this.state.playerInput}
                    />
                  </div>
                  <div className="form-data">
                    <input
                      type="submit"
                      value="OK"
                      className="myOkButton"
                    />
                  </div>
                </fieldset>
              </form>
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}
