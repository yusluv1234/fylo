import React from 'react';
import Illustration from '../../images/illustration-intro.png';

import './Accessible.scss'

const Accessible = () => {
    return (
        <div className='accessible'>
            <div className='access-image'>
                <a href='/feature'>
                    <img src={Illustration} alt='illustration' />
                </a>
            </div>
            <div className='access-comment'>
                <div className='comment-header'>
            All your files in one secure location,<br /> accessible anywhere.
                </div>
                <div className='comment-p'> 
                    Fylo stores all your most important files in one secure location,<br />
                    Access them anywhere you need, share and collaborate with<br /> friends family and co-workers
                </div>
                <div className='button'>  <a className='btn' href='/home' alt='btn'>Get Started</a> </div>

            </div>
        </div>
    )
}

export default Accessible;
