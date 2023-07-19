import React from 'react';
// import { Link } from 'react-router-dom'
 import "./TopNavbar.css"
 import { useNavigate } from 'react-router-dom'
 import { FaMoneyBillWave} from "react-icons/fa";

 


const TopNavbar = () => {


  let navigate = useNavigate();
 
  
 
 


  return (
    <div className="navbar ">
      <div >

      </div>
        <div >
          <h1 className="elh1">
            <FaMoneyBillWave className='topIcon'/>
            Real World App
          </h1>
        </div>
        
        <div >
         <button id='newButton'  onClick = {() => {navigate("/signup")}}>New</button>
        </div>
      
    </div>
  )
}

export { TopNavbar }