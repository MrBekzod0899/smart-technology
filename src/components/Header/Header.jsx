import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import './header.scss'
export default function Header() {
  return (
    <header className='header'>
      <div className='container'>  
        <Link to="/"className='col-3'>
                <img src={require('../../assets/img/logo.svg').default} alt="logo"/>
        </Link>
        <div className="col-9">
        <div className="header__contact">
            <a href='+998880070355'>+998(88)0070355</a>
            <a href='+998337341399'>+998(33)7341399</a>
            <div className='header__worktime'>Пн-вс:c 10:00 до 21:00</div>
         </div>
        <form  className='header__search'>
          <button><img src={require('../../assets/img/search-icon.svg').default} alt="search"/></button>
          <input className='input focus' placeholder='Поиск' type='text'/>
        </form>
      <Link to='/' className="header__link outline">
        <img src={require('../../assets/img/eye.svg').default} alt="eye" />
      </Link>
      <Link to='/' className="header__link none">
        <img src={require('../../assets/img/like.svg').default} alt="eye" />
      </Link>
      <Link to='/' className="header__link  none">
        <img src={require('../../assets/img/compare.svg').default} alt="eye" />
      </Link>
      <Link to='/' className="header__link  none">
        <img src={require('../../assets/img/cart.svg').default} alt="eye" />
      </Link>
      <button className='btn auth'>Войти</button>
        </div>
     </div>
     </header>
  )
}
