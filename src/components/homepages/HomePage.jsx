import React from 'react';
import AboutProfile from '../about-profile/AboutProfile';
import Accessible from '../accessible/Accessible';
import Captions from '../captions/Captions';
import Message from '../message/Message';
import Productive from '../productive/Productive';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='home-page'>
            <Accessible />
            <Captions />
            <Productive />
            <AboutProfile />
            <Message />
        </div>
    )
}

export default HomePage;
