import './Footer.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'

// Images
import Logo from '../../libs/images/logo1.svg'
import Home from '../../libs/images/house.svg'
import Phone from '../../libs/images/phone.svg'
import Date from '../../libs/images/schedule.svg'

function Footer() {

    return (
        <>
            <div className="footer">
                <div className="logo">
                    <NavLink to='/home'>
                        <img src={Logo} alt="" />
                    </NavLink>
                </div>
                <ul className='footer__navbar'>
                    <li>
                        <NavLink to='/home'>
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>
                            О Клинике
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/services'>
                            Наши Услуги
                        </NavLink>
                    </li>
                </ul>
                <ul className='footer__navbar'>
                    <li>
                        <NavLink to="/article">
                            Полезные Статьи
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/faq'>
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            Контакты
                        </NavLink>
                    </li>
                </ul>
                <div className="footer__date">
                    <img src={Date} alt="" />
                    <div className="date__day">
                        <span>Пн - Пт 8:00 - 18:00</span>
                        <span>Сб - Вс 8:00 - 14:00</span>
                    </div>
                </div>
                <div className="footer__home">
                    <img src={Home} alt="home logo" />
                    <p>г. Мариуполь, <br /> проспект Победы, 48а</p>
                </div>
                <div className="footer__phone">
                    <img src={Phone} alt="" />
                    <div className="phone__phones">
                        <p>
                            <NavLink to='tel:(067) 634 -75 - 74'>
                                (067) 634 -75 - 74
                            </NavLink>
                        </p>
                        <p>
                            <NavLink to='tel:(0637) 57 - 01 - 31'>
                                (0637) 57 - 01 - 31
                            </NavLink>
                        </p>
                        <p>
                            <NavLink to='tel:(098) 266 - 43 - 89'>
                                (098) 266 - 43 - 89
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer