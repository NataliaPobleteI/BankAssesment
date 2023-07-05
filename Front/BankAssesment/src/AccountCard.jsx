import React from 'react'
import './AccountCard.css'




export const AccountCard = ({name}) => {
  
    return (
        <div id='account'>
                <h2 >{name}</h2>
                <div>   
                    <button id='deleteButton' >Delete</button>
                </div>
            </div>
    )
  }


