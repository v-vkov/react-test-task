import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
           <NavLink to='/main' className='navbar'>Main Page</NavLink>
            <NavLink to='/posts' className='navbar'>Posts Page</NavLink>
            <NavLink to='/info' className='navbar'>About us</NavLink>
            <NavLink to='/contact' className='navbar'>Contact us</NavLink>
        </div>
    )
}

export default Navbar;
