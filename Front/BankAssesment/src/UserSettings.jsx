import React, { useState , useEffect } from "react"
import { SideMenu } from './SideMenu'
import { TopNavbar } from './TopNavbar'
import './UserSettings.css'
import { useNavigate } from 'react-router-dom'
import UserService from './services/UserServices';

export const UserSettings = () => {

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    })

    function handleSubmit() {
        console.log(values) 
        setError(validation(values));
    }
    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  loadValues()
        return () => { ignore = true; }
        },[]);
        

    function loadValues() {
        fetch('http://localhost:8082/api/user/1')
      .then(response => response.json())
      .then(data => {
        setValues(data);    
      })
    }

    function handleChange(e) {
        fetch('http://localhost:8082/api/user/1')
      .then(response => response.json())
      .then(data => {
        setValues(data);    
      })
    }
    return (
        <div >
            <SideMenu/>
            <TopNavbar/>
            <h2>User Settings</h2>
            <div className="containerPage">
                <form className="user-settings-form" onSubmit={(e)=> 
                {
                    e.preventDefault();
                    handleSubmit(values)
                }}>
                    <label>First Name</label>
                    <input className="first-name" type="text" placeholder={values.firstname} id="firstname" name="firstname" onChange={handleChange} />

                    <label>Last Name</label>
                    <input  className="last-name" type="text" placeholder={values.lastname} id="lastname" name="lastname" onChange={handleChange}/>

                    <label>Username</label>
                    <input className="username" type="text" placeholder={values.username} id="username" name="username" onChange={handleChange}/>

                    <label>Password</label>
                    <input className="password" type="text" placeholder={values.password}id="password" name="password" onChange={handleChange}/>

                
                    <button className="save-button" type="submit" >SIGN UP</button>
                </form>
            </div>
        </div>
    )
}