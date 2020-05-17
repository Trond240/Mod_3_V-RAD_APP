import React from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  console.log(props);
  
  let userName = props.user.name;
  let email = props.user.email;
  let reason = props.user.reason;
  let upperCaseReason = reason.replace(/^./, reason[0].toUpperCase())
  console.log(userName);
  
return (
  <nav className='nav-bar'>
    
    <h1>Welcome <span>{userName}</span> to your {upperCaseReason} Adventure</h1>  
    <section className='user-info-container'> 
    <h2>{userName}</h2>
    <h3>{email}</h3>
    </section>
    <section className='nav-btn-container'>
    <NavLink to='/favorites'>
      <span>{`${props.favorites.length}`}</span>
      {props.favorites.length === 1 ? ` Favorite` : ` Favorites`}
    </NavLink>
      <NavLink to= '/areas'>  
        Areas
      </NavLink>
      <NavLink to='/areas/listings'>
        Listings
      </NavLink> 
      <NavLink to='/'>
        <button className='logout-btn' onClick={()=> props.setUserInfo({})}>Log Out</button>
      </NavLink>
    </section>
</nav>
)





}
export default NavBar
