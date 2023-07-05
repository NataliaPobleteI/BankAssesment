import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <>
      <div className="App">
        {
          <Register/>
        }
      </div>
    </>
  )
}
export default App
