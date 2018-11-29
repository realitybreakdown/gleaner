import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <NavLink to='/plants' className='NavBar-link' >PLANTS</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='' className='NavBar-link'>HOME</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='' onClick={props.handleLogout}>LOGOUT, {props.user.name}</NavLink>
    </div>
    :
    <div>
      <NavLink to='/plants' className='NavBar-link' >PLANTS</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='' className='NavBar-link'>HOME</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
  </div>;
  return (
    <div>
      {nav}
    </div>
  );
};

export default NavBar;