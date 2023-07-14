import React, { useEffect, useState } from "react"
import {FaMoneyBillWave} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Validation from "./validation";
import './Login.css'


export const Login = () => {

  let navigate = useNavigate();
  
  const [values, setValues] = useState({
    type: 'login',
    username: "",
    password: "",
    isValid: null,
  })


  

  function handleChange(e) {
    setValues({...values, 
      [e.target.name]: e.target.value 
    })
  }

  const [errors, setError] = useState({
    isValid: false,
  })

  useEffect(() => { //componentDidMount
    console.log(values.isValid) 
    if (values.isValid) {
      navigate('/usersettings')
      console.log(errors) 
    }

  },[errors])

  

  function handleSubmit() {
      
      setError(Validation(values));
        
    }

    return (
      <div className="auth-form-container">
       
          <div className="title-div">
            <h1 className="title">Real World App</h1>
            <FaMoneyBillWave className="logo"/>
          </div>
          <h3 >Log in</h3>
         
          <form className="login-form" onSubmit={(e)=> {
            e.preventDefault();
             handleSubmit(values)
          }
            }>

              <label>Username</label>
              <input  type="text" placeholder="Username" id="username" name="username" onChange={handleChange}/>
              {errors.username && <p style={{color: "orange", fontSize: "13px"}}>{errors.username}</p>}
              
              <label>Password</label>
              <input  type="password" placeholder="*******" id="password" name="password" onChange={handleChange}/>
              {errors.password && <p style={{color: "orange", fontSize: "13px"}}>{errors.password}</p>}
              
              <button 
              className="sign-in-button" 
              type="submit" 
              name="sign-in"
              disabled={values.username.length<1 ? true : false}
              >SIGN IN</button>
          </form>
      </div>
    )
}