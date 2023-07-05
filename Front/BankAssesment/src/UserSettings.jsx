import React, { useState } from "react"
import { SideMenu } from './SideMenu'
import { TopNavbar } from './TopNavbar'
import './UserSettings.css'
import { useNavigate } from 'react-router-dom'

export const UserSettings = () => {

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        username: "",
        dni: "",
    })

    function handleSubmit() {
        console.log(values) 
        setError(validation(values));
    }

    function handleChange(e) {
        setValues({...values, 
            [e.target.name]: e.target.value 
        })
    }
    return (
        <div>
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
                    <input className="first-name" type="text" placeholder="First Name" id="firstname" name="firstname" onChange={handleChange} />

                    <label>Last Name</label>
                    <input  className="last-name" type="text" placeholder="Last Name" id="lastname" name="lastname" onChange={handleChange}/>

                    <label>Username</label>
                    <input className="username" type="text" placeholder="Username" id="username" name="username" onChange={handleChange}/>

                    <label>Password</label>
                    <input className="password" type="text" placeholder="password" id="password" name="password" onChange={handleChange}/>

                
                    <button className="save-button" type="submit" >SIGN UP</button>
                </form>
            </div>
        </div>
    )
}