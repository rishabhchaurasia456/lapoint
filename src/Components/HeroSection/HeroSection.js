import React from 'react'
import "./HeroSection.css"

import vedio from "../../Images/Kiteactive-video1-1.mp4"
import img from '../../Images/logo-zwart-geel-geel.png'
import { Link } from 'react-router-dom'



const HeroSection = ({ selectedLanguage }) => {

    const content = {
        en: {
            title: "Kiteactive - surf camps, work & surf, yogo & surf",
            subtitle: "EXPLORE THE WORLD",
        },
        nl: {
            title: "Kiteactive - surfkampen, werk & surf, yogo & surf",
            subtitle: "ONTDEK DE WERELD",
        },

        hi: {
            title: "काइटएक्टिव - सर्फ कैंप, काम और सर्फ, योगो और सर्फ",
            subtitle: "दुनिया का अन्वेषण करें",
        },
    };
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

                    <p className='hero_heading1'>{content[selectedLanguage].title}</p>
                    <p className='hero_heading2'>{content[selectedLanguage].subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection