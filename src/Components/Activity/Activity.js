import React, { useRef } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from "../../Images/1.webp"
import img2 from "../../Images/2.webp"
import img3 from "../../Images/3.webp"

const content = {
    en: {
        title: "Activity",
        title1: "Discover our experiences",
    },
    nl: {
        title: "Activiteit",
        title1: "Ontdek onze ervaringen",
    },

    hi: {
        title: "गतिविधि",
        title1: "हमारे अनुभव जानें",
    },
};

const Activitydata = [
    {
        id: "1",
        img: img1,
        title: {
            en: 'Old town erice',
            hi: 'पुराना टाउन एरिसे', // Hindi translation
            nl: 'Oude stad Erice' // Dutch translation
        },
        text: {
            en: 'All over the world',
            hi: 'दुनिया भर में', // Hindi translation
            nl: 'Overal ter wereld' // Dutch translation
        }
    },
    {
        id: "2",
        img: img2,
        title: {
            en: 'Wine Testing',
            hi: 'वाइन टेस्टिंग', // Hindi translation
            nl: 'Wijnproeverij' // Dutch translation
        },
        text: {
            en: 'Ericeira & Sri lanka',
            hi: 'एरिसेरा और श्री लंका', // Hindi translation
            nl: 'Ericeira en Sri Lanka' // Dutch translation
        }
    },
    {
        id: "3",
        img: img3,
        title: {
            en: 'To Climb',
            hi: 'चढ़ने के लिए', // Hindi translation
            nl: 'Om te klimmen' // Dutch translation
        },
        text: {
            en: 'Work & Surf',
            hi: 'काम और सर्फ', // Hindi translation
            nl: 'Werk en surfen' // Dutch translation
        }
    },
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Activity = ({selectedLanguage}) => {
    const carouselRef = useRef(null);
    
    return (
        <div>
            <div className='container-fluid'>
                <div className='row ps-3 text-center'>
                    <p className='Activity_head'>
                        {/* Activity */}
                        {content[selectedLanguage].title}
                    </p>
                    <h1 className="Activity_head_text">
                      <span className='text_span'>{content[selectedLanguage].title1}</span>
                    </h1>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Carousel ref={carouselRef} responsive={responsive} arrows={false}>
                            {Activitydata.map(({ title, img, index, text }) => (
                                <div className="border w-100 px-2 my-5 border-0" key={index}>
                                    <div>
                                        <div className="activity_backimg rounded-4 shadow" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                                            <div class="activity_text">
                                                <p class="fs-3">{text[selectedLanguage]}</p>
                                                <p class="card_d_text">{title[selectedLanguage]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity