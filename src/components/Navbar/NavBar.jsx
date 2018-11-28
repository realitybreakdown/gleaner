import React from 'react';
import { NavLink} from 'react-router-dom';


const NavBar = (props) => {
  return (
      <div>
        <nav>
          <NavLink to='/plants' className='NavBar-link' >PLANTS</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <NavLink to='' className='NavBar-link'>HOME</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
        </nav>
      </div>
  );
};

export default NavBar;