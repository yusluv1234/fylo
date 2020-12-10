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
                <a className='href' href='login' alt='option'>Login</a>
                <a className='href' href='login' alt='option'>
                    <select style={{
                        background: 'none', fontSize: '20px', border: 'none', color: 'white'
                    }} name="" id="">
                        <option href='/sign-in' value="">Login</option>
                        <option href='/sign-up' value="">signUp</option>
                    </select>
                </a>
            </div>
        </div>
    )
}

export default Navbar;
