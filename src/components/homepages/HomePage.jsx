import React from 'react';
import Accessible from '../accessible/Accessible';
import Navbar from '../navbar/Navbar';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Accessible />
        </div>
    )
}

export default HomePage;
