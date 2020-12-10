import React from 'react';

const SignUp = () => {
    const handleSubmit = event => {
        const formData = new formData(event.target);
        event.preventDefault();
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }
    return (
        <div className='sign-up'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">First Name
        <input type="text" name="first-name" placeholder="First Name" />
        </label><br />
        <label htmlFor="">Last name
        <input type="text" name="last-name" placeholder="Last Name" />
        </label><br />
        <label htmlFor="">User Name
        <input type="text" name="username" placeholder="Username" />
        </label><br />
        <label htmlFor="">Email
        <input type="text" name="username" placeholder="Email" />
        </label><br />
        <label htmlFor="">Confirm Email
        <input type="text" name="confirm-email" placeholder="Confirm Email" />
        </label><br />
        <label htmlFor="">Password
        <input type="password" name="password" placeholder="Password" />
        </label><br />
        <label htmlFor="">Confirm Password
        <input type="confirm-password" name="confirm-password" placeholder="Confirm Password" />
        </label><br />
        <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default SignUp;
