import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from "./Register";
import { UserDataPage } from './UserDataPage';
import { MyAccountPage } from './MyAccountPage';
import { UserSettings } from './UserSettings';
import { Login } from './Login';


function App() {
  // serviceWorker.unregister();
  return (
    <div className="App">
      {/* <UserComponent/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
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
