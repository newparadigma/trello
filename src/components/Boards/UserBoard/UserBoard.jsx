import React from "react"
import style from './UserBoard.module.css'
import { HandySvg } from 'handy-svg'
import Plus from '../../../img/plus.svg'

const UserBoard = () => {
    return (
        <div className={style.userBoardWrapper}>
            <div className={style.boardName}>доскa 1</div>
            <div className={style.cards}>
                <div className={style.card}>Нужно сделать
                    <div className={style.cardItem}>
                    <div className={style.addCardWrapper}>
                        <span className={style.itemText}>логику сервера</span>
                    </div>
                    </div>
                    <div className={style.cardItem}>
                    <div className={style.addCardWrapper}>
                        <span className={style.itemText}>логику приложения</span>
                    </div>
                    </div>
                    <div className={style.addCard}>
                        <div className={style.addCardWrapper}>
                            <span><HandySvg src={Plus} className={style.plus} width='15' height='15' /></span>
                            <span className={style.addCardText}>Добавить карточку</span>
                        </div>
                    </div>
                </div>

                <div className={style.card}>В процессе</div>

                <div className={style.card}>Готово</div>
            </div>
        </div>
    )
}

export default UserBoard