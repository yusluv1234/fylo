import React from 'react';
import AboutProfile from '../about-profile/AboutProfile';
import Accessible from '../accessible/Accessible';
import Captions from '../captions/Captions';
import Message from '../message/Message';
import Navbar from '../navbar/Navbar';
import Productive from '../productive/Productive';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Accessible />
            <Captions />
            <Productive />
            <AboutProfile />
            <Message />
        </div>
    )
}

export default HomePage;
