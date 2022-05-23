import React, { useEffect, useState } from "react";
import "./productpage.scss";
const Product = ({ product }) => {
  const [count, setCount] = useState(0);

  const changeImage = (index) => {
    setCount(index);
  };

  const leftMove = () => {
    if (count !== 0) {
      setCount((prev) => prev - 1);
    } else {
      setCount(product[0].photos.length - 1);
    }
  };

  const rightMove = () => {
    if (count !== product[0].photos.length - 1) {
      setCount((prev) => prev + 1);
    } else {
      setCount(0);
    }
  };
  const tabsFunc = (index) => {
    let tabsitem = document.querySelectorAll(".tabs-items li");
    let tabsinfo = document.querySelectorAll(".tabs .tabs-info");
    tabsitem.forEach((item, ind) => {
      if (index === ind) {
        item.classList.add("show");
        tabsinfo[index].classList.add("show");
      } else {
        item.classList.remove("show");
        tabsinfo[ind].classList.remove("show");
      }
    });
  };
  useEffect(() => {
    opacityChange(count);
  }, [count]);

  const opacityChange = (count) => {
    const items = Array.from(document.querySelectorAll(`[data-item]`));
    items.forEach((item, ind) => {
      if (ind !== count) {
        item.classList.remove("show");
      } else {
        item.classList.add("show");
      }
    });
  };
  return (
    <div className="container">
      <div className="row product-carousel">
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <section
            id="main-carousel"
            className="slide-section"
            aria-label="My Awesome Gallery"
          >
            <i className="fa-solid fa-angle-left" onClick={leftMove}></i>
            <img
              className="img-fluid"
              src={`http://localhost:3003/${product[0].photos[count]}`}
              alt=""
            />
            <i className="fa-solid fa-angle-right" onClick={rightMove}></i>
          </section>
          <ul id="thumbnails" className="thumbnails">
            {product[0].photos.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`thumbnail ${index === 0 ? "show" : " "}`}
                  data-item={index}
                  onClick={(e) => changeImage(index)}
                >
                  <img src={`http://localhost:3003/${item}`} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="row">
            <div className="col-md-12">
              <h3>Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)</h3>
            </div>
          </div>
          <div className="product-info">
            <div className="info-head">
              <div className="left-info-head">
                <div className="product-rates">
                  <img
                    src={require("../../assets/img/star.svg").default}
                    alt="star"
                  />
                  <img
                    src={require("../../assets/img/star.svg").default}
                    alt="star"
                  />
                  <img
                    src={require("../../assets/img/star.svg").default}
                    alt="star"
                  />
                  <img
                    src={require("../../assets/img/star.svg").default}
                    alt="star"
                  />
                  <img
                    src={require("../../assets/img/star.svg").default}
                    alt="star"
                  />
                  <img
                    src={require("../../assets/img/message-square.svg").default}
                    alt="star"
                  />
                  <span>(17)</span>
                </div>
              </div>
              <div className="right-info-head">
                <button className="btn outline little">
                  <img
                    src={require("../../assets/img/like.svg").default}
                    alt="view"
                  />
                </button>
                <button className="btn outline little">
                  <img
                    src={require("../../assets/img/compare.svg").default}
                    alt="compare"
                  />
                </button>
              </div>
            </div>
            <div className="info-center">
              <div className="left-info-center">
                <div className="foot-info-top">
                  <span>5400 ₽</span>
                  <span>
                    <span>20%</span>
                    <span>-1000%</span>
                  </span>
                </div>
                <div className="foot-info-bottom">
                  <h4>13 990 ₽</h4>
                </div>
              </div>
              <div className="right-info-center">
                <button className="btn light text-light me-4">B корзину</button>
                <button className="btn outline">Купить в 1 клик</button>
              </div>
            </div>
          </div>
          <div className="product-footer">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-12">
                <div className="footer-title">
                  <i className="fa-solid fa-truck"></i>
                  <span>Доставка</span>
                </div>
                <div className="footer-info">
                  Доставим по Санкт-Петербургу в течение 2 часов и бесплатно.
                  Стоимость доставки в другие города уточняйте у менеджера.
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12">
                <div className="footer-title">
                  <i class="fa-solid fa-wallet"></i>
                  <span>Оплата</span>
                </div>
                <div className="footer-info">
                  Принимаем к оплате как наличный, так и безналичный расчёт.
                  Возможна оплата электронными кошельками.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row tabs">
        <ul className="tabs-items">
          <li className="tabs-item show" onClick={() => tabsFunc(0)}>
            <span>Описание</span>
          </li>
          <li className="tabs-item" onClick={() => tabsFunc(1)}>
            <span>Характеристики</span>
          </li>
          <li className="tabs-item" onClick={() => tabsFunc(2)}>
            <span>Отзывы (1)</span>
          </li>
        </ul>
        <div className="col-lg-12 col-sm-12 col-12 tabs-info show">
          <div className="tabs-title">
            Описание гироскутера Smart Balance Well 6.5
          </div>
          <div className="tabs-content">
            <span>
              Вопрос безопасности всегда стоит очень остро, в этом году
              производители решили его следующим образом — снабдили модель
              качественной задней и передней подсветкой, поэтому пользователь
              может не переживать о том, что его будет незаметно на дороге
              в тёмное время суток. На руле имеется яркий качественный дисплей,
              где отображается вся актуальная и необходимая информация —
              скорость, пробег и др. Кроме того, на руле имеется кнопка
              включения и выключения подсветки, звуковой сигнал и кнопка
              настроек. Таким образом, все необходимое для управления самокатом
              находится у пользователя под рукой. Для комфорта прогулок
              электросамокат снабжён передним и задним амортизаторами. Вы можете
              перемещаться не только по ровному городскому асфальту,
              но и по неровностям, которые не затруднят ваше перемещение.
              Складной механизм и небольшой вес (11 кг) делают модель
              эргономичной. В сложенном виде самокат занимает совсем мало
              места — его легко перевозить как в багажнике машины,
              так и в общественном транспорте. При складывании самокат
              фиксируется с помощью крючка к заднему крылу. А для того,
              чтобы разложить его, необходимо, нажав на заднее крыло, приподнять
              руль. Характерный щелчок говорит о том, что самокат разложен
              полностью и готов к эксплуатации. Стоит отметить,
              что электросамокат очень быстро стартует — вам не надо
              отталкиваться или разгоняться. Выдерживает до 120 кг, в процессе
              изготовления использовались только качественные материалы.
              Быстрый, лёгкий, компактный — прекрасный выбор для ценителей
              удобства!
            </span>
          </div>
        </div>
        <div className="col-lg-12 col-sm-12 col-12 tabs-info">
          <div className="tabs-title">
            Характеристики гироскутера Smart Balance Well 6.5
          </div>
          <div className="tabs-content">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium blanditiis dolor labore vel reiciendis nesciunt nihil,
              dignissimos quaerat id explicabo temporibus mollitia aperiam.
              Provident cupiditate, similique fugiat vero ex eius alias. Earum
              ad velit aperiam consectetur error! Veritatis at reprehenderit
              animi maxime nesciunt rerum ullam ex neque similique! Quas saepe
              voluptatem nostrum illum esse tenetur veniam debitis excepturi
              dolores laboriosam repudiandae ad quo quis neque nemo, atque
              earum? Nam corrupti reiciendis rerum magnam autem officia nostrum
              molestiae. Provident eum harum iure sit, sequi pariatur a tenetur
              ratione molestias, delectus quasi eius nobis veniam aliquam
              laudantium dolorem fuga, eaque vel suscipit doloribus et est!
              Officia nihil excepturi voluptate maxime magni sint neque, vitae
              rem, atque quidem aliquam necessitatibus dolorum placeat sed amet
              omnis itaque laudantium repellat magnam exercitationem! Beatae
              voluptatibus obcaecati doloremque, modi quibusdam autem qui neque
              sequi commodi animi voluptas nesciunt in odit tenetur. Non
              necessitatibus qui repudiandae laudantium ex omnis, repellat eum
              molestiae accusamus molestias nobis quas temporibus doloribus
              aliquid adipisci quia laboriosam reiciendis minima quisquam
              impedit iusto itaque facere dicta. Aspernatur fuga ullam nemo
              accusantium mollitia blanditiis qui error, laboriosam corporis
              fugiat laudantium a incidunt impedit quaerat corrupti amet esse
              enim magni, saepe cumque quia! Molestias corrupti et,
              necessitatibus nesciunt nobis veritatis quasi rem. Voluptatum
              dolorum quas molestiae nobis, ullam minima dolore at magni
              quisquam nam? Id explicabo, blanditiis aspernatur nostrum
              cupiditate doloremque a eum dignissimos cumque totam voluptas rem
              doloribus reiciendis sint ipsa, culpa ex et quos, ea dolorum? In
              quod magni culpa. At repellendus veritatis doloribus aspernatur
              iure provident illum consectetur, eum itaque porro quasi dicta
              fuga ratione est quam aut molestiae voluptate nihil necessitatibus
              id quia maxime? Quo rerum placeat quis earum! Quo, at consectetur
              officiis dicta facilis debitis? Error provident ducimus, iste sunt
              dolorum eveniet tempora ea praesentium modi ipsum eligendi omnis
              dolore ullam!
            </span>
          </div>
        </div>
        <div className="col-lg-12 col-sm-12 col-12 tabs-info">
          <div className="tabs-title">
            Отзывы гироскутера Smart Balance Well 6.5
          </div>
          <div className="tabs-content">
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique soluta ducimus officia cupiditate laborum ea natus
              tenetur explicabo dolores saepe rerum, quaerat sint voluptatibus
              cumque? Provident commodi eos sed quo id laborum beatae, corporis
              enim possimus asperiores, eaque nihil odit ipsum placeat
              reiciendis? Animi ad qui hic dolorem iusto atque nulla odit
              voluptas veniam, quidem repudiandae quasi culpa nostrum eveniet
              assumenda explicabo adipisci aspernatur magni laborum blanditiis
              voluptate iure, inventore officiis? Praesentium voluptate
              inventore quam delectus? Culpa blanditiis nobis veritatis earum
              doloribus dolore unde corporis repellendus, alias adipisci tenetur
              cumque autem, quam magnam id molestiae sunt beatae, sit fuga omnis
              nesciunt? Quo neque commodi doloremque vero. Assumenda vero
              incidunt tempora ad perferendis laudantium perspiciatis suscipit
              officiis quaerat nesciunt, recusandae dicta ratione, repellat
              quidem cumque. Mollitia iusto corporis doloribus libero minus
              soluta. Quaerat fugiat debitis magni delectus, eos dignissimos.
              Distinctio incidunt voluptate culpa accusamus beatae, aut
              architecto minima sapiente. Odit praesentium error dignissimos,
              cum ipsa quas, atque architecto, modi excepturi officiis neque
              culpa! Voluptas quaerat sunt voluptatem, et reprehenderit
              consequatur autem rem vitae incidunt repellendus exercitationem
              culpa delectus eum quo fugit dolorem ut aperiam ipsa laudantium
              asperiores saepe harum fuga error tempora. Non obcaecati nam
              delectus ab, deserunt explicabo facere laboriosam odit doloribus
              assumenda voluptatum quos nisi porro perspiciatis quasi quisquam
              maiores ullam dolorum quo veritatis distinctio accusamus eaque
              voluptas. Quisquam maiores adipisci dignissimos itaque eligendi
              facilis cumque cupiditate, libero, animi dolorum ipsa repellendus
              corrupti asperiores iure illo ratione laudantium consequatur
              sapiente accusamus totam perferendis eos explicabo. Voluptate
              repudiandae perspiciatis numquam nobis tempore nostrum rerum
              obcaecati, cum atque quia deleniti? Voluptatibus quod eligendi non
              eos, quos doloremque optio fugiat ab alias maiores hic eum
              dignissimos ipsa dolor molestias exercitationem sed. Modi, facere?
              Magnam, omnis iste ipsa maiores, quae nihil ullam itaque, sit
              fugiat modi officia! Libero enim vitae praesentium, voluptates
              impedit omnis accusamus cum ea inventore sequi iste. Maiores
              quaerat dolore perferendis ratione eveniet rem suscipit molestiae
              natus accusamus qui iure voluptatibus mollitia, tempore pariatur
              architecto ipsam aspernatur eaque laudantium odio minima sit
              soluta repellat? Totam non voluptate esse aspernatur dicta
              voluptatem quo! A cum tempore quibusdam accusantium mollitia eius
              dolor enim repellat minus nisi, velit architecto, suscipit illum
              ipsam nobis assumenda quam magnam, corrupti maxime? Atque beatae
              sapiente quaerat quis, aliquid eveniet animi obcaecati ab quas rem
              sequi iusto ipsam earum corporis, esse illum ut eos officiis
              possimus a dolorem natus optio! Excepturi, quasi fuga debitis
              optio molestiae exercitationem labore eligendi blanditiis
              voluptatum praesentium in sapiente atque voluptatibus illo? Maxime
              illo commodi doloribus voluptatem, vitae mollitia pariatur ipsam
              repellendus natus odit numquam autem culpa corrupti qui eligendi,
              molestias voluptas sed perspiciatis amet. Quas temporibus et
              eaque, dolorum aperiam totam obcaecati iusto ipsa ex sequi illum
              officia. A facere nobis quibusdam ab magni harum excepturi tenetur
              quae, similique consequatur, veritatis vel adipisci, expedita
              voluptate. Libero dolor quaerat tempora natus, deleniti a dolorum
              aliquam distinctio odit fugit velit sapiente minima ducimus
              itaque! Quisquam, eligendi suscipit? Ad officiis ipsum inventore
              unde, facere doloribus ipsa rem dicta voluptatem minus commodi
              illo odit, omnis quis.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
