import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from "./Register";
import { UserDataPage } from './UserDataPage';
import { MyAccountPage } from './MyAccountPage';
import { UserSettings } from './UserSettings';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/usersettings" element={<UserSettings />} />
          <Route path="/myaccount"element={<MyAccountPage/>}/>
          <Route path="/datapage" element={<UserDataPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App
