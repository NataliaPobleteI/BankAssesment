import React from 'react'
import './TransferCard.css'
import userImage from './assets/transferUser.png'




export const TransferCard = ({name, to, money}) => {
  
    return (
        <div id='transfer'>
            <div className="imgContainer">   
                <img src={userImage} className="image"/>
            </div>
            <div className='fdf'>
                <p className='greyText tranferText '>
                    <b>{name} </b> paid <b>{to}</b>
                </p>
                
                <p className='greyText  payment' >
                    Payment: jbafFECAcnnsduef to nfek5nwWf4
                </p>
                
            </div>
            <div className='money'>
                <h1>{money}</h1>
            </div>
        </div>
    )
  }