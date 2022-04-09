import './header.scss'

import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// Images
import Home from '../../libs/images/house.svg'
import Phone from '../../libs/images/phone.svg'
import Dot from '../../libs/images/dot.png'
import Date from '../../libs/images/schedule.svg'
import Logo from '../../libs/images/logo1.svg'
import Pet from '../../libs/images/pet.svg'


function Header() {

    return (
        <>
            <div className="topbar">
                <div className="topbar__home">
                    <img src={Home} alt="home logo" />
                    <p>г. Мариуполь, проспект Победы, 48а</p>
                </div>
                <div className="topbar__phone">
                    <div className="phone1">
                        <img src={Phone} alt="home logo" />
                        <p>
                            <NavLink to='tel:(067) 634 -75 - 74'>
                                (067) 634 -75 - 74
                            </NavLink>
                        </p>
                    </div>
                    <div className="phone2">
                        <img src={Dot} alt="" />
                        <p>
                            <NavLink to='tel:(0637) 57 - 01 - 31'>
                                (0637) 57 - 01 - 31
                            </NavLink>
                        </p>
                    </div>
                    <div className="phone2">
                        <img src={Dot} alt="" />
                        <p>
                            <NavLink to='tel:(098) 266 - 43 - 89'>
                                (098) 266 - 43 - 89
                            </NavLink>
                        </p>
                    </div>
                </div>
                <div className="topbar__date">
                    <img src={Date} alt="" />
                    <div className="date__day">
                        <span>Пн - Пт 8:00 - 18:00</span>
                        <span>Сб - Вс 8:00 - 14:00</span>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="navbar__logo">
                    <NavLink className='no-active' to='/home' >
                        <img src={Logo} alt="" />
                    </NavLink>
                </div>
                <ul className="navbar__items">
                    <li>
                        <NavLink activeClassName="kuku" to='/home'>
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
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="navbar__question">
                    <img src={Pet} alt="" />
                    Задать вопрос
                </button>

            </div>
        </>
    )
}

// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

export default Header;