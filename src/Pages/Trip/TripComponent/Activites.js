import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';



// const Activity_data = [
//   {
//     id: "1",
//     img: img1,
//     title: 'Spice Tour'
//   },
//   {
//     id: "2",
//     img: img2,
//     title: 'kuza cave'
//   },
//   {
//     id: "3",
//     img: img3,
//     title: 'Blue safari'
//   },
//   {
//     id: "4",
//     img: img4,
//     title: 'Local Dhow Sailing'
//   },
//   {
//     id: "5",
//     img: img5,
//     title: 'Snorkeling'
//   },
// ]

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

const Activites = ({activitiesData, selectedLanguage}) => {

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
          <div className="col">

            <Carousel ref={carouselRef} responsive={responsive} arrows={false}>

              {/* card data in card.js  */}
              {activitiesData.map((item, index) => (
                <div className="border w-100 px-2 my-5 border-0" key={index}>
                  <div>
                    {/* <img src={img} className="slid_card_backimg rounded-4" alt="..." /> */}
                    <Link to="#" className='nav-link'>
<<<<<<< HEAD
                      <div className="slid_card_backimg rounded-4" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
=======
                      <div className="slid_card_backimg rounded-4" style={{ backgroundImage: `url(${item.img})` , backgroundSize: 'cover', backgroundPosition: 'center', }}>
>>>>>>> 38ad342e0030567fafadde58ef9a7902a83b1e70
                        <div class="slid_card_text">
                          <p class="card_d_text">{item.title[selectedLanguage]}</p>
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
};

export default Activites