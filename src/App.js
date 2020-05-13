import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { getAreas, getAreaDetails } from '../src/apiCalls.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import { AreasContainer } from './components/AreasContainer/areasContainer';

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
        // .then(area => {
        //   const finalDetails = area.listings.map(listing => {
        //     return fetch(`http://localhost:3001${listing}`)
        //     .then(res => res.json())
        //     .then(listingInfo => {
        //       console.log(listingInfo)
        //       return{
        //         listingName: listingInfo.name,
        //         listingAddress1: listingInfo.address.street,
        //         listingAddress2: listingInfo.address.zip,
        //         listingId: listingInfo.listing_id,
        //         listingDetails: listingInfo.details,
        //         areaNickname: area.area,
        //         // areaDetails: {...details},
        //       }
        //     })
        //   })
        //   Promise.all(finalDetails)
        // })
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
    console.log(this.state.areas)
    return(
      <main>
        <Switch>
          <Route path='/areas' exact render={ () => <AreasContainer areaInfo={this.state.areas} />} />
          <Route path='/' exact render={ () => <LoginPage userInfo={this.setUserInfo} />} />
        </Switch>
      </main>
    )
  }
}

export default App;
