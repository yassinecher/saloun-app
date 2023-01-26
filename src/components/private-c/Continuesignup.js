import React, { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"
import {AuthProvider} from '../../contexts/AuthContext'
import Store from "./Store"

export default function Continuesingup(){

const [stage,setStage] = useState()
const [username,setUsername]=useState()
const [phoneNumber,setPhone]=useState()
const history = useHistory()
const user={
  username : 'ahmed',
  phone:111
}

function checkUp(e){
  e.preventDefault()
  let msg = "correct"
  let error = "error"
  if(username===user.username){
    history.push("/store")
   return (msg)
  }else{
    console.log(error)
    return error
  }
  }

          return  (<>
            <h1>Continue</h1>
            <div style={{display:'inline'}}>
              <label>Username Please</label><br/>
              <input type="text" placeholder="username..." value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
              <label>Phone Number Please</label><br/>
              <input  type="text" placeholder="phone number..." value={phoneNumber} onChange={(e)=>setPhone(e.target.value)}/><br>
              </br>
              <input type="button" value="Next" style={{marginTop:9}} onClick={checkUp} className="btn btn-primary"/>
            </div>            
          </>
          )
         
   
}