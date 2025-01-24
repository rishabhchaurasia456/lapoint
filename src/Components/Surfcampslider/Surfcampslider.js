import React, { useEffect, useRef, useState } from 'react'
// import { NavLink } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Carddata_head_section } from './Carddata';
import { Link } from 'react-router-dom';
// import { cardData } from '../../Pages/Kitecamps/Kitecampdata'
import axios from 'axios';
import config from '../../config/config';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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


const Surfcampslider = ({ data, selectedLanguage }) => {

    const [cardData, setcardData] = useState([]);

    const carouselRef = useRef(null);
    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_triplink`);
                setcardData(response.data.getallTripLink || []);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col text-center">
                        <p className='surf_slider'>
                            {data?.sliderHeading}
                        </p><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <div className='Surf_slider_div'>
                            <h1 className="surf_slider_text">
                                <span className='text_span'> {data?.sliderHeading}</span>
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
                            {cardData.map((card) => (
                                <div className="border w-100 px-2 my-5 border-0">
                                    <div>
                                        {/* <img src={img} className="slid_card_backimg rounded-4" alt="..." /> */}
                                        <Link to={card.path} className='nav-link'>
                                            <div className="slid_card_backimg rounded-4" style={{ backgroundImage: `url(${config.API_BASE_URL}/${card.img.replace(/\\/g, '/')})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                                                {/* <div class="slid_card_text">
                                                <p class="card_d_text">{title[selectedLanguage]}</p>
                                            </div> */}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                        <button className="fa fa-angle-left custom-prev" onClick={handlePrev} aria-label="Previous">  </button>
                        <button className=" fa fa-angle-right custom-next" onClick={handleNext} aria-label="Next">   </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Surfcampslider