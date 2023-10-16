import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import SignIn from './views/sign-in'
import Done from './views/done'
import Onboard4 from './views/onboard4'
import Signup from './views/signup'
import Onboard5 from './views/onboard5'
import Page from './views/page'
import Splash from './views/splash'
import Onboard1 from './views/onboard1'
import Onboard3 from './views/onboard3'
import HomeDash from './views/home-dash'
import Onboard2 from './views/onboard2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={Done} exact path="/done" />
        <Route component={Onboard4} exact path="/onboard4" />
        <Route component={Signup} exact path="/signup" />
        <Route component={Onboard5} exact path="/onboard5" />
        <Route component={Page} exact path="/page" />
        <Route component={Splash} exact path="/" />
        <Route component={Onboard1} exact path="/onboard1" />
        <Route component={Onboard3} exact path="/onboard3" />
        <Route component={HomeDash} exact path="/home-dash" />
        <Route component={Onboard2} exact path="/onboard2" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
