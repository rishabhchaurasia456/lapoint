import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import config from '../../../config/config';

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

const Activites = ({ activitiesData, selectedLanguage }) => {
  console.log("activitiesDataaaaaaaaaaaaaaaaaaaaaaaaaaaaa", activitiesData)

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
    // <div>
    //   <div className='container-fluid'>
    //     <div className='row'>
    //       <div className="col">

    //         <Carousel ref={carouselRef} responsive={responsive} arrows={false}>

    //           {/* card data in card.js  */}
    //           {activitiesData.map((item, index) => (
    //             <div className="border w-100 px-2 my-5 border-0" key={index}>
    //               <div>
    //                 {/* <img src={img} className="slid_card_backimg rounded-4" alt="..." /> */}
    //                 <Link to="#" className='nav-link'>
    //                   <div className="slid_card_backimg rounded-4" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
    //                     <div class="slid_card_text">
    //                       <p class="card_d_text">{item.title[selectedLanguage]}</p>
    //                     </div>
    //                   </div>
    //                 </Link>
    //               </div>
    //             </div>
    //           ))}
    //         </Carousel>
    //         <button className="fa fa-angle-left custom-prev" onClick={handlePrev} aria-label="Previous">  </button>
    //         <button className=" fa fa-angle-right custom-next" onClick={handleNext} aria-label="Next">   </button>
    //       </div>
    //     </div>

    //   </div>
    // </div>

    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Carousel ref={carouselRef} responsive={responsive} arrows={false}>
              {/* Map activityCard array */}
              {activitiesData.activities.map((card, index) => (
                <div className="border w-100 px-2 my-5 border-0" key={card._id || index}>
                  <div>
                    <Link to={`/activites/${card._id}`} className="nav-link">
                      <div
                        className="slid_card_backimg rounded-4"
                        style={{
                          backgroundImage: `url(${config.API_BASE_URL}/${card.cardimg})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div className="slid_card_text">
                          <p className="card_d_text">{card.activityName}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Carousel>
            <button
              className="fa fa-angle-left custom-prev"
              onClick={handlePrev}
              aria-label="Previous"
            />
            <button
              className="fa fa-angle-right custom-next"
              onClick={handleNext}
              aria-label="Next"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Activites