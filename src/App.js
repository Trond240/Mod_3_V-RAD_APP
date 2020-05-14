import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { getAreas, getAreaDetails } from '../src/apiCalls.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import { AreasContainer } from './components/AreasContainer/areasContainer';
import {ListingContainer} from './components/ListingContainer/listingContainer.js';
import { ListingDetails } from './components/ListingDetails/listingDetails.js'

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
      .then(areas => {this.setState({ areas })})
      .then(areas => this.state.areas.map(area => {
        return area.listings.map(listing => {
          return fetch(`http://localhost:3001${listing}`)
          .then(res => res.json())
          .then(listing => {
            this.setState({listingList: [...this.state.listingList, listing]})
          })
        })
      }))
  }

  render() {
    return(
      <main>
        <Switch>
          <Route path='/areas/:id/listings/:listingID'render={ ({ match }) => <ListingDetails
          match={ match }
          listings={this.state.listingList.filter(listing => {
            return listing.listing_id === parseInt(match.params.listingID)
          })}
          />}/>
          <Route path='/areas/:id/listings' render={ ({ match }) => <ListingContainer 
          listingByArea={this.state.areas.filter(areaListings => 
          areaListings.id === parseInt(match.params.id))}
          match={ match }
          listings={this.state.listingList.filter(listing => listing.area_id === parseInt(match.params.id))}
          />}/>
          <Route path='/areas' render={ () => <AreasContainer areaInfo={this.state.areas}/>} />
          <Route path='/' exact render={ () => <LoginPage userInfo={this.setUserInfo} />} />
        </Switch>
      </main>
    )
  }
}

export default App;
