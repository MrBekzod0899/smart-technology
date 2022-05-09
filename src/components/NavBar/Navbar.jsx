import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
export default function Navbar() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState([]);
  

  useEffect(()=>{
      fetch('http://localhost:3003/api/category')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setCategory(data)
      })
  },[])
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
                    {
                      category.map(item=>{
                        return(
                          <li key={item._id}>
                            <div className="nav__items">
                              <img src={`http://localhost:3003/${item.Image}`} alt="category" />
                              <span>{item.title}</span>
                            </div>
                          </li>
                        )
                      })
                    }
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
