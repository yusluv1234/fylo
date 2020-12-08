import React from 'react';
import QuoteIcon from '../../images/bg-quotes.png';
import Profile1 from '../../images/profile-1.jpg';
import Profile2 from '../../images/profile-2.jpg';
import Profile3 from '../../images/profile-3.jpg';

import './AboutProfile.scss';

const AboutProfile = () => {
    return (
        <div className='aboutprofile'>
            <div className='quote-img'>
            <img src={QuoteIcon} alt='quote' />
            </div>
            <div className='aboutprofile-comment'>
                <div className='aboutprofile-header'>
                    Fylo has improve our team productivity by an order of magnitude.
                    since making the switch our team has become a well-oiled collaboration machine
                </div>
                <div className='aboutprofile-profile'>
                    <div><img src={Profile1} alt='profile' />
                    </div>
                    <div className='aboutprofile-span'><span>Satis Patel</span><br />
                    <span>Founder & CEO, Huddle</span></div>
                </div>
            </div>
            <div className='aboutprofile-comment'>
                <div className='aboutprofile-header'>
                    Fylo has improve our team productivity by an order of magnitude.
                    since making the switch our team has become a well-oiled collaboration machine
                </div>
                <div className='aboutprofile-profile'>
                    <div><img src={Profile2} alt='profile' />
                    </div>
                    <div className='aboutprofile-span'><span>Bruce McKenzle</span><br />
                    <span>Founder & CEO, Huddle</span></div>
                </div>
            </div>
            <div className='aboutprofile-comment'>
                <div className='aboutprofile-header'>
                    Fylo has improve our team productivity by an order of magnitude.
                    since making the switch our team has become a well-oiled collaboration machine
                </div>
                <div className='aboutprofile-profile'>
                    <div><img src={Profile3} alt='profile' />
                    </div>
                    <div className='aboutprofile-span'><span>Iva Boyd</span><br />
                    <span>Founder & CEO, Huddle</span></div>
                </div>
            </div>
        </div>
    )
}

export default AboutProfile;
