import React,{useState,useEffect} from "react"
import {  BrowserRouter as Router, Link, Route, Switch, NavLink,Outlet ,useHistory} from "react-router-dom"

import Bookings from "./Bookings"
import Search from "./Search"
import Profile from "./Profile"
import Navigator from "./navigator"
import { AuthProvider } from "../../contexts/AuthContext"
import { useAuth } from "../../contexts/AuthContext"

import PrivateRoute from "../PrivateRoute"
import UpdateProfile from "./UpdateProfile"


export default function Dashboard() {

 const {checkstat} =useAuth()
 const [stat, setStat] = useState("");
 const history = useHistory()
 const promises = []


promises.push(checkstat())

Promise.all(promises)
.then((re) => {
  console.log(re)
  if(re[0]=="Waiting for username"){
    history.push("/continuesignup")
   }
   else{
    history.push("/store")
   }
   
})
.catch(() => {

})
.finally((re) => {

})



 useEffect(() => {
  setTimeout(() => {
  if(stat=="Waiting for username"){
    
  }
  }, 1000);
});




  return (
  <>
   <h1>Home</h1>
   <Router>
          <AuthProvider>
          <Navigator/>
            <Switch>
              <PrivateRoute path="/dashboard/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/dashboard/bookings" component={Bookings} />
              <PrivateRoute path="/dashboard/Search" component={Search} />
              <PrivateRoute path="/dashboard/profile" component={Profile} /> 
              <PrivateRoute path="/dashboard/updateProfile" component={UpdateProfile} />
            </Switch>
          </AuthProvider>
        </Router>     

   </>
  );
  
}
