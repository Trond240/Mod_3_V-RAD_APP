import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { getAreas, getAreaDetails } from '../src/apiCalls.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import { AreasContainer } from './components/AreasContainer/areasContainer';
import {ListingContainer} from './components/ListingContainer/listingContainer.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      areas: [],
      listingList: [],
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
    .catch(err => console.log(err));
  }

  getAreasListings = (listing) => {
    const allData = fetch(`http://localhost:3001${listing}`)
    .then(res => res.json())
    .then(data => console.log(data))
    // .then(listing => this.setState({ listing }))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return(
      <main>
        <Switch>
          <Route path='/areas/:id/listings' render={ ({ match }) => <ListingContainer 
          listingByArea={this.state.areas.filter(areaListings => 
          areaListings.id === parseInt(match.params.id))}
          match={ match }
          getListings={this.getAreasListings}
          />} />
          <Route path='/areas' render={ () => <AreasContainer areaInfo={this.state.areas}/>} />
          <Route path='/' exact render={ () => <LoginPage userInfo={this.setUserInfo} />} />
        </Switch>
      </main>
    )
  }
}

export default App;
