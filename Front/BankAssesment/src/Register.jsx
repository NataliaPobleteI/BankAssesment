import React, { useState } from "react"
import {FaMoneyBillWave} from "react-icons/fa";
import validation from "./validation";
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  
  let navigate = useNavigate();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  })

  function handleChange(e) {
    setValues({...values, 
      [e.target.name]: e.target.value 
    })
  }

  const [errors, setError] = useState({})

  function handleSubmit() {
      console.log(values) 
      setError(validation(values));
        
    }

    return (
      <div className="auth-form-container">
       
          <div className="title-div">
            <h2 className="title">Real World App</h2>
            <FaMoneyBillWave className="logo"/>
          </div>
          <h3 >Sign Up</h3>
         
          <form className="register-form" onSubmit={(e)=> {
            e.preventDefault();
             handleSubmit(values)
          }
            }>
              {errors.firstname && <p style={{color: "red", fontSize: "13px"}}>{errors.firstname}</p>}
              <label>First Name</label>
              <input type="text" placeholder="First Name" id="firstname" name="firstname" onChange={handleChange} />

              {errors.lastname && <p style={{color: "red", fontSize: "13px"}}>{errors.lastname}</p>}
              <label>Last Name</label>
              <input  type="text" placeholder="Last Name" id="lastname" name="lastname" onChange={handleChange}/>

              {errors.username && <p style={{color: "red", fontSize: "13px"}}>{errors.username}</p>}
              <label>Username</label>
              <input  type="text" placeholder="Username" id="username" name="username" onChange={handleChange}/>

              {errors.password && <p style={{color: "red", fontSize: "13px"}}>{errors.password}</p>}              
              <label>Password</label>
              <input  type="password" placeholder="*******" id="password" name="password" onChange={handleChange}/>
              
              {errors.confirmpassword && <p style={{color: "red", fontSize: "13px"}}>{errors.confirmpassword}</p>}
              <label>Confirm Password</label>
              <input  type="password" placeholder="*******" id="confirmpassword" name="confirmpassword" onChange={handleChange}/>
              
              <button className="sign-up-button" type="submit" onClick = {() => {navigate("/usersettings")}}>SIGN UP</button>
          </form>
      </div>
    )
}