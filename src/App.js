import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './screens/Home'
import Login from './screens/Login'
import SignIn from './screens/SignIn'
import ForgetPassword from './screens/ForgetPassword'
import Welcome from './screens/Welcome'

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgetpassword" component={ForgetPassword} />
          <Route exact path="/signin" component={SignIn} />
      </div>
    </Router>
  );
}

export default App;