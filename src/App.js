import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';


function App() {

  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Trello</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/preferences' element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
