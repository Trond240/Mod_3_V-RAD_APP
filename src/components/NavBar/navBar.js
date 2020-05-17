import React from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  console.log(props);
  
  let userName = props.user.name;
  let email = props.user.email;
  let reason = props.user.reason;
  console.log(userName);
  
return (
  <nav className='nav-bar'>
    
    <h1>Welcome <span>{userName}</span> to your {reason} Adventure</h1>  
    <h2>{userName}</h2>
    <h3>{email}</h3>
    <section className='nav-btn-container'>
      <button>Favorites</button>
      <NavLink to= '/areas'>  
        Areas
      </NavLink>
      <NavLink to='/areas/listings'>
        Listings
      </NavLink> 
      <NavLink to='/'>
        Log Out
      </NavLink>
    </section>
</nav>
)





}
export default NavBar
