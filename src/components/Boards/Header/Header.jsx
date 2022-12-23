import React from 'react'
import logo from '../../../img/headerloading.gif'
import style from './Header.module.css'
import DownImage from '../../../img/DownIcon.svg'
import { HandySvg } from 'handy-svg'
import Ring from '../../../img/ring.svg'
import Question from '../../../img/question.svg'
import User from '../../../img/user.png'


const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div><img src={logo} alt='logo' /></div>
        <div className={style.ref}>
          <span className={style.text}>Рабочие пространства</span>
          <span><HandySvg src={DownImage} className={style.down} width='15' height='15' /></span>
        </div>
        <div className={style.ref}>
          <span className={style.text}>Недавние</span>
          <span><HandySvg src={DownImage} className={style.down} width='15' height='15' /></span>
        </div>
        <div className={style.ref}>
          <span className={style.text}>В избранном</span>
          <span><HandySvg src={DownImage} className={style.down} width='15' height='15' /></span>
        </div>
        <div className={style.ref}>
          <span className={style.text}>Шаблоны</span>
          <span><HandySvg src={DownImage} className={style.down} width='15' height='15' /></span>
        </div>
        <div>
          <button className={style.btn}>Создать</button>
        </div>
        <span className={style.spacing}></span>
        <div><input className={style.search} type="text" placeholder='Поиск' /></div>
        <span><HandySvg src={Ring} className={style.svg} width='25' height='25' /></span>
        <span><HandySvg src={Question} className={style.svg} width='25' height='25' /></span>
        <span className={style.user}><img src={User} alt='user' /></span>
      </div>
    </div>
  )
}

export default Header