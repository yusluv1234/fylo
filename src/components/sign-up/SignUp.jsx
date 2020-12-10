import React from 'react';

const SignUp = () => {
    const handleSubmit = event => {
        const formData = new formData(event.target);
        event.preventDefault();
        for (let [key, value] of formData.entries()) {
            console.log(key.value)
        }
    }

    return (
        <div className='sign-up'>
        <form onSubmit={handleSubmit}>
        <input type="text" name="first-name" placeholder="First Name" />
        <input type="text" name="last-name" placeholder="Last Name" />
        <input type="text" name="username" placeholder="Email" />
        <input type="text" name="confirm-email" placeholder="Confirm Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="confirm-password" name="confirm-password" placeholder="Confirm Password" />
        <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default SignUp;
