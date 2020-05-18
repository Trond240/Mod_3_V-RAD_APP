import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { getAreas } from '../src/apiCalls.js';
import LoginPage from './components/LoginPage/loginPage';
import { AreasContainer } from './components/AreasContainer/AreasContainer';
import {ListingContainer} from './components/ListingContainer/listingContainer.js';
import { ListingDetails } from './components/ListingDetails/listingDetails.js';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      areas: [],
      listingList: [],
      user: {},
      favorites: []
    }
  }

  setUserInfo = user => {
      this.setState({user});
  }

  addToFavorites = (id) => {
      this.setState({favorites:[...this.state.favorites,id]})
      
  }

  removeFromFavorites = (id) => {
    let favorites = this.state.favorites.filter(favoriteId => favoriteId !== id )
    this.setState({favorites})
  }

  findFavorites = () => {

    return this.state.listingList.filter(listing => {

        return this.state.favorites.find(favoriteId => favoriteId === listing.listing_id)

      })
    
  }

  componentDidMount(){
      getAreas()
      .then(areas => {this.setState({ areas })})
      .then(areas => this.state.areas.map(area => {
        return area.listings.map(listing => {
          return fetch(`https://vrad-api.herokuapp.com${listing}`)
          .then(res => res.json())
          .then(listing => {
            this.setState({listingList: [...this.state.listingList, listing]})
          })
        })
      }))
  }

  render() {

    let navBar;
    Object.keys(this.state.user).length === 0 ? navBar = "" : navBar = <NavBar 
    user ={this.state.user} 
    favorites={this.state.favorites} 
    setUserInfo={this.setUserInfo} 
    />


    return(
      <main className='main-section'>
             {navBar}  
        <Switch>
         
          <Route path='/areas/:id/listings/:listingID'render={ ({ match }) => <ListingDetails 
          favorites = {this.state.favorites}  
          addToFavorites = {this.addToFavorites}
          removeFromFavorites = {this.removeFromFavorites}
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
         
          <Route path='/' exact render={ () => <LoginPage setUserInfo={this.setUserInfo} />} />
         
          <Route path = '/favorites' render={ ({ match }) => <ListingDetails 
          addToFavorites = {this.addToFavorites} 
          removeFromFavorites = {this.removeFromFavorites}
          favorites = {this.state.favorites}
          match={ match }
          listings= {this.findFavorites()}
          />} />
        
        </Switch>
      </main>
    )
  }
}

export default App;
