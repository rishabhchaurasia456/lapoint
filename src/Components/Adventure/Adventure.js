import React, { useRef } from 'react'
// import { NavLink } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from '../../Images/slider/2.webp'; 
import img2 from '../../Images/slider/4.webp'; 
import img3 from '../../Images/slider/3.webp'; 
import img4 from '../../Images/slider/5.webp'; 
import img5 from '../../Images/slider/8.webp';

const content = {
    en: {
        title: "Great surf, sunny beaches, palm trees and warm weather?",
        subtitle: "Find your unforgettable",
        subtitle1: "tropical adventure of 2024!",
    },
    hi: {
        title: "महान सर्फ, सूरज की रोशनी वाले समुद्र तट, पाम के पेड़ और गर्म मौसम?",
        subtitle: "अपना अविस्मरणीय खोजें",
        subtitle1: "2024 का उष्णकटिबंधीय साहसिक कार्य!",
    },
    nl: {
        title: "Grote surf, zonnige stranden, palmbomen en warm weer?",
        subtitle: "Vind uw onvergetelijke",
        subtitle1: "tropische avontuur van 2024!",
    }
}

const Adventuredata = [
    {
        id: "1",
        img: img1,
        title: {
            en: 'Ericeira',
            hi: 'एरिसेरा',
            nl: 'Ericeira'
        }
    },
    {
        id: "2",
        img: img2,
        title: {
            en: 'Alentejo',
            hi: 'अलेंटेजो',
            nl: 'Alentejo'
        }
    },
    {
        id: "3",
        img: img3,
        title: {
            en: 'Hoddevika',
            hi: 'होडेविका',
            nl: 'Hoddevika'
        }
    },
    {
        id: "4",
        img: img4,
        title: {
            en: 'Fuerte Ventura',
            hi: 'फुएर्टे वेंचुरा',
            nl: 'Fuerte Ventura'
        }
    },
    {
        id: "5",
        img: img5,
        title: {
            en: 'Ahangama',
            hi: 'अहंगामा',
            nl: 'Ahangama'
        }
    },
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Adventure = ({selectedLanguage}) => {
    const carouselRef = useRef(null);

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col text-center">
                       <div className="adventure_slider_div">
                       <p className='adventure_slider'>
                            {content[selectedLanguage].title}
                        </p>
                        <h1 className="adventure_slider_text">
                            {content[selectedLanguage].subtitle} <span className='text_span'>{content[selectedLanguage].subtitle1}</span>
                        </h1>
                       </div>
                    </div>
                </div>
                
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col">
                        <Carousel ref={carouselRef} responsive={responsive} arrows={false}>
                            {/* card data in card.js  */}
                            {Adventuredata.map(({ title, img, index }) => (
                                <div className="border w-100 px-2 my-5 border-0" key={index}>
                                    <div>
                                        {/* <img src={img} className="slid_card_backimg rounded-4" alt="..." /> */}
                                        <div className="slid_card_backimg rounded-4" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                                            <div class="slid_card_text">
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

export default Adventure