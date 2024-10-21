import React from 'react'
import "./HeroSection.css"

import vedio from "../../Images/Kiteactive-video1-1.mp4"

// import img from '../../Images/logo-zwart-geel-geel.png'
// import { Link } from 'react-router-dom'



const HeroSection = ({ selectedLanguage }) => {

    const content = {
        en: {
            title: "Kiteactive - Surf Camps, Work & Surf, Yoga & Waves",
            subtitle: "ADVENTURE AWAITS: DISCOVER THE WORLD",
        },
        gr: {
            title: "Kiteactive - Surfcamps, Work & Surf, Yoga & Wellen",
            subtitle: "ABENTEUER ERWARTET DICH: ENTDECKE DIE WELT",
        },

        du: {
            title: "Kiteactive - Surfkampen, Werk & Surf, Yoga & Golven",
            subtitle: "HET AVONTUUR WACHT: ONTDEK DE WERELD",
        },
    };
    return (
        <div>

            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src={vedio} type="video/mp4" loading="lazy" />
                    Your browser does not support the video tag.
                </video>
                
                {/* You can add other content here */}
                <div className="content">
                    {/* logo for mobile mode only show  */}
                    <p className='hero_heading1'>{content[selectedLanguage].title}</p>
                    <h1 className='hero_heading2'>{content[selectedLanguage].subtitle}</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection