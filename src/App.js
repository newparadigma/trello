import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Boards from './components/Boards/Boards'
import useToken from './components/Login/useToken'
import Main from './components/Main/Main'

function App() {

  const { token, setToken } = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/boards' element={<Boards />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
