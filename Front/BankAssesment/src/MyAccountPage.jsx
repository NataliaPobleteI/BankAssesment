import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MyAccountPage.css'
import { AccountCard } from './AccountCard'
import { TransferCard } from './TransferCard'


export const initialTransfer = [
    { name: "Arely Kertzman", to:"Edgar Johns", money:"-$259.71"},
    { name: "Ibrahim Dickens", to:"Edgar Johns", money:"-$140.36"},
    { name: "Edgar Johns", to:"Ibrahim Dickens", money:"-$363.14"},
    
  ]


export const MyAccountPage = () => {
    
     
return(

    <div className='containerPage'>
        <div id='accountsContainer'>
            <div id='dropDown'>
                <select id="dateDropdown">
                    <option>Date: All</option>
                    <option>Date: Last hour</option>
                    <option>Date: 24 hours</option>
                    <option>Date: Last Month</option>
                </select>
                <select id="amountDorpdown">
                    <option>Amount: $0-$100</option>
                    <option>Amount: $100-$1,000</option>
                    <option>Amount: $1,000-$10,000</option>
                </select>
            </div>
            <h2 className='greyText'> Personal </h2>
            <div>
            {
                initialTransfer.map((e, i) => {
                        return (
                        <div key={e.id} >
                            { <TransferCard name={e.name} to={e.to} money = {e.money}/> }
                        </div>

                )
                })
            }
            </div>
        </div>
    </div>

    )
}