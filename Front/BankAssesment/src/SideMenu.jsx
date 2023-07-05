import React, { useState } from 'react';
import reactLogo from './assets/user.jpg'
import "./SideMenu.css" 
import { useNavigate } from 'react-router-dom'

export const SideMenu = () => {

    let navigate = useNavigate();
 

return(

    <div className="sideMenu">
        <div className="userDataContainer">
            <div>
                <img src={reactLogo} className="image" />
                </div>
            <div >
                <h1 className="text">User name</h1>
                <h1 className="text">@User</h1>
            </div>
        </div>

        <div className="account_balance">
            <h1 className="text">$1,681.37</h1>
            <h1 className="text">Account Balance</h1>            
        </div>

        <div className="buttonsContainer">
            <button className="buttons" onClick = {() => {navigate("/usersettings")}}> Home </button>
            <button className="buttons" onClick = {() => {navigate("/myaccount")}}> My Account </button>
            <button className="buttons" onClick = {() => {navigate("/datapage")}}> Bank Account </button>
            <button className="buttons"> Notifications </button>
                      
        </div>
    </div>
    )
}