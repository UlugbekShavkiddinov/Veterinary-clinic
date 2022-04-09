import './ContactMain.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'

// Images 
import ContactDog1 from '../../libs/images/contact-dog1.svg'
import ContactDog1Ellipse from '../../libs/images/contact-dog1-ellipse.svg'
import ContactDog2 from '../../libs/images/contact-dog2.svg'
import ContactAdress from '../../libs/images/contact-adress.svg'
import ContactDate from '../../libs/images/contact-date.svg'
import ContactPhone from '../../libs/images/contact-phone1.svg'
import Foots from '../../libs/images/foots2.svg'
import LupaPet from '../../libs/images/lupa-pet.svg'
import ContactMap from '../../libs/images/contact-map.jpg'
import ContactHome from '../../libs/images/contact-home.jpg'






function ContactMain() {


    return (

        <div className='contact-main'>
            <div className="hero">
                <div className="hero__text">
                    <h2 className="title_2">Контакты</h2>
                    <p className='hero__text_text'>Узнать информацию о наших услугах, записаться на прием к врачу или проконсультироваться вы можете по телефону, в любое удобное для вас время.</p>
                    <ul className="contacts">
                        <li>
                            <img src={ContactAdress} alt="" />
                            <p>г. Мариуполь, <br /> проспект Победы, 48а</p>
                        </li>
                        <li>
                            <img src={ContactDate} alt="" />
                            <div>
                                <p>Пн - Пт 8:00 - 18:00</p>
                                <p>Сб - Вс 8:00 - 14:00</p>
                            </div>
                        </li>
                        <li>
                            <img src={ContactPhone} alt="" />
                            <div>
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
                        </li>
                    </ul>
                </div>
                <div className="hero__img">
                    <img src={ContactDog1} alt="" />
                    <img className='img-ellipse' src={ContactDog1Ellipse} alt="" />
                </div>
            </div>
            <div className="foots">
                <img src={Foots} alt="" className="foots__foot" />
                <img src={LupaPet} alt="" className="foots__lupa" />
            </div>
            <div className="contact-map">
                <h3 className="contact-map__title">Как нас найти?</h3>
                <div className="contact-map-map">
                    <img src={ContactMap} alt="" />
                    <img src={ContactHome} alt="" />
                </div>
                <img className='contact-map__dog' src={ContactDog2} alt="" />
            </div>
        </div>
    )
}

export default ContactMain;