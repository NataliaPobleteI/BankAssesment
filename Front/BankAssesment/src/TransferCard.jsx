import React from 'react'
import './TransferCard.css'
import userImage from './assets/transferUser.png'




export const TransferCard = ({name}) => {
  
    return (
        <div id='transfer'>
            <div className="imgContainer">   
                <img src={userImage} className="image"/>
            </div>
            <div className='fdf'>
                <p className='greyText tranferText '>
                    <b>Arely Kerzmann </b> paid <b>Edgar Johns</b>
                </p>
                
                <p className='greyText  payment' >
                    Payment: jbafFECAcnnsduef to nfek5nwWf4
                </p>
                
            </div>
            <div className='money'>
                <h1>-$259.71</h1>
            </div>
        </div>
    )
  }