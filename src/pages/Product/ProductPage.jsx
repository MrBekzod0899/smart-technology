import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/Product/Products";
import Product from "./Product";
import './productpage.scss'

export const ProductPage=()=>{
    const {id}=useParams()
    
    let [products,setProducts]=useState([])
    const [product,setProduct]=useState([
      {
        photos:[],
        review:[]
      }
    ])
    
    useEffect(()=>{
      fetch(`http://localhost:3003/api/product/${id}`)
       .then(res=>res.json())
       .then(data=>{
           setProduct(data[0])
       })
       fetch(`http://localhost:3003/api/product/${id}`)
          .then(res=>res.json())
          .then(data=>{
              setProducts(data[1])
       }) 
    },[id])
  
  console.log(product)
    return (
        <div className="product">
            <Product product={product}/>
            <Products title={"Рекомендуем"} products={products}/>
        </div>
    )
}

