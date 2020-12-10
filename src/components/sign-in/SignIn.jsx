import React from 'react';

const SignIn = () => {
    return (
        <div className='sign-in'>
            <div className='sign-in-message'>
                Welcome to Fylo sign in to continue 
                <span>don't have an account please <a href="/sign-up" alt='sign-up'>SignUp</a></span>
            </div>
        </div>
    )
}

export default SignIn;
