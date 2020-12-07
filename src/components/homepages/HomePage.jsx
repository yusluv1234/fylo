import React from 'react';
import Accessible from '../accessible/Accessible';
import Captions from '../captions/Captions';
import Navbar from '../navbar/Navbar';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Accessible />
            <Captions />
        </div>
    )
}

export default HomePage;
