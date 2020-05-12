import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { getAreas, getAreaDetails } from '../src/apiCalls.js';
import LoginPage from './components/LoginPage/LoginPage.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      areas: [],
      user: {}
    }
  }

  setUserInfo = user => {
    this.setState({ user });
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
        <Switch>
          <Route exact path='/' render={ () => <LoginPage userInfo={this.setUserInfo} />} />
        </Switch>
      </main>
    )
  }
}

export default App;
