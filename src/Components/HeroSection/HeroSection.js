import React from 'react'
import "./HeroSection.css"

const HeroSection = () => {
    return (
        <div>
            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src="https://videos.ctfassets.net/xhzuh2up4xai/584ifn7Wok9ZXNAtMfyW96/fa5be1014504061dc3f11c4426e83ab3/landing_page_large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* You can add other content here */}
                <div className="content">
                    <p className='hero-heading1'>LAPOINT - SURF CAMPS,  WORK & SURF,  YOGA & SURF</p>
                    <p className='hero-heading'>GOOD TIMES & AMAZING <br/>EXPRIENCES</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection