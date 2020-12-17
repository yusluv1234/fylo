import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import HomePage from './components/homepages/HomePage';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
       <Router>
         <Navbar />
        <Switch>
        <Route exact path='/homepage' component={HomePage} />
        <Route exact path='/sign-in' component={SignIn} /> 
        <Route exact path='/sign-up' component={SignUp} /> 
        </Switch>
        <Footer />
       </Router>
    </div>
  );
}

export default App;
