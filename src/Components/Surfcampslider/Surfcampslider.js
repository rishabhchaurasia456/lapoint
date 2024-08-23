import React, { useRef } from 'react'
import { NavLink } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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


const Surfcampslider = () => {

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
                            Your choice - which camp is your flavour?
                        </p><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="surf_slider_text">
                            Surf camps - our most popular <br />camps 2024!
                        </h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <Carousel ref={carouselRef} responsive={responsive} arrows={false}>

                        {/* card data in card.js  */}
                        {Carddata.map(({ title, img, heading, ul1, ul2, ul3, index }) => (
                            <div className="border rounded-3 w-75 mx-5 mt-3" key={index}>
                                <div>
                                    <div className="p-0">
                                        <div className="row mt-3 crdsld">
                                            <div className="col-lg-4 m-auto">
                                                <img src={img} alt="iconimg" className=' mx-3 iconimg' />
                                            </div>
                                            <div className="col-lg-8">
                                                <h4 className="text-dark fs-5 fw-semibold mt-2">{title}</h4>
                                                <p className="m-0 text-secondary" style={{ fontSize: '15px' }}>
                                                    {heading}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <ul className="list-group list-group-flush p-3" style={{ fontSize: '15px' }}>
                                                <li className="list-group-item m-0 p-0">
                                                    <NavLink className="carditem">
                                                        {ul1}
                                                    </NavLink>
                                                </li>
                                                <li className="list-group-item m-0 p-0 ">
                                                    <NavLink className="carditem">
                                                        {ul2}
                                                    </NavLink>
                                                </li>
                                                <li className="list-group-item m-0 p-0">
                                                    <NavLink className="carditem">
                                                        {ul3}
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                    <button className="fa fa-angle-left custom-prev" onClick={handlePrev} aria-label="Previous">  </button>
                    <button className=" fa fa-angle-right custom-next" onClick={handleNext} aria-label="Next">   </button>

                </div>
            </div>
        </div>
    )
}

export default Surfcampslider