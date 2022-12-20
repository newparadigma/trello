import React from 'react'
import style from './main.module.css'

export default function Main() {
  return(
    <div className={style.bg}>
      <div className={style.content}>
        <div className={style.text}>
          <h1>Trello помогает собрать всех сотрудников, задачи и инструменты в одном месте</h1>
          <p>Объедините все в одном месте, даже если участники вашей команды рассеяны по миру.</p>
        </div>
      </div>
    </div>
  );
}