import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import './SignIn.scss';

const SignIn = () =>{
    const dispatch = useDispatch();
    const data = useSelector((state) => state.auth);
    let history = useHistory();
    const [msg, setMsg] = useState("");
    const [state, setState] = useState({
      email: "",
      password: "",
    });
    useEffect(() => {
      let interval;
      if (data.error) {
        setMsg(data.error.msg);
        interval = setTimeout(() => {
          setMsg("");
        }, 1000);
      }
      if (data.user) {
        setMsg(data.user.msg);
        interval = setTimeout(() => {
          setMsg("");
        }, 1000);
      }
      return () => {
        clearTimeout(interval);
      };
    }, [data]);
    const handleSubmit = (e) => {
      e.preventDefault();
    //   dispatch(loginAction(state));
    };
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value });
    };
    if (data.isAuthenticated) {
      history.push("/dashboard");
    }
    console.log(data);

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




 // const handleSubmit = (event) => {
    //     const formData = new FormData(event.target);
    //     event.preventDefault();
    //     for (let [key, value] of formData.entries()) {
    //         console.log(key, value);
    //     }
    // }