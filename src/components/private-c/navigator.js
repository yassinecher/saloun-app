import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { BrowserRouter as Router, Link, Route, Switch, NavLink, Outlet, useHistory } from "react-router-dom"

import Bookings from "./Bookings"
import Search from "./Search"
import Profile from "./Profile"
import Dashboard from "./Dashboard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faSearch , faBook,faPerson} from '@fortawesome/free-solid-svg-icons'
import "../../style/main.css"
export default function Navigator() {

  return (

    <div>
        <div className="container fixed-bottom  ">
<nav className="navbar-light bg-light text-dark navb">


          <div className="row">
           
              <Link  className="c-col col" to="/dashboard"><FontAwesomeIcon className=" text-dark" icon={faHome} /></Link>
           
            
              <Link  className="c-col col" to="/dashboard/bookings"><FontAwesomeIcon className=" text-dark"  icon={faBook} /></Link>
           
           
              <Link className="c-col col" to="/dashboard/search"><FontAwesomeIcon className=" text-dark"  icon={faSearch} /></Link>
            
      
              <Link  className="c-col col" to="/dashboard/profile"><FontAwesomeIcon className=" text-dark"  icon={faPerson} /></Link>


          </div>
    

          </nav>

          
        </div>





    </div>

  );
}
