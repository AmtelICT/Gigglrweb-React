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
import Onboard4 from './views/onboard4'
import Onboard5 from './views/onboard5'
import Login from './views/login'
import Splash from './views/splash'
import Onboard1 from './views/onboard1'
import Onboard3 from './views/onboard3'
import HomeDash from './views/home-dash'
import Onboard2 from './views/onboard2'
import SplashScreen from './views/splash-screen'
import Register from './views/register'
import Board1 from './views/board1'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Allset} exact path="/allset" />
        <Route component={Onboard4} exact path="/onboard4" />
        <Route component={Onboard5} exact path="/onboard5" />
        <Route component={Login} exact path="/sign-in1" />
        <Route component={Splash} exact path="/" />
        <Route component={Onboard1} exact path="/onboard1" />
        <Route component={Onboard3} exact path="/onboard3" />
        <Route component={HomeDash} exact path="/home-dash" />
        <Route component={Onboard2} exact path="/onboard2" />
        <Route component={SplashScreen} exact path="/splash-screen" />
        <Route component={Register} exact path="/register" />
        <Route component={Board1} exact path="/board1" />
        <Route component={Home} exact path="/home" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
