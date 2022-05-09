import React, { useEffect,useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './slider.scss'


const Slider = () => {
    const [slider, setSlider] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3003/api/slider')
        .then(res=>res.json())
        .then(item=>{
            console.log(item)
            setSlider(item)
        })  
    },[])

    return (
        <Splide className='slider'
            options={{
                type:'loop',
                arrows:false
            }}    
        >
            {
                slider.map((item)=>{
                    return(
                        <SplideSlide key={item._id}>
                            <img className='img-rounded' src={`http://localhost:3003/${item.Image}`} width={'100%'} height={"100%"} alt='slider'/>
                            <div className='slider-text'>
                                <div className='slider-title'>
                                    <p>{item.title}</p>
                                </div>
                                <div className='slider-info'>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    )
                })
            }
        </Splide>
    );
}

export default Slider;
