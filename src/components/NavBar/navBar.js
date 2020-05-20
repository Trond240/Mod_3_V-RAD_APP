import React from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = (props) => {
  
  let userName = props.user.name;
  let email = props.user.email;
  let reason = props.user.reason;
  let upperCaseReason = reason.replace(/^./, reason[0].toUpperCase())
  
  return (
    <nav className='nav-bar'>
      <h1>Welcome <span>{userName}</span> to your {upperCaseReason} Adventure</h1>  
      <section className='user-info-container'> 
        <h2>{userName}</h2>
        <h3>{email}</h3>
      </section>
    <section className='nav-btn-container'>
      <NavLink to='/favorites'>
          <button className='nav-btn' disabled={props.favorites.length === 0}> {`${props.favorites.length}`} {props.favorites.length > 0 ? ` Favorites` : `No Favorites`}</button>
      </NavLink>
      <NavLink to= '/areas'>  
        <button className='nav-btn'>Areas</button>  
      </NavLink>
      <NavLink to='/areas/listings'>
        <button className='nav-btn'>Listings</button>
      </NavLink> 
      <NavLink to='/'>
        <button className='nav-btn' onClick={()=> props.setUserInfo({})}>Log Out</button>
      </NavLink>
    </section>
  </nav>
)

}

export default NavBar

NavBar.propTypes = {
  user: PropTypes.object,
  favorites: PropTypes.array,
  setUserInfo: PropTypes.func
}