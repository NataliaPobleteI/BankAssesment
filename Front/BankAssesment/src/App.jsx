import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from "./Login";
import { Register } from "./Register";
import { SideMenu } from './SideMenu';
import { TopNavbar } from './TopNavbar';
import { UserDataPage } from './UserDataPage';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <>
      <div className="App">
        
        <div>
        <SideMenu/>
        </div>
        <div>
          <TopNavbar/>
          <UserDataPage/>
        </div>
        
      </div>
    </>
  )
}
export default App
