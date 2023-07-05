import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 



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
        
      <BrowserRouter>
      <SideMenu/>
      <TopNavbar/>
        <Routes>
          <Route path="/signup" element={<Login/>} />
          <Route path='/' element={<UserDataPage />} />
        </Routes>
      </BrowserRouter>

        
        
        
        
       
        
        
      </div>
    </>
  )
}
export default App
