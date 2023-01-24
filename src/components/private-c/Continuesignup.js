import React, { useState,useEffect } from "react"


export default function Continuesingup(){
const [stage,setStage] = useState(1);




   
          return  (<>
            <h1>Continue</h1>
            <label>add number </label><br/>
            <input type="text" />
            <input type="submit" value="Next" />
        
            </>)
         
   
}