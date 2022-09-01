import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/Product/Products'

 function GetProducts() {
    let {id}=useParams()
    let [products,setProducts]=useState([])
    useEffect(()=>{
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        if(id){
            fetch(`${process.env.BASE_URL}/getproducts/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setProducts(data)
            })
        }
        else{
            fetch(`${process.env.BASE_URL}/getproducts/`)
            .then(res=>res.json())
            .then(data=>{
                setProducts(data)
            }) 
        }
    },[id])

  return (
    <>
        <Products products={products}/>
    </>
  )
}
export default GetProducts
