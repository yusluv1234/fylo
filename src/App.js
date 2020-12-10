import React from 'react'
// import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import HomePage from './components/homepages/HomePage';
// import SignIn from './components/sign-in/SignIn';
// import SignUp from './components/sign-up/SignUp';

import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/sign-in' component={SignIn} /> */}
        {/* <Route exact path='/sign-up' component={SignUp} /> */}
        {/* </Switch> */}
      {/* // </Router> */} 
      <HomePage />
    </div>
  );
}

export default App;
