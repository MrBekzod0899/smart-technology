import React from "react";
import "./sales.scss";

const Sales = ({item}) => {
  return (
    <div className="sales container mt-4">
      <div className="row">
        {item.map((sale,index) => {
          return (
            <div key={index} className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="sales-product">
                <div className="sales-info">
                  <p>{sale.text}</p>
                </div>
                <div className="sales-image">
                  <img src={sale.img} alt="sale-product" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sales
