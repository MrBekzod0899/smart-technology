import React from 'react'
import { Link } from 'react-router-dom'
import './error.scss'
export default function ErrorPage() {
  return (
    <div className='error'>
            <div className='error-image'></div>
            <div className="error-context">
                <h2>Oops!!! Something went wrong</h2>
                <h4>Sorry page Not Found</h4>
                <Link type='button' to='/'>Go Home</Link>
            </div>
    </div>
  )
}
