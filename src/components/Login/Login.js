import React, { useState } from 'react'
import { API } from './API'
import style from './login.module.css'
import logo from './../../img/logo.png'

export default function Login({ setToken }) {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async e => {
    const response = await API ({username,password})
    if(response.resultCode === '0'){
      setToken(response.token)
    }else{
      alert(response.message)
    }
  }

  return (
    <div className={style.login}>
      <div className={style.logo}>
        <img src={logo} alt='logo'/>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Ник</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Пароль</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div className={style.submit}>
          <button type="submit">Войти</button>
        </div>
      </form>
      </div>
    </div>
  )
}