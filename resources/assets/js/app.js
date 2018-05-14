require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';



import Login from './components/Login';
import Register from './components/Register';
render((
    <Router history={browserHistory}>
              <Route path="/" component={Login} />
              <Route path="/register" component={Register} />
            </Router>
        ), document.getElementById('example')); 
