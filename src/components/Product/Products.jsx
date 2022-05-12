import React, { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const Products = ({title}) => {
    let {id}=useParams()
    let [products,setProducts]=useState([])
    useEffect(()=>{
        if(id){
            fetch(`http://localhost:3003/api/getproducts/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setProducts(data)
                console.log(data)
            })
        }
        else{
            fetch(`http://localhost:3003/api/getproducts/`)
            .then(res=>res.json())
            .then(data=>{
                setProducts(data)
            }) 
        }
    },[id])

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
