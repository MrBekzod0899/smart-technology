import React from 'react'
import Slider from '../components/Home/Slider'
import './home.scss'
export default function Home() {
  return (
    <div className='container home'>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
            <Slider/>
          </div>
        </div>
    </div>
  )
}
