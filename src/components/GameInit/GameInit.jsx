import React, { Component } from 'react'

export default class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: "",
      pictures: ""
    }
  }
  
  componentDidMount(){
    fetch('easteregg.wildcodeschool.fr/api/eggs')
    .then( results => {
      return results.json()
    }).then(data => {
      let pictures = data.results.map((pic) => {
        return(
          <div key={pic.results}
            <img src={pic.pictures.}
        )
      }
    })
  }


  render() {
    return (
      <div>

      </div>
    )
  }
}
