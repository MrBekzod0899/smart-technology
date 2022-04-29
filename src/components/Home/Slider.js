import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './slider.scss'


const Slider = () => {
    return (
        <Splide className='slider'
            options={{
                type:'loop',
                arrows:false
            }}    
        >
            <SplideSlide>
                <img src={require('../../assets/img/slider2.png')} alt='slider'/>
                    <div className='slider-text'>
                        <div className='slider-title'>
                            <p>Apple Watch Series 6</p>
                        </div>
                        <div className='slider-info'>
                            <p>уже в наличии</p>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                <img src={require('../../assets/img/product2.png')} alt='slider'/>
                <div className='slider-text'>
                        <div className='slider-title'>
                            <p>Apple Watch Series 6</p>
                        </div>
                        <div className='slider-info'>
                            <p>уже в наличии</p>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                <img src={require('../../assets/img/product1.png')} alt='slider'/>
                <div className='slider-text'>
                        <div className='slider-title'>
                            <p>Apple Watch Series 6</p>
                        </div>
                        <div className='slider-info'>
                            <p>уже в наличии</p>
                        </div>
                    </div>
            </SplideSlide>
        </Splide>
    );
}

export default Slider;
