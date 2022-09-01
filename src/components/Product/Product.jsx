import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
const Product = ({product}) => {
    var styleBackground={
      backgroundImage:product ? `url('${process.env.BASE_URL}/${product.photos[0]}')` : '' 
    }
  return (
    <div className="product">
      {
        product ? <div className="product-card">
        <div className="product-header">
          <div className="product-image" style={styleBackground}>
            <div className="product-action">
              <button className="btn btn-success ">Novinka</button>
              <button className="btn btn-danger">Xit prodaj</button>
            </div>
          </div>
        </div>
        <div className="product-content">
          <p>{product.attributes[0].value}</p>
          <h4 className="product-name"><Link 
            to={
              {
                pathname:`/product/${product._id}`,
              }
            }
          >{product.title.slice(0,50)}</Link></h4>
          <div className="product-rates">
            <img src={require('../../assets/img/star.svg').default} alt="star" />
            <img src={require('../../assets/img/star.svg').default} alt="star" />
            <img src={require('../../assets/img/star.svg').default} alt="star" />
            <img src={require('../../assets/img/star.svg').default} alt="star" />
            <img src={require('../../assets/img/star.svg').default} alt="star" />
            <img src={require('../../assets/img/message-square.svg').default} alt="star" />
            <span>(17)</span>
          </div>
          <div className="product-cost">
            <p>{product.price}sum</p>
            <div className="product-status">
              <div className="product-sale">
                <span>{product.price*(1-product.sale/100)} ₽</span>
                <div className="product-percentage">
                  <span className="sale-percentage" >{product.sale}%</span>
                  <span className="sale-cost">-{product.price - product.price*(1-product.sale/100)} ₽</span>
                </div>
              </div>
              <div className="product-view">
                <button className="btn outline little"><img src={require('../../assets/img/like.svg').default} alt='view'/></button>
                <button className="btn outline little"><img src={require('../../assets/img/compare.svg').default} alt='compare'/></button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-footer d-flex row">
          <div className="col-9">
            <button className="btn outline">Buy Now</button>
          </div>
          <div className="col-3">
            <button className="btn little">
              <img
                src={require("../../assets/img/cart.svg").default}
                alt="cart"
              />
            </button>
          </div>
        </div>
      </div> : <h1>Nothing Found</h1>
      }
    </div>
  );
};

export default Product;
