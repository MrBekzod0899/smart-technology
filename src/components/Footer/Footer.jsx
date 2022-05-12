import React from "react";
import './footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 cols-m-6 col-12">
            <div className="footer-logo">
              <img 
                src={require("../../assets/img/logo.svg").default} 
                alt="logo" 
                />
            </div>
            <ul className="footer-list">
              <li className="footer-phone">
                <span>+7 (958) 111-95-03</span>
              </li>
              <li className="footer-phone">
                <span>+7 (812) 660-50-54</span>
              </li>
              <li className="footer-calendar">
                <span>Пн-вс: c 10:00 до 21:00</span>
              </li>
              <li>
                <span>Проспект Стачек 67 к.5</span>
              </li>
              <li>
                <span>Лиговский проспект 205</span>
              </li>
              <li>
                <span>Гражданский проспект, 116 к.5</span>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 cols-m-6 col-12">
            <ul className="footer-list">
              <li>
                <h5>Для клиента</h5>
              </li>
              <li>
                <span>Как купить</span>
              </li>
              <li>
                <span>Доставка и оплата</span>
              </li>
              <li>
                <span>Кредит</span>
              </li>
              <li>
                <span>Политика конфиденциальности</span>
              </li>
              <li>
                <span>Вопросы и ответы (F.A.Q.)</span>
              </li>
              <li>
                <span>Сервис и гарантия</span>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 cols-m-6 col-12">
            <ul className="footer-list">
              <li>
                <h5>О магазине</h5>
              </li>
              <li>
                <span>Отзывы</span>
              </li>
              <li>
                <span>Наши преимущества</span>
              </li>
              <li>
                <span>История компании</span>
              </li>
              <li>
                <span>Сотрудничество</span>
              </li>
              <li>
                <span>Партнёрская программа</span>
              </li>
              <li>
                <span>Вакансии</span>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 cols-m-6 col-12">
            <ul className="footer-list">
              <li>
                <h5>Сотрудничество</h5>
              </li>
              <li>
                <span>Оптом</span>
              </li>
              <li>
                <span>Дропшиппинг</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer-bottom">
            <div className=" footer-info col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <span>SmartТехника © 2021 Все права защищены</span>
            </div>
            <div className="col-xl-4 social-media col-lg-4 col-md-4 col-sm-6 col-12">
              <ul>
                <li>
                <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                <i className="fa-brands fa-facebook-square"></i>
                </li>
                <li>
                <i className="fa-brands fa-vk"></i>
                </li>
                <li>
                <i className="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 website-footer col-lg-4 col-md-4 col-sm-6 col-12">
              <a href="http://websl.ru">Разработка: websl.ru</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
