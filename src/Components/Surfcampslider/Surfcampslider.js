import React, { useRef } from 'react'
// import { NavLink } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Carddata, Carddata_head_section } from './Carddata';
import { Link } from 'react-router-dom';

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


const Surfcampslider = ({selectedLanguage}) => {

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

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col text-center">
                        <p className='surf_slider'>
                            {Carddata_head_section[0].title[selectedLanguage]}
                        </p><br />
                    </div>
                </div>
                <div className="row ">
                    <div className="col text-center">
                    <div className='Surf_slider_div'>
                        <h1 className="surf_slider_text">
                        <span className='text_span'> {Carddata_head_section[0].subtitle[selectedLanguage]} </span> {Carddata_head_section[0].subtitle1[selectedLanguage]}
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
                            {Carddata.map(({ title, img, index }) => (
                                <div className="border w-100 px-2 my-5 border-0" key={index}>
                                    <div>
                                        {/* <img src={img} className="slid_card_backimg rounded-4" alt="..." /> */}
                                        <Link to="/kiteactive/trip">
                                        <div className="slid_card_backimg rounded-4" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
                                            <div class="slid_card_text">
                                                <p class="card_d_text">{title[selectedLanguage]}</p>
                                            </div>
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