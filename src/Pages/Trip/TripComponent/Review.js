// import React from 'react'
// import img1 from "../../../Images/default-avatar-2020-44.jpg"


// const Reviewdata = [
//     {
//         id: "1",
//         img: img1,
//         name: "Emma Rietveld",
//         date: "April 17",
//         start: "5",
//         title: "WE had the best time!",
//         para: "It was Wad N Party again last weekend! Well organised, good food, fun evenings and of course kiting!",
//     },
//     {
//         id: "2",
//         img: img1,
//         name: "FirstMate Appie",
//         date: "July 21",
//         start: "5",
//         title: "WE had the best time!",
//         para:" Last weekend I went to the Wadden with Kite Active for the Sail & Kite trip. It was a wonderful weekend away. ",
//     },
//     {
//         id: "3",
//         img: img1,
//         name: "Sietse",
//         date: "March 6",
//         start: "5",
//         title: "WE had the best time!",
//         para: "We went on a trip with KiteActive. It was fun. The boat left Franeker on Friday, but we were allowed to come and spend the night on Thursday. .",
//     },
//     {
//         id: "4",
//         img: img1,
//         name: "marc van der drift",
//         date: "June 5",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Amazing weekend, awesome crew, wicked people!!!",
//     },
//     {
//         id: "5",
//         img: img1,
//         name: "Willem Schinkelshoek",
//         date: "July 19",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Had a great time in brasiel good organised super nice guids.see you next time.",
//     },
//     {
//         id: "6",
//         img: img1,
//         name: "Cobie Harkema",
//         date: "August 20",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Great travel experiences with Kiteactive!Learn big tricks in Tarifa, sail and kite during the Wadden weekend and downwind twice in ",
//     },
//     {
//         id: "7",
//         img: img1,
//         name: "ilse de vries",
//         date: "July 5",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Our first trip with KiteActive was an immediate success. Well organized and an unforgettable experience. ",
//     },
//     {
//         id: "8",
//         img: img1,
//         name: "Ann DS",
//         date: "August 3",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Just got back from a week in Tarifa with the KiteActive gang - what a brilliant week, we had wind pretty much every day, stayed.",
//     },
// ]

// const Review = () => {
//   return (
//     <div>
//       <div className="container-fluid">
//         <div className='row p-3'>
//           {/* Review card */}
//           {Reviewdata.map(({ img, name, date, title, para, }) => (
//             <div className='col-md-3 mt-4'>
//               <div className='card h-100 p-4 border-0 review_card'>
//                 <div className='row'>
//                   <div className='col-3'>
//                     <img src={img} alt="" width="100%" className='rounded-circle' />
//                   </div>
//                   <div className='col-9'>
//                     <div className='col'><b>{name}</b></div>
//                     <div className='col'>{date}</div>
//                   </div>
//                 </div>
//                 <div className='row'>
//                   <div>
//                     <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
//                     <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
//                     <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
//                     <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
//                     <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
//                   </div>
//                   {/* <p><b>{title}</b></p> */}
//                   <p>{para}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Review

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../../../Images/default-avatar-2020-44.jpg";

const Reviewdata = [
  {
    id: "1",
    img: img1,
    name: "Emma Rietveld",
    date: "April 17",
    start: "5",
    title: "WE had the best time!",
    para: "It was Wad N Party again last weekend! Well organised, good food, fun evenings and of course kiting!",
  },
  {
    id: "2",
    img: img1,
    name: "FirstMate Appie",
    date: "July 21",
    start: "5",
    title: "WE had the best time!",
    para: "Last weekend I went to the Wadden with Kite Active for the Sail & Kite trip. It was a wonderful weekend away.",
  },
  {
    id: "3",
    img: img1,
    name: "Sietse",
    date: "March 6",
    start: "5",
    title: "WE had the best time!",
    para: "We went on a trip with KiteActive. It was fun. The boat left Franeker on Friday, but we were allowed to come and spend the night on Thursday.",
  },
  {
    id: "4",
    img: img1,
    name: "Marc van der Drift",
    date: "June 5",
    start: "5",
    title: "WE had the best time!",
    para: "Amazing weekend, awesome crew, wicked people!!!",
  },
  {
    id: "5",
    img: img1,
    name: "Willem Schinkelshoek",
    date: "July 19",
    start: "5",
    title: "WE had the best time!",
    para: "Had a great time in Brasil, well organized, super nice guides. See you next time.",
  }
];

const responsive = {
  superLargeDesktop: { 
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

const ReviewCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      keyBoardControl={true}
      containerClass="review_carousel-container"
      itemClass="review_carousel-item-padding-40-px"
      arrows={true}
      autoPlay={false}
    >
      {Reviewdata.map(({ img, name, date, para }, index) => (
        <div key={index} >
          <div className="card p-3 h-100">
          <div className="row">
            <div className="review_image-container">
            <div class="row">
              <div className='col-4'>
                <img src={img} alt="" width="100%" className='review_rounded-circle' />
              </div>
              <div className='col-8'>
                <div className='col review_name'><b>{name}</b></div>
                <div className='col review_date'>{date}</div>
              </div>
            </div>
            </div>
            <div className="review_card-body">
              {/* <h3 className="name">{name}</h3>
              <p className="date">{date}</p> */}
              <div>
                <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
              </div>
              <p className="review_para">{para}</p>
            </div>
          </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
