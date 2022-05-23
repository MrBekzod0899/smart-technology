import React from 'react';

import Product from './Product';

const Products = ({title,products}) => {
    return (
        <div className='container mt-4'>
            <div className="row">
                <h4>{title}</h4>
                {
                    products.map((item,index)=>{
                    return (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-6  col-12 mb-3">
                            <Product key={index} product={item}/>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    );
}

export default Products;
