import React from 'react'
import "./HeroSection.css"

import vedio from "../../Images/Kiteactive-video1-1.webm"

const HeroSection = () => {
    return (
        <div>
            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                <source src={vedio} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* You can add other content here */}
                <div className="content">
                    <p className='hero_heading1'>Kiteactive - surf camps, work & surf, yogo & surf</p>
                    <p className='hero_heading2'>EXPLORE THE WORLD</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection