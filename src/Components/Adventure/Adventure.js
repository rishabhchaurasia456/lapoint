import React, { useRef } from 'react'
// import { NavLink } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from '../../Images/slider/slider1.jpg'; 
import img2 from '../../Images/slider/slider2.jpg'; 
import img3 from '../../Images/slider/slider3.jpg'; 
import img4 from '../../Images/slider/slider4.jpeg'; 
import img5 from '../../Images/slider/slider5.jpg';

const Adventuredata = [
    {
        id: "1",
        img: img1,
        title: 'Ericeira',
        ul2: 'Santa Teresa',

    },
    {
        id: "2",
        img: img2,
        title: 'Alentejo',
    },
    {
        id: "3",
        img: img3,
        title: 'Hoddevika',
    },
    {
        id: "4",
        img: img4,
        title: 'Fuerte Ventura',
    },
    {
        id: "5",
        img: img5,
        title: 'Ahangama',
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

const Adventure = () => {
    const carouselRef = useRef(null);

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col text-center">
                        <p className='adventure_slider'>
                            Great surf, sunny beaches, palm trees and warm weather?
                        </p><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="adventure_slider_text">
                            Find your unforgettable <br /> tropical adventure of 2024!
                        </h1>
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
                                                <p class="card_d_text">{title}</p>
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