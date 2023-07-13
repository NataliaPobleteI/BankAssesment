import React, { useState,useEffect } from "react"
import {FaMoneyBillWave} from "react-icons/fa";
import Validation from "./validation";
import { useNavigate } from 'react-router-dom'
import './Register.css'

export const Register = () => {
  
  let navigate = useNavigate();

  const [values, setValues] = useState({
    type: 'register',
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    isValid: null,
  })

  function handleChange(e) {
    setValues({...values, 
      [e.target.name]: e.target.value 
    })
  }

  const [errors, setError] = useState({})

  useEffect(() => {

    if (errors.isValid) {
      navigate('/usersettings')
      console.log(errors) 
    }

  },[errors])

  function handleSubmit() {
      console.log(values) 
      
      setError(Validation(values));
      console.log(errors) 

      
      
    }

    return (
      <div className="auth-form-container">
       
          <div className="title-div">
            <h1 className="title">Real World App</h1>
            <FaMoneyBillWave className="logo"/>
          </div>
          <h3 >Sign Up</h3>
         
          <form className="register-form" onSubmit={(e)=> {
            e.preventDefault();
             handleSubmit(values)
          }
            }>
              
              <label>First Name</label>
              <input type="text" placeholder="First Name" id="firstname" name="firstname" onChange={handleChange} />
              {errors.firstname && <p style={{color: "orange", fontSize: "13px"}}>{errors.firstname}</p>}

              
              <label>Last Name</label>
              <input  type="text" placeholder="Last Name" id="lastname" name="lastname" onChange={handleChange}/>
              {errors.lastname && <p style={{color: "orange", fontSize: "13px"}}>{errors.lastname}</p>}

              
              <label>Username</label>
              <input  type="text" placeholder="Username" id="username" name="username" onChange={handleChange}/>
              {errors.username && <p style={{color: "orange", fontSize: "13px"}}>{errors.username}</p>}

                          
              <label>Password</label>
              <input  type="password" placeholder="*******" id="password" name="password" onChange={handleChange}/>
              {errors.password && <p style={{color: "orange", fontSize: "13px"}}>{errors.password}</p>}  
              
              
              <label>Confirm Password</label>
              <input  type="password" placeholder="*******" id="confirmpassword" name="confirmpassword" onChange={handleChange}/>
              {errors.confirmpassword && <p style={{color: "orange", fontSize: "13px"}}>{errors.confirmpassword}</p>}
              
              <button className="sign-up-button" type="submit" >SIGN UP</button>
          </form>
      </div>
    )
}