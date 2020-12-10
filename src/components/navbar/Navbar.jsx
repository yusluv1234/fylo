import React from 'react';
import Logo from '../../icons/logo.svg'

import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <a href='/home' alt='option'>
                <img src={Logo} alt='alt' />
                </a>
            </div>
            <div className='navbar-option'>
                <a className='href' href='/feature' alt='option'>Features</a>
                <a className='href' href='/team' alt='option'>Team</a>
                <a className='href' href='sign-in' alt='option'>SignIn</a>
                <a className='href' href='sign-up' alt='option'>SignUp</a>
            </div>
        </div>
    )
}

export default Navbar;
