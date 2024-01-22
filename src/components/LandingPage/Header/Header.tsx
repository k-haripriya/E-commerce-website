import React from 'react'
import { images } from '../../../assets'
import './styles.scss'

function Header() {
  return (
    <div className='header'>
        <img src={images.banner} className='image'/> 
        <div className='headerName'>
            <p>Home</p>
            <p>AboutUs</p>
            <p>Contact</p>
            <p>Login/SignUp</p>
        </div> 
        <div className='title'>
            <h1>Shoppe</h1>
            <p>Where trends meet Convenience.</p>
            <p>Your Fashion Destination Anywhere, AnyTime</p>
        </div>      
    </div>
  )
}

export default Header
