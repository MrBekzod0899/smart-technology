import React, { useEffect, useState } from "react";
import "./productpage.scss";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);

  console.log(product)
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
    document.querySelector('.opisaniya').innerHTML=''
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
     });
     document.querySelector('.opisaniya').innerHTML+=`${product[0].text}`
    opacityChange(count);
  }, [product,count]);

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
    <div className="container-fluid container-lg container-xlg">
      <div className="row product-carousel">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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
            <div className="col-md-12 product-titles">
              <h3>{product[0].title && product[0].title.length >=50 ? product[0].title.slice(0,50) : product[0].title }</h3>
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
                  <span>({product[0].review.length})</span>
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
                  <span>{product[0].price}₽</span>
                  <span>
                    <span>{product[0].sale} %</span>
                    <span>-{product[0].price*product[0].sale/100} ₽</span>
                  </span>
                </div>
                <div className="foot-info-bottom">
                  <h4>{product[0].price - product[0].price*product[0].sale/100} ₽</h4>
                </div>
              </div>
              <div className="right-info-center">
                <button className="btn light text-light me-4" >B корзину</button>
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
            <span>Отзывы ({product[0].review.length})</span>
          </li>
        </ul>
        <div className="col-lg-12 col-sm-12 col-12 tabs-info show">
          <div className="tabs-title">
            Описание {product[0].title}
          </div>
          <div className="tabs-content ">
            <div className="opisaniya"></div>
          </div>
        </div>
        <div className="col-lg-12 col-sm-12 col-12 tabs-info">
          <div className="tabs-title">
            Характеристики <span>{product[0].title}</span>
          </div>
          <div className="tabs-content character">
              <ul className="list">
                {
                  product[0].attributes &&
                  product[0].attributes.map((item,index)=>{
                    return(
                      <li><span><b>{item.attribut.title}</b></span><span>{item.value}</span></li>
                    )
                })
                }
              </ul>
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
              soluta repellat? 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
