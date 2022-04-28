import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <navbar className="navbar">
        <div className="container">
            <div className="row">
              <div className="col-3">
                  <div className="menubar" onClick={()=>setShow(prev=>!prev)}>
                    <img  src={require('../../assets/img/menu-icon.svg').default} alt="menu icon" />
                    <span>Каталог товаров</span>
                  </div>
                  <ul className={`nav__list ${show && 'show'}`}>
                    <li>
                      <div className="nav__items">
                        <img src={require('../../assets/img/cat1.svg').default} alt="category" />
                        <span>Гироскутеры</span>
                      </div>
                    </li>
                    <li>
                      <div className="nav__items">
                      <img src={require('../../assets/img/cat2.svg').default} alt="category" />
                        <span>Гироскутеры</span>
                      </div>
                    </li>
                    <li>
                      <div className="nav__items">
                      <img src={require('../../assets/img/cat3.svg').default} alt="category" />
                          <span>Гироскутеры</span>
                      </div>
                    </li>
                    <li>
                      <div className="nav__items">
                      <img src={require('../../assets/img/cat4.svg').default} alt="category" />
                        <span>Гироскутеры</span>
                        </div>
                    </li>
                    <li>
                      <div className="nav__items">
                      <img src={require('../../assets/img/cat5.svg').default} alt="category" />
                        <span>Гироскутеры</span>
                        </div>
                    </li>
                    <li>
                      <div className="nav__items">
                      <img src={require('../../assets/img/cat6.svg').default} alt="category" />
                        <span>Гироскутеры</span>
                        </div>
                    </li>
                    <li>
                      <div className="nav__items">
                      <img src={require('../../assets/img/cat7.svg').default} alt="category" />
                        <span>Гироскутеры</span>
                        </div>
                    </li>
                    <li>
                      <div className="nav__items">
                      <img src={require('../../assets/img/cat8.svg').default} alt="category" />
                        <span>Гироскутеры</span>
                        </div>
                    </li>
                    <li>
                      <div className="nav__items">
                      <img src={require('../../assets/img/cat8.svg').default} alt="category" />
                        <span>Гироскутеры</span>
                        </div>
                    </li>
                    <li>
                      <div className="nav__items">
                      <img src={require('../../assets/img/cat8.svg').default} alt="category" />
                        <span>Гироскутеры</span>
                        </div>
                    </li>
                  </ul>
              </div>
              <div className="col-9">
                  <ul>
                    <li>
                      <Link to='/'>O компании</Link>
                    </li>
                    <li>
                      <Link to='/'>Акции</Link>
                    </li>
                    <li>
                      <Link to='/'>Рассрочка 0|0|18</Link>
                    </li>
                    <li>
                      <Link to='/'>Сервис и гарантия</Link>
                    </li>
                    <li>
                      <Link to='/'>Опт/дропшиппинг</Link>
                    </li>
                    <li>
                      <Link to='/'>Контакты</Link>
                    </li>
                  </ul>
              </div>
            </div>
        </div>
    </navbar>
  )
}
