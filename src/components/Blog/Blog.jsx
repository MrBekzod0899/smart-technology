import React from 'react'
import { Link } from 'react-router-dom'
import './blog.scss'
 function Blog() {
    const dates=new Date();
  return (
    <div className="col-lg-6 col-sm-12 col-12 blogs">
        <div className="row">
            <div className="col-lg-3 col-sm-3 col-12 news-left">
                <Link to='/news/id'>
                    <img className='img-fluid' src="https://i.pinimg.com/originals/03/a3/7a/03a37a190a5ef5527078e119a85f34bc.jpg" alt='news'/>
                </Link>
            </div>
            <div className="col-lg-9 col-sm-9 col-12 news-right">
                <h4 className="newstitle">Открытие нового магазина</h4>
                <div className="news-info">   
                         Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения
                </div>
                <div className="news-footer">
                    <Link to='/news'><span>Подробнее</span><i className="fas fa-angle-right"></i></Link>
                    <span>{dates.getDate()}/{dates.getUTCMonth()}/{dates.getFullYear()}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Blog