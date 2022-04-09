import './Main.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'

// Images
import Pet2 from '../../libs/images/pet2.svg'
import PetBird from '../../libs/images/pet__bird.svg'
import Dog from '../../libs/images/dog.svg'
import Cat from '../../libs/images/cat.svg'
import Mouse from '../../libs/images/mouse.svg'
import Rabbit from '../../libs/images/rabbit.svg'
import Ellipse from '../../libs/images/Ellipse.svg'
import Bird from '../../libs/images/bird.svg'
import D1 from '../../libs/images/doctor1.svg'
import D2 from '../../libs/images/doctor2.svg'
import Xirurgiya from '../../libs/images/xirurgiya.svg'
import Dermatologiya from '../../libs/images/dermatalogiya.svg'
import Mikroskop from '../../libs/images/mikroskop.svg'
import Oftalmalogiya from '../../libs/images/orfomologiya.svg'
import LeftQuote from '../../libs/images/quote-left.svg'
import RightQuote from '../../libs/images/quote-right.svg'
import ServiceImg from '../../libs/images/service-img.jpg'
import EmailingDog from '../../libs/images/emailing-dog.svg'
import ArticleImg1 from '../../libs/images/article-img11.svg'
import ArticleImg2 from '../../libs/images/article-img2.jpg'
import ArticleImg3 from '../../libs/images/article-img3.jpg'
import Goldfish from '../../libs/images/goldfish.svg'
import Question from '../../libs/images/Question.svg'
import Feedback from '../../libs/images/Feedback.svg'



function Main() {
    return (
        <div className='main'>
            <h1 className='visually-hidden'>Veterinary Clinic</h1>
            <div className="hero">
                <div className="hero__img">
                    <img className='hero__pet' src={Pet2} alt="" />
                    <img className='hero__dog' src={Dog} alt="" />
                    <img className='hero__cat' src={Cat} alt="" />
                    <img className='hero__mouse' src={Mouse} alt="" />
                    <img className='hero__rabbit' src={Rabbit} alt="" />
                    <img className='hero__ellipse' src={Ellipse} alt="" />
                </div>
                <div className="hero__text">
                    <h2 className="hero__title">Мы заботимся о <span className='blue' >ваших питомцах! </span></h2>
                    <p>Вам и Вашему любимцу множество услуг по диагностике, профилактике заболеваний по лечению и уходу за Вашими животными. Профессионалы работающие в нашей клинике сделают все для того, чтобы быстро, эффективно и максимально безболезненно выполнить любие процедуры, которые необходимы Вашему домашнему любимцу.</p>
                    <NavLink className='btn-black' to='/services'>Наши услуги</NavLink>
                    <div className="hero__bird">
                        <img src={PetBird} alt="pet" />
                        <img src={Bird} alt="bird" />
                    </div>
                </div>
            </div>
            <div className="quote">
                <div className='quote__border'></div>
                <p className='quote__text'>Наша ветеринарная клиника готова уделить максимум внимания Вам и Вашему питамцу. Здоровье и благополучие Ваших животных очень важно для нас и мы стремимся оказать наилучшую возможную ветеринарную помощь.</p>
                <div className='quote__border'></div>
                <p className='quote__addition'>Оржоникидзевская Ветеринарная клиника</p>
                <div className="quotes">
                    <img src={LeftQuote} alt="left quote" />
                    <img src={RightQuote} alt="Right quote" />
                </div>
            </div>
            <div className="service">
                <h3 className='title'>Наши услуги</h3>
                <ul>
                    <li className="service__item active">
                        <NavLink to=''>
                            <div>
                                <img src={D1} alt="" />
                                <p>Первичный осмотр</p>
                            </div>
                        </NavLink>

                    </li>
                    <li className="service__item">
                        <NavLink to=''>
                            <div>
                                <img src={D2} alt="" />
                                <p>Первичный осмотр</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="service__item">
                        <NavLink to=''>
                            <div>
                                <img src={Xirurgiya} alt="" />
                                <p>Хирургическое вмешательство</p>
                            </div>
                        </NavLink>

                    </li>
                    <li className="service__item">
                        <NavLink to=''>
                            <div>
                                <img src={Dermatologiya} alt="" />
                                <p>Дерматология</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="service__item">
                        <NavLink to=''>
                            <div>
                                <img src={Mikroskop} alt="" />
                                <p>Лабораторная диагностика</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="service__item">
                        <NavLink to=''>
                            <div>
                                <img src={Oftalmalogiya} alt="" />
                                <p>Офтальмология</p>
                            </div>
                        </NavLink>

                    </li>
                </ul>
                <div className="service__info">
                    <div className="service__img">
                        <img src={ServiceImg} alt="cat" />
                    </div>
                    <div className="service__text">
                        <h4 className='service__info_title'>Первичный осмотр</h4>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга “Дневной стационар” которая позволяет экономить Ваше время. Вы имеете возможность оставить у нас.</p>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга “Дневной стационар” которая позволяет экономить Ваше время. Вы имеете возможность оставить у нас.</p>
                        <div className="service__buttons">
                            <button className="service__cost btn-yellow">Узнать цену</button>
                            <button className="service__order btn-black">Записаться на приём</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="emailing">
                <h3 className="emailing__title">Будь в курсе событий</h3>
                <label htmlFor="">
                    <input className='emailing__email' type="email" placeholder='Укажите Ваш email адрес' required />
                    <button className="btn-black">Подписаться</button>
                </label>
                <div className="emailing__img">
                    <img src={EmailingDog} alt="dog" />
                </div>
            </div>
            <div className="article">
                <h3 className="title">Полезные статьи</h3>
                <div className="article__items">
                    <div className="article__item">
                        <img src={ArticleImg1} alt="" className="article__img1" />
                        <div className="article__text">
                            <span className='article__date'>28.08.2020</span>
                            <h4 className="article__title">Ультразвуковая чистка зубов</h4>
                            <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                            <NavLink to="" className="article__more">Читать больше</NavLink>
                        </div>
                    </div>
                    <div className="article__item2">
                        <img src={ArticleImg2} alt="" className="article__img2" />
                        <div className="article__text">
                            <div className='article__links2'>
                                <a href="">#собака</a>
                                <a href="">#дом</a>
                                <a href="">#уход</a>
                                <span className='article__date'>29.08.2020</span>
                            </div>
                            <h4 className="article__title">Перед тем как завести собаку</h4>
                            <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от заводчиков, Бивают и ситуации когда животное находят на улице и дают ему теплый дом. И первым вопросом, который возникает у новых хозяев – как определить возраст котенка. Появление в доме котенка приятное и радосное событие.</p>
                            <NavLink to="" className="article__more">Читать больше</NavLink>
                        </div>
                    </div>
                    <div className="article__item">
                        <img src={ArticleImg3} alt="" className="article__img1" />
                        <div className="article__text">
                            <span className='article__date'>21.07.2020</span>
                            <h4 className="article__title">Когда привавать питомца?</h4>
                            <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                            <NavLink to="" className="article__more">Читать больше</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact">
                <h3 className="contact__title">Обратная связь</h3>
                <p>При возникновении вопросов по поводу работы клиники или консультаций, заполните форму ниже:</p>
                <label htmlFor="">
                    <input type="text" className="contact__name" placeholder='Ваше имя' required />
                    <input type="email" className="contact__email" placeholder='Email для обратной связи' required />
                    <textarea type="text" className="contact__text" placeholder='Опишите Ваш вопрос.' required />
                    <button className="contact__send btn-yellow">Задать нам вопрос</button>
                </label>
                <img src={Goldfish} alt="goldfish" className="contact__goldfish" />
                <img src={Question} alt="question-img" className='question-img' />
                <img src={Feedback} alt="feedback-img" className='feedback-img' />
            </div>
        </div>

    )
}

export default Main