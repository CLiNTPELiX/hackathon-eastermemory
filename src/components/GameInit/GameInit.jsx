import React, { Component } from 'react'
import { Container, Col, Row, Button, ButtonGroup } from 'reactstrap'
import './GameInit.css'

export default class GameInit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: 'Player',
      rSelected: 1,
      playerInput: '',
      playerName: ''
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
  submitForm(e) {
    e.preventDefault();
    this.setState({ playerName: this.state.playerInput })
    console.log("Titre changé.")
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <div className="myBackground">
        <Container >
          <Row >

            <Col xs='12'>
              <h1 className="mainTitle">Welcome</h1>
            </Col>

            <Col xs='12'>
              <h3 className="gameInitText">Choose your level (default is 1)</h3>
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
              <h3 className="gameInitText">Enter your name (default is Player)</h3>
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
                      onClick={() => alert('Im a dirty JS alert.')}
                    />
                  </div>
                </fieldset>
              </form>
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}
