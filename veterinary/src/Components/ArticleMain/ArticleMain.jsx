import './ArticleMain.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'

// Images
import ArticleCat from '../../libs/images/article-cat.png'
import ArticleImg2 from '../../libs/images/article-img22.jpg'
import ArticleImg1 from '../../libs/images/article-img11.svg'
import ArticleImg3 from '../../libs/images/ArticleImg3.svg'
import ArticleImg4 from '../../libs/images/ArticleImg4.svg'
import ArticleImg5 from '../../libs/images/ArticleImg5.svg'
import ArticleImg6 from '../../libs/images/ArticleImg6.svg'
import ArticleImg7 from '../../libs/images/ArticleImg7.svg'
import ArticleImg8 from '../../libs/images/ArticleImg8.svg'
import ArticleImg9 from '../../libs/images/ArticleImg9.svg'
import ArticleEllipse from '../../libs/images/article-ellipse.svg'

function ArticleMain() {

    return (
        <div className='article-main'>
            <div className="hero">
                <div className="hero__text">
                    <h2 className="title_2">Полезные статьи</h2>
                    <p>Узнать информацию о наших услугах, записаться на прием к врачу или проконсультироваться вы можете по телефону, в любое удобное для вас время.</p>
                </div>
                <div className="hero__img">
                    <img src={ArticleCat} alt="" />
                    <img className='hero__ellipse1' src={ArticleEllipse} alt="" />
                    <img className='hero__ellipse2' src={ArticleEllipse} alt="" />
                </div>
            </div>
            <div className="article__item-big">
                <img src={ArticleImg2} alt="" className="article__img2" />
                <div className="article__text">
                    <div className='article__links2'>
                        <NavLink to="">#собака</NavLink>
                        <NavLink to="">#дом</NavLink>
                        <NavLink to="">#уход</NavLink>
                        <span className='article__date'>29.08.2020</span>
                    </div>
                    <h4 className="article__title">Перед тем как завести собаку</h4>
                    <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от заводчиков, Бивают и ситуации когда животное находят на улице и дают ему теплый дом. И первым вопросом, который возникает у новых хозяев – как определить возраст котенка. Появление в доме котенка приятное и радосное событие.</p>
                    <NavLink to="" className="article__more">Читать больше</NavLink>
                </div>
            </div>
            <ul className="article__items">
                <li className="article__item">
                    <img src={ArticleImg1} alt="" className="article__img1" />
                    <div className="article__text">
                        <span className='article__date'>28.08.2020</span>
                        <h4 className="article__title">Ультразвуковая чистка зубов</h4>
                        <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                        <NavLink to="" className="article__more">Читать больше</NavLink>
                    </div>
                </li>
                <li className="article__item">
                    <img src={ArticleImg3} alt="" className="article__img1" />
                    <div className="article__text">
                        <span className='article__date'>21.07.2020</span>
                        <h4 className="article__title">Когда привавать питомца?</h4>
                        <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                        <NavLink to="" className="article__more">Читать больше</NavLink>
                    </div>
                </li>
                <li className="article__item">
                    <img src={ArticleImg4} alt="" className="article__img1" />
                    <div className="article__text">
                        <span className='article__date'>28.09.2020</span>
                        <h4 className="article__title">Как правильно купать животных</h4>
                        <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                        <NavLink to="" className="article__more">Читать больше</NavLink>
                    </div>
                </li>
                <li className="article__item">
                    <img src={ArticleImg5} alt="" className="article__img1" />
                    <div className="article__text">
                        <span className='article__date'>28.08.2020</span>
                        <h4 className="article__title">Ультразвуковая чистка зубов</h4>
                        <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                        <NavLink to="" className="article__more">Читать больше</NavLink>
                    </div>
                </li>
                <li className="article__item">
                    <img src={ArticleImg6} alt="" className="article__img1" />
                    <div className="article__text">
                        <span className='article__date'>28.08.2020</span>
                        <h4 className="article__title">Ультразвуковая чистка зубов</h4>
                        <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                        <NavLink to="" className="article__more">Читать больше</NavLink>
                    </div>
                </li>
                <li className="article__item">
                    <img src={ArticleImg7} alt="" className="article__img1" />
                    <div className="article__text">
                        <span className='article__date'>21.07.2020</span>
                        <h4 className="article__title">Когда привавать питомца?</h4>
                        <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                        <NavLink to="" className="article__more">Читать больше</NavLink>
                    </div>
                </li>
                <li className="article__item">
                    <img src={ArticleImg8} alt="" className="article__img1" />
                    <div className="article__text">
                        <span className='article__date'>28.09.2020</span>
                        <h4 className="article__title">Как правильно купать животных</h4>
                        <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                        <NavLink to="" className="article__more">Читать больше</NavLink>
                    </div>
                </li>
                <li className="article__item">
                    <img src={ArticleImg9} alt="" className="article__img1" />
                    <div className="article__text">
                        <span className='article__date'>28.08.2020</span>
                        <h4 className="article__title">Ультразвуковая чистка зубов</h4>
                        <p className="article__info">Появление в доме котенка приятное и радосное событие. Но не всегда этот пушистый зверек берется от ...</p>
                        <NavLink to="" className="article__more">Читать больше</NavLink>
                    </div>
                </li>
            </ul>
            <button className="article__item_more btn-black">Больше статей</button>
        </div>
    )
}

export default ArticleMain