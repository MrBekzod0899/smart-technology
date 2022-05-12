import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import './productpage.scss'

export const ProductPage=()=>{
    const [product,setProduct]=useState([])
    let {id}=useParams()
    console.log(id)

    useEffect(()=>{
        fetch(`http://localhost:3003/api/product/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data[0])
            setProduct(data[0])
        })
    },[id])

    console.log(product)
    return (
        <div className="product container ">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <section id="main-carousel" className="splide" aria-label="My Awesome Gallery">
                <div className="splide__track">
                    <ul className="splide__list">
                    <li className="splide__slide">
                            
                    </li>
                    <li className="splide__slide">
                        <img src="image2.jpg" alt="" />
                    </li>
                    <li className="splide__slide">
                        <img src="image3.jpg" alt="" />
                    </li>
                    <li className="splide__slide">
                        <img src="image4.jpg" alt="" />
                    </li>
                    </ul>
                </div>
                </section>

                    <ul id="thumbnails" className="thumbnails">
                    <li className="thumbnail">
                        <img src="thumbnail1.jpg" alt="" />
                    </li>
                    <li className="thumbnail">
                        <img src="thumbnail2.jpg" alt="" />
                    </li>
                    <li className="thumbnail">
                        <img src="thumbnail3.jpg" alt="" />
                    </li>
                    <li className="thumbnail">
                        <img src="thumbnail4.jpg" alt="" />
                    </li>
                    </ul>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">

                </div>
            </div>
        </div>
    )
}

