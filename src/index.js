import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Allset from './views/allset'
import Onboard1 from './views/onboard1'
import Onboard5 from './views/onboard5'
import Onboard4 from './views/onboard4'
import Splash from './views/splash'
import Login from './views/login'
import Home from './views/home'
import Onboard3 from './views/onboard3'
import Register from './views/register'
import Onboard2 from './views/onboard2'
import Forgotpass from './views/forgotpass'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Allset} exact path="/allset" />
        <Route component={Onboard1} exact path="/onboard1" />
        <Route component={Onboard5} exact path="/onboard5" />
        <Route component={Onboard4} exact path="/onboard4" />
        <Route component={Splash} exact path="/" />
        <Route component={Login} exact path="/sign-in1" />
        <Route component={Home} exact path="/home" />
        <Route component={Onboard3} exact path="/onboard3" />
        <Route component={Register} exact path="/register" />
        <Route component={Onboard2} exact path="/onboard2" />
        <Route component={Forgotpass} exact path="/forgotpass" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
