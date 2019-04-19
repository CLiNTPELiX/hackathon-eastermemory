import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
export default class Fetch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eggs: { data: [{ id: 1337, name: 'Dan', image: 'http://myimage' }] },
      loading: true
    };
  }

  componentDidMount = () => {
    axios.get('http://easteregg.wildcodeschool.fr/api/eggs')
      .then(data => this.setState({ eggs: data }))
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 500);
      return <Spinner color="primary" />;
    }

    return (
      this.state.eggs.data.map((egg, idx) => {
        return (
          <div key={`${idx}`}>
            ${idx}
            
          </div>
        );
      })
    );
  }
}