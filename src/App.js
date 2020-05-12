import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { getAreas, getAreaDetails } from '/Users/trondmakonese/mod_3/V-RAD/vrad-project/src/apiCalls.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      areas: []
    }
  }

  componentDidMount(){
    getAreas()
    .then(data => {
      console.log(data)
      const areaDetails = data.areas.map(area => {
        // getAreaDetails()
        return fetch(`http://localhost:3001${area.details}`)
        .then(res => res.json())
        .then(area => {
            return {
              name: area.name,
              ...area
            }
        })
      })
      return Promise.all(areaDetails)
    })
    .then(areas => this.setState({ areas }))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return(
      <main>
        {/* <Switch> */}
          <h1>Made it</h1>
        {/* </Switch> */}
      </main>
    )
  }
}

export default App;
