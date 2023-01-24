import React from "react"
import Signup from "./public-c/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, MemoryRouter} from "react-router-dom"
import Dashboard from "./private-c/Dashboard"
import Login from "./public-c/Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./public-c/ForgotPassword"
import UpdateProfile from "./private-c/UpdateProfile"
import Bookings from "./private-c/Bookings"
import Search from "./private-c/Search"
import Profile from "./private-c/Profile"
import Continuesingup from "./private-c/Continuesignup"

import Mainf from "./public-c/Main"
import PublicRoute from "./PublicRoute"

function Routs() {
 





  return (

        <Router>
          <AuthProvider>
            <Switch><PublicRoute exact path="/" component={Mainf} />
            <PrivateRoute   path="/Dashboard" component={Dashboard} />
            <PrivateRoute   path="/continuesignup" component={Continuesingup} />
              <PublicRoute path="/signup" component={Signup} />
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/forgot-password" component={ForgotPassword} />

            </Switch>
          </AuthProvider>
        </Router>
     
  )
}

export default Routs
