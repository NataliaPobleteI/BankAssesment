import React, { useState } from 'react';
import userImage from './assets/user.jpg'
import "./SideMenu.css" 
import { useNavigate } from 'react-router-dom'
import { FaHome,FaUserAlt,FaPiggyBank ,FaBell,FaBed} from "react-icons/fa";



export const SideMenu = () => {

    let navigate = useNavigate();
 

return(

    <div className="sideMenu">
        <div className="userDataContainer">
            <div>
                <img src={userImage} className="image" />
                </div>
            <div className='userData'>
                <h1 className="text">User name</h1>
                <h1 className="text">@User</h1>
            </div>
        </div>

        <div className="account_balance">
            <h1 className="text">Account Balance</h1>            
            <h1 className="text">$1,681.37</h1>
        </div>

        <div className="buttonsContainer">
            <button className="buttons" onClick = {() => {navigate("/usersettings")}}> 
                <FaHome className='icon'/>
                Home 
            </button>
            <button className="buttons" onClick = {() => {navigate("/myaccount")}}> 
                <FaUserAlt className='icon'/>
                My Account 
            </button>
            <button className="buttons" onClick = {() => {navigate("/datapage")}}> 
                <FaPiggyBank className='icon'/>
                Bank Account 
            </button>
            <button className="buttons"> 
                <FaBell className='icon'/>
                Notifications 
            </button>
            <button className="buttons" onClick = {() => {navigate("/")}}> 
                <FaBed className='icon'/>
                Log Out 
            </button>
                      
        </div>
    </div>
    )
}