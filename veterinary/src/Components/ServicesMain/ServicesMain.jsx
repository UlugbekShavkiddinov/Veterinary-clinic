import './ServicesMain.scss'

import ServiceBird from '../../libs/images/service-bird.png'

// Images
import PetGrey from '../../libs/images/service-grey.svg'
import ServiceItemImg7 from '../../libs/images/service-item-img7.svg'
import ServiceItemImg8 from '../../libs/images/service-item-img8.svg'
import ServiceItemImg9 from '../../libs/images/service-item-img9.svg'
import ServiceItemImg10 from '../../libs/images/service-item-img10.svg'
import ServiceItemImg11 from '../../libs/images/service-item-img11.svg'
import ServiceItemImg12 from '../../libs/images/service-item-img12.svg'
import D1 from '../../libs/images/doctor1.svg'
import D2 from '../../libs/images/doctor2.svg'
import Xirurgiya from '../../libs/images/xirurgiya.svg'
import Dermatologiya from '../../libs/images/dermatalogiya.svg'
import Mikroskop from '../../libs/images/mikroskop.svg'
import Oftalmalogiya from '../../libs/images/orfomologiya.svg'

function ServicesMain() {
    return (
        <div className="service-main">
            <div className="hero">
                <div className="hero__text">
                    <h2 className="title_2">Наши услуги</h2>
                    <p>Узнать информацию о наших услугах, записаться на прием к врачу или проконсультироваться вы можете по телефону, в любое удобное для вас время.</p>
                </div>
                <div className="hero__img">
                    <img src={ServiceBird} alt="" />
                </div>
            </div>
            <ul className="services">
                <li>
                    <div className="service__img">
                        <img src={D1} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Первичный осмотр</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-yellow'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={D2} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Первичный осмотр</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-blue'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={Xirurgiya} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Хирургическое вмешательство</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-yellow'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={Dermatologiya} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Дерматология</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-blue'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={Mikroskop} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Лабораторная диагностика</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-yellow'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={Oftalmalogiya} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Офтальмология</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-blue'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={ServiceItemImg7} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">УЗИ диагностика</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-yellow'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={ServiceItemImg8} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Чипированиея</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-blue'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={ServiceItemImg9} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Международ-ные паспорта</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-yellow'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={ServiceItemImg10} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Вакцинация</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-blue'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={ServiceItemImg11} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Стоматология</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-yellow'>Узнать больше</button>
                    </div>
                </li>
                <li>
                    <div className="service__img">
                        <img src={ServiceItemImg12} alt="" />
                    </div>
                    <div className="service__text">
                        <img src={PetGrey} alt="" />
                        <h3 className="services__title">Вызов на дом</h3>
                        <p>По условиям акции в нашей клинике предоставляетса безплатная услуга</p>
                        <button className='btn-blue'>Узнать больше</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ServicesMain