import React from 'react';
import Logo from '../../icons/logo.svg';
import Location from '../../icons/icon-location.svg';
import Email from '../../icons/icon-email.svg';
import Phone from '../../icons/icon-phone.svg';
import Facebook from '../../icons/icon-facebook.svg';
import Instagram from '../../icons/icon-instagram.svg';
import Twitter from '../../icons/icon-twitter.svg';

import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Logo}  alt='logo'/>
            <div className='footer-header'>
                <div className='footer-caption'>
                    <div className='spann'>
                    <img src={Location} alt='location' height="32" width="32" /><br />
                    </div>
                <div className='spann2'>we promise to always and we will always<br /> gives our customers the best
                    anyday anytime,<br /> try us and refer us to your friends and famijly.
                </div>
                </div>
                <div className='footer-about'>
                    <div id='footer_about'>
                    <a className='footer-a' href='/' alt='about'>About Us</a><br />
                    <a className='footer-a' href='/' alt='about'>Jobs</a><br />
                    <a className='footer-a' href='/' alt='about'>Press</a><br />
                    <a className='footer-a' href='/' alt='about'>Blog</a>
                    </div>
                    <div id='footer--about'>
                    <a className='footer-a' href='/' alt='about'>Contact Us</a><br />
                    <a className='footer-a' href='/' alt='about'>Terms</a><br />
                    <a className='footer-a' href='/' alt='about'>Privacy</a>
                    </div>
                </div>
            </div>
            <div className='footer2'>
            <div className='footer-contact'>
                <div className='footer__contact'>
                        <img src={Phone} alt='phone' />
                        <span>08179222324</span>
                    </div>
            <div className='footer__contact'>
                        <img src={Email} alt='email' />
                        <span>fylocustomer2022@gmail.com</span>
                    </div>
                    </div>
                    <div className='footer-follow'>
                    <a href='/' alt='follow'>
                        <img className='follow' src={Facebook} alt='media' />
                    </a>
                    <a className='follow' href='/' alt='follow'>
                        <img src={Instagram} alt='media' />
                    </a>
                    <a className='follow' href='/' alt='follow'>
                        <img src={Twitter} alt='media' />
                    </a>
                </div>
            </div>
            <div className='right'>&copy;copyright2020</div>
        </div>
    )
}

export default Footer;
