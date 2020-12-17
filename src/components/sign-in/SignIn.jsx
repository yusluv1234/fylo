import React from 'react';

import './SignIn.scss';

const SignIn = () =>{
    const handleSubmit = (event) => {
        const formData = new FormData(event.target);
        event.preventDefault();
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }

    return (
        <div className='sign-in'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label> <br/>
        <input type="text" name="username" placeholder="Email" /> <br/>
        <label htmlFor="">Password</label> <br/>
        <input type="password" name="password"
        placeholder="Password" /> <br/>
        <button type="submit">Login</button>
        </form>
        </div>
        )
        }

export default SignIn;
