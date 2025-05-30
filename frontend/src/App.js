import React from 'react'
import Messenger from './pages/Messenger'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register.js'
import Login from './pages/Login.js'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <main className='bg-[#2E2E2E] '>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Messenger />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </main>
  )
}

export default App
