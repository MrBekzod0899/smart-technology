import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
export default function Navbar() {
  return (
    <navbar className="navbar">
        <div className="container">
            <div className="row">
              <div className="col-3">
                  <div className="menubar">
                    <img  src={require('../../assets/img/menu-icon.svg').default} alt="menu icon" />
                    <span>Каталог товаров</span>
                  </div>
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
