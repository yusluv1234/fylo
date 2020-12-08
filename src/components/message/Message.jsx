import React from 'react';

import './Message.scss';

const Message = () => {
    return (
        <div className='message'>
            <div className='message-titles'>
                <div className='message-tittle'>Get early access today</div>
                <div id='message-comment'>Its only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                    questions, our support team will be happy to help you.
                </div>
            </div>
            <div className='message-button'>
            <input id='text' type='text' placeholder='info@example.com' />
            <a className='btn-nn' href='/' alt='btn-nn'>Get Started For Free</a>
            </div>
        </div>
    )
}

export default Message;
