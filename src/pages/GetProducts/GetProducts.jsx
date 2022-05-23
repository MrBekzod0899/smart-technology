import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/Product/Products'

 function GetProducts() {
    let {id}=useParams()
    let [products,setProducts]=useState([])
    useEffect(()=>{
        if(id){
            fetch(`http://localhost:3003/api/getproducts/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setProducts(data)
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
    <>
        <Products products={products}/>
    </>
  )
}
export default GetProducts
