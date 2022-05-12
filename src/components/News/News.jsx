import React from "react";
import { Link } from "react-router-dom";
import './news.scss'

const News = () => {
    const dates=new Date();
  return (
    <div className="news container mt-4">
      <div className="row">
        <h4>Novosti</h4>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="news-title">
            <h4>Открытие нового магазина</h4>
          </div>
          <div className="news-info">
            <p>
              Разнообразный и богатый опыт говорит нам, что консультация
              c широким активом требует от нас анализа анализа существующих
              паттернов поведения
            </p>
          </div>
          <div className="news-footer">
              <Link to='/'><span>Подробнее</span><i className="fas fa-angle-right"></i></Link>
              <span>{dates.getDate()}/{dates.getUTCMonth()}/{dates.getFullYear()}</span>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="news-title">
            <h4>Открытие нового магазина</h4>
          </div>
          <div className="news-info">
            <p>
              Разнообразный и богатый опыт говорит нам, что консультация
              c широким активом требует от нас анализа анализа существующих
              паттернов поведения
            </p>
          </div>
          <div className="news-footer">
              <Link to='/'><span>Подробнее</span>
              <i className="fas fa-angle-right"></i></Link>
              <span>{dates.getDate()}/{dates.getUTCMonth()}/{dates.getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
