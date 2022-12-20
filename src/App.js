import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Preferences from './components/Preferences/Preferences'
import useToken from './components/Login/useToken'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

function App() {

  const { token, setToken } = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/preferences' element={<Preferences />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
