import React, { useRef } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from "../../Images/Girl_surfing_in_the_Maldives.jpg"
import img2 from "../../Images/PMA_7862.jpg"
import img3 from "../../Images/PMA_7754.jpg"

const Activitydata = [
    {
        id: "1",
        img: img1,
        title: 'Surf Camp',
        text: 'All over the world',

    },
    {
        id: "2",
        img: img2,
        title: 'Yoga & Surf',
        text: 'Ericeira & Sri lanka',
    },
    {
        id: "3",
        img: img3,
        title: 'Ericeira',
        text: 'Work & Surf',
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


const Activity = () => {
    const carouselRef = useRef(null);
    // const handleNext = () => {
    //     if (carouselRef.current) {
    //         carouselRef.current.next();
    //     }
    // };

    // const handlePrev = () => {
    //     if (carouselRef.current) {
    //         carouselRef.current.previous();
    //     }
    // };
    return (
        <div>
            <div className='container-fluid'>
                <div className='row ps-3 text-center'>
                    <p className='Activity_head'>
                        Activity
                    </p>
                    <h1 className="Activity_head_text">
                      <span className='text_span'>  Discover our experiences</span>
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
                                                <p class="fs-3">{text}</p>
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

export default Activity