require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'

import Index from './components/Index'
import Header from './components/header/header'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/header" />
      <Route path="header" component={Header} />
    </Route>
  </Router>
), document.getElementById('root'))