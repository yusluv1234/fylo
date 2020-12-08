import React from 'react';
import IllustrationStay from '../../images/illustration-stay-productive.png';
// import Favicon from '../../images/favicon-32x32.png';

import './Productive.scss'

const Productive = () => {
    return (
        <div className='productive'>
            <div className='productive-image'>
                <img src={IllustrationStay} alt='stay' />
            </div>
            <div className='productive-comment'>
            <div className='comment-nav'>
                Stay productive, Wherever you go
            </div>
            <div className='comment-text'>
                Never let location be an issue when accessing your files. fylo has you
                covered for all your file storage needs.
            </div>
            <div className='comment-text2'>
                Securely share files and folders with friends, family and colleagues for live
                collaboration. No email attachments required.
            </div>
            <a className='works' href='/www.google.com' alt='work'>see how Fylo works
            </a>
            </div>
        </div>
    )
}

export default Productive;
