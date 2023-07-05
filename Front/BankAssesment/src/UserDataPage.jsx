import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './UserDataPage.css'
import { AccountCard } from './AccountCard'


export const initialAccounts = [
    { name: "O'Hara - Labadie Bank"},
    
  ]


export const UserDataPage = () => {
    
    
 
    const [accounts, setAccounts] = useState(initialAccounts);

  
    const handleCreate = () => {
        setAccounts([
            ...accounts,
            { name: "O'Hara - Labadie Bank"}
          ]);
     
    }
return(

    <div className='containerPage'>
        <div id='accountsContainer'>
            <div id='bankAccountTitle'>
                <h1 className='textAccount' >Bank Account</h1>
                <div>   
                    <button id='createButton' onClick={handleCreate}>Create</button>
                </div>
            </div>
            <div>
            {
                accounts.map((e, i) => {
                        return (
                        <div key={e.id} >
                            { <AccountCard name={e.name}/> }
                        </div>

                )
                })
            }
            </div>
        </div>
    </div>

    )
}