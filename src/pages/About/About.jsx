import React from "react";
import "./about.scss";
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12 ">
            <h4 className="title">О нас</h4>
            <p className="about-text">
              Официальный представитель производителей эксклюзивного
              электротранспорта и Смарт-Техники, Созданная в 2015 году компания
              Смарт-Техника стала одним из первых дистрибьютеров персонального
              электротранспорта в России и уже более трёх лет является
              официальным представителем таких производителей эксклюзивного
              электронного транспорта, как <b>Yamato</b>, <b>SmartONE</b>,{" "}
              <b>HALTEN</b> и <b>Kugoo</b>
            </p>
            <p className="about-title">
              Постоянно растущая и развивающаяся Компания
            </p>
            <p className="about-text">
              На сегодняшней день Компания Смарт-Техника обладает собственным
              розничным магазинами в г. Санкт-Петербурге, официальными
              представительствами в различных районах г. СПб и Ленобласти, сетью
              складов в Петербурге, Москве и других крупных городах России.
              Мы постоянно растём и развиваемся. Доставка наших товаров
              осуществляется во все регионы Страны!
            </p>
            <p className="about-title">
              Самый большой выбор персонального электротранспорта
            </p>
            <p className="about-text">
              Самый большой выбор персонального электротранспорта представлен
              в выставочных залах Смарт-Техника по адресам:
              <b>ул. Ленсовета 81;</b>
              <br />
              <b>ул. Дыбенко 23к1;</b>
              <br />
              <b> пр. Энгельса 113 к 2.</b>
              <br />
              Расширение ассортимента происходит стабильно раз в полгода,
              и вы всегда найдёте у нас самые эксклюзивные модели электронного
              транспорта нового поколения!
            </p>
          </div>
        </div>
      </div>
      <div className="about-rek">
        <div className="container">
          <div className="row">
          <p className="about-title">Всегда в наличии большой выбор:</p>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="reklama-content">
              <div className="reklama-left">
                <img
                  src={require("../../assets/img/cat1.svg").default}
                  alt=""
                />
              </div>
              <div className="reklama-right">
                гироскутеров
              </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="reklama-content">
              <div className="reklama-left">
                <img
                  src={require("../../assets/img/cat1.svg").default}
                  alt=""
                />
              </div>
              <div className="reklama-right">
              сигвеев и мини сигвеев
              </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="reklama-content">
              <div className="reklama-left">
                <img
                  src={require("../../assets/img/cat1.svg").default}
                  alt=""
                />
              </div>
              <div className="reklama-right">
              электросамокатов, стандартных и полноприводных
              </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="reklama-content">
              <div className="reklama-left">
                <img
                  src={require("../../assets/img/cat1.svg").default}
                  alt=""
                />
              </div>
              <div className="reklama-right">
              электроскейтов
              </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="reklama-content">
              <div className="reklama-left">
                <img
                  src={require("../../assets/img/cat1.svg").default}
                  alt=""
                />
              </div>
              <div className="reklama-right">
              электровелосипедов
              </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="reklama-content">
              <div className="reklama-left">
                <img
                  src={require("../../assets/img/cat1.svg").default}
                  alt=""
                />
              </div>
              <div className="reklama-right">
              и многое другое
              </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12 ">
            <p className="about-title">
              Опытный и высококвалифицированный персонал
            </p>
            <p className="about-text">
              В компании работают опытные высококвалифицированные сотрудники,
              всегда готовые помочь вам с выбором персонального транспортного
              средства, ответить на все возможные вопросы и научить кататься
              на выбранной вами модели
            </p>
            <p className="about-title">Возможность тест драйва</p>
            <p className="about-text">
              Благодаря месторасположению и инфраструктуре, прилегающей
              к магазинам территорий, наши посетители могут перед оформлением
              покупки пройти тест-драйв на любом из представленных в зале
              транспортных средств. Для тест-драйва крупной техники необходима
              предварительная запись. Её можно осуществить по телефону:{" "}
              <a href="#!">+7 (812) 509-23-43</a>или 
              <b>через консультанта в магазине.</b>
            </p>
            <p className="about-title">
              Цель и миссия компании Смарт-Техника.рф
            </p>
            <p className="about-text">
              <b> Цель компании Смарт Техника</b>— в 2020 году стать самым
              крупным магазином по продаже персонального электротранспорта
              в Санкт-Петербурге. А также открывать свои филиалы во всех крупных
              городах России, что происходит уже сейчас.
            </p>
            <p className="about-text">
              <b> Миссия компании Смарт Техника </b>— познакомить россиян
              с экологически чистыми видами транспорта и улучшить экологию
              Страны! Мы надеемся не просто привить нашей нации любовь
              к ЭКО-транспорту, а создать в стране новую культуру передвижения.
            </p>
            <p className="bigtitle">Мы всегда рады взаимовыгодному сотрудничеству. Свои предложения отправляйте smartfamily.info@yandex.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
