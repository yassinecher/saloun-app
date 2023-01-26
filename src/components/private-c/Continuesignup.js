import React, { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"
import {AuthProvider} from '../../contexts/AuthContext'
import CheckUp from "../public-c/CheckUp"
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
          return  (<>
            <CheckUp/>
          </>
            
          )
         
   
}