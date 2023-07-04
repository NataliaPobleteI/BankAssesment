import React, { useState } from 'react';
import reactLogo from './assets/user.jpg'
import "./SideMenu.css" 

export const SideMenu = () => {


return(

    <div>
        <div class="userDataContainer">
            <div>
                <img src={reactLogo} class="image" />
                </div>
            <div >
                <h1>User name</h1>
                <h1>@User</h1>
            </div>
        </div>

        <div class="account_balance">
            <h1>$1,681.37</h1>
            <h1>Account Balance</h1>            
        </div>

        <div class="buttons">
            <button> Home </button>
            <button> My Account </button>
            <button> Bank Account </button>
            <button> Notifications </button>
                      
        </div>





        
    </div>



)

  





}