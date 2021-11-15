import React from 'react'
import Navbar from './Navbar'
import banner from '../images/main-banner.jpg'

const Header = () => {
    return (
        <>
        <Navbar/>
        <div className="hero">
            <img src={banner} alt="hero" width="1920px" />
        </div>
        </>
    )
}

export default Header
