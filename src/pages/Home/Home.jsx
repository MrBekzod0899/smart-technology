import React, { useEffect, useState } from 'react'
import Products from '../../components/Product/Products'
import Sales from '../../components/Sales/Sales'
import Slider from '../../components/Home/Slider'
import News from '../../components/News'
import './home.scss'
import { useParams } from 'react-router-dom'


const SalesItem=[
  [
    {
      text:'Скидки до 30% на сигвеи',
      img:'https://p0.zoon.ru/preview/JqJEs7-NeMPStycuVby_gg/2400x1500x85/1/3/3/original_5731822263acbb3b078b456d_5731831b1d66a.jpg'
    },
    {
      text:'Неделя смарт часов',
      img:'https://www.pngkit.com/png/full/316-3163883_smartwatches-smartwatch.png'
    }
  ],
  [
    {
      text:'Распродажа до — 50%',
      img:'https://www.nicepng.com/png/detail/802-8023666_percentage-transparent-png-percent-sign-vector.png'
    },
    {
      text:'Smart Balance Premium по специальной цене',
      img:'https://images.satu.kz/50725576_w640_h640_sigvej-ninebot-e.jpg'
    }
  ]
]

export default function Home() {
  
  let {id}=useParams()
  let [products,setProducts]=useState([])
  console.log(id)
  useEffect(()=>{
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
     });
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
    <div className='home'>
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 offset-xl-3 col-xl-9 col-lg-9  col-md-9 col-sm-12 col-12 ">
              <Slider/>
            </div>
          </div>
        </div>
        <Products title={'Хиты продаж'} products={products}/>
        <Products title={'Новинки'} products={products}/>
        <Sales item={SalesItem[0]}/>
        <Products title={'Моноколеса'} products={products}/>
        <Sales item={SalesItem[1]}/>
        <Products title={'Электровелосипеды'} products={products}/>
        <News/>
    </div>
  </>
  )
}
