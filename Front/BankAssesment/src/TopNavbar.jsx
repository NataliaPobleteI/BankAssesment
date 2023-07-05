import React from 'react';
// import { Link } from 'react-router-dom'
 import "./TopNavbar.css"
 import { useNavigate } from 'react-router-dom'

 


const TopNavbar = () => {


  let navigate = useNavigate();
 
  
 
 


  return (
    <div className="navbar ">
      <div >

      </div>
        <div >
          <h1 className="elh1">Real World App</h1>
        </div>
        
        <div >
         <button id='newButton'  onClick = {() => {navigate("/signup")}}>New</button>
        </div>
      
    </div>
  )
}

export { TopNavbar }