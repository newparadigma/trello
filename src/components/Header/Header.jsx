import React from 'react'
import style from './header.module.css'
import logo from './../../img/logo.png'

const Header = () => {

    const logout = () => {
        localStorage.clear()
        window.location.reload()
      }

    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <img src={logo} alt='logo' />
                </div>
                <div className={style.href}>Возможности</div>
                <div className={style.href}>Решения</div>
                <div className={style.href}>Планы</div>
                <div className={style.href}>Цены</div>
                <div className={style.href}>Ресурсы</div>
                <button className={style.btn} onClick={logout} >выйти</button>
            </div>
        </div>
    )
}

export default Header