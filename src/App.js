import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { getAreas, getAreaDetails } from './apiCalls.js';
import LoginPage from './components/LoginPage/loginPage';
import NavBar from './components/NavBar/navBar'
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
    this.setState({user});
  }

  componentDidMount(){
    getAreas()
    .then(data => {
      // console.log(data)
      const areaDetails = data.areas.map(area => {
        // console.log(area.details);
        // getAreaDetails()
        return fetch(`https://vrad-api.herokuapp.com${area.details}`)
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
    return fetch(`https://vrad-api.herokuapp.com${listing}`)
    .then(res => res.json())
    .then(data => console.log(data))
    // .then(listing => this.setState({ listing }))
    .catch(err => console.log(err))
  }

  render() {
      let navBar;
      Object.keys(this.state.user).length === 0 ? navBar = "" : navBar = <NavBar />
    return(
      <main className='main-section'>
             {/* {navBar} */}
             <NavBar />
        <Switch>
          <Route path='/areas/:id/listings' render={ ({ match }) => <ListingContainer 
          listingByArea={this.state.areas.filter(areaListings => 
          areaListings.id === parseInt(match.params.id))}
          match={ match }
          getListings={this.getAreasListings}
          />} />
          <Route path='/areas' render={ () => <AreasContainer areaInfo={this.state.areas}/>} />
          <Route path='/' exact render={ () => <LoginPage setUserInfo={this.setUserInfo} />} />
        </Switch>
      </main>
    )
  }
}

export default App;
