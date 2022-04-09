import './AboutMain.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'

// images
import Foots from '../../libs/images/foots.png'
import LupaPet from '../../libs/images/lupa-pet.svg'
import HeroWomen from '../../libs/images/about-hero-women.png'
import AboutHouse from '../../libs/images/about-house.jpg'
import AboutDog from '../../libs/images/About-dog1.png'
import Text31 from '../../libs/images/text3-1.jpg'
import Text32 from '../../libs/images/text3-2.jpg'
import Text33 from '../../libs/images/text3-3.jpg'

function AboutMain() {

    return (
        <div className='about-main'>
            <div className="hero">
                <div className="hero__text">
                    <h2 className="title_2">О клинике</h2>
                    <p>Собака, кошка, попугай, шиншилла… Сколько радости и тепла приносят эти весёлые друзья в наш дом.</p>
                    <img src={Foots} alt="" />
                    <img src={LupaPet} alt="" />
                </div>
                <div className="hero__img">
                    <img src={HeroWomen} alt="" />
                </div>
            </div>
            <div className="text1">
                <div className="text__img">
                    <img src={AboutHouse} alt="house" />
                </div>
                <p>Принимая решение о том, чтобы завести  <mark>домашнего любимца</mark>, или уже имея его, мы не должны забывать, что животное это живой организм, который требует не только нашей любви, а и заботы о её здоровье и  внешнем виде. <mark>Ответственность</mark>  хозяина заключается в чётком выполнении правил по уходу за животным, своевременного обращения к врачу за консультацией и помощи в решении любого вопроса. Ведь мы в ответе за тех, кого приручили!</p>
            </div>
            <div className="text2">
                <div className='text2__text'>
                    <p>Ветеринарная клиника предоставляет широкий спектр услуг,  начиная от простых профилактических мероприятий до сложных хирургических вмешательств. Мы проводим рентгенографические, ультразвуковые исследования.Проводится анализ крови как общеклинический, так и биохимический. Проводится общий анализ мочи с микроскопией осадка. </p>
                    <p>Только у нас Вы можете провести <mark>анализ крови кошек</mark>  на такие заболевания как панлейкопения, кальцивироз, герпесвирусная инфекция, короновироз, токсоплазмоз и хламидиоз. А также <mark>собак на такие заболевания</mark> как инфекционный гепатит, парвовирусный энтерит, чума плотоядных. С полным спектром услуг можно ознакомиться здесь.</p>
                </div>
                <div className="text__img">
                    <img src={AboutDog} alt="house" />
                </div>
            </div>
            <div className="text3">
                <div className="text3__text">
                    <h3 className="text3__title">Хочешь подстричь <mark>питомца?</mark> </h3>
                    <p>В лечебнице работает кабинет груммера, после посещения которого, Ваш любимец будет особенно неотразим и привлекателен.</p>
                </div>
                <div className="text3__img">
                    <NavLink to=''>
                        <img src={Text31} alt="women cutting dog's hair" />
                    </NavLink>
                    <NavLink to=''>
                        <img src={Text32} alt="cat" />
                    </NavLink>
                    <NavLink to=''>
                        <img src={Text33} alt="dog" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default AboutMain