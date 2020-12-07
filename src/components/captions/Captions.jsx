import React from 'react';
import AccessAnywhere from '../../icons/icon-access-anywhere.svg';
import Security from '../../icons/icon-security.svg';
import Collaboration from '../../icons/icon-collaboration.svg';
import StoreFiles from '../../icons/icon-any-file.svg';

import './Captions.scss';

const Captions = () => {
    return (
        <div className='captions'>
                <a className='caption-component' href='/' alt='href'>
                <div className='caption-icons'>
                    <img src={AccessAnywhere} alt='access' />
                </div>
                <div className='caption-comment'>Access your files, anywhere</div>
                <div className='caption-p'>The ability to use smartphone, tablet or computer<br /> to access your account means
                means your files follow you <br />everywhere</div>
                </a>
                <a className='caption-component' href='/' alt='href'>
                <div className='caption-icons'>
                    <img src={Security} alt='access' />
                </div>
                <div className='caption-comment'>Security you can trust</div>
                <div className='caption-p'>2-factor authentication and user control encription<br />
                 are just a couple of the security features ate allow<br />to help secure your life</div>
                </a>
                <a className='caption-component' href='/' alt='href'>
                <div className='caption-icons'>
                    <img src={Collaboration} alt='access' />
                </div>
                <div className='caption-comment'>Real-time collaboration</div>
                <div className='caption-p'>securely share files and folders with friends, family<br />
                colleagues for live collaboration. No email attachments<br /> required</div>
                </a>
                <a className='caption-component' href='/' alt='href'>
                <div className='caption-icons'>
                    <img src={StoreFiles} alt='access' />
                </div>
                <div className='caption-comment'>Store any types of files</div>
                <div className='caption-p'>whether you're sharing holidays photos or work<br />
                documents, fylo has you covered allowing for all the files<br />
                types to be securely stored and shared</div>
                </a>
            </div>
                )
}

export default Captions;
