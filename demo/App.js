import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Step from './pages/Step'
import Layout from './Layout'
function App () {
  return (
    <Router history={hashHistory} key={Math.random()} >
      <Route path="/" component={Layout}>
        <IndexRoute component={Step} />
      </Route>
    </Router>
  )
}

export default App
