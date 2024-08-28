import React from 'react'
import "./HeroSection.css"

import vedio from "../../Images/Kiteactive-video1-1.webm"
import img from '../../Images/logo-zwart-geel-geel.png'
import { Link } from 'react-router-dom'



const HeroSection = () => {
    return (
        <div>

            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src={vedio} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* You can add other content here */}


                <div className=''>
                    <Link to="kiteactive/" className='logo_for_phone_mode'> <img src={img} className='img-fluid p-4 mx-3 mt-3' alt="logoimg" style={{ maxWidth: '220px' }} /></Link>
                </div>

                <div className="content">
                    {/* logo for mobile mode only show  */}

                    <p className='hero_heading1'>Kiteactive - surf camps, work & surf, yogo & surf</p>
                    <p className='hero_heading2'>EXPLORE THE WORLD</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection