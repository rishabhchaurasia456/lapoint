// import React from 'react';
// import { Link } from 'react-router-dom';
// import headerbackimg from '../../Images/kitecampbg.webp';
// import map from '../../Images/map.webp';
// import { cardData } from './Kitecampdata'; // Importing card data


// const Kitecamp = () => {

//     return (
//         <div>
//             {/* Background image for kitecamp */}
//             <div className="page_cont">
//                 <img src={headerbackimg} className='headerbackimg' alt="Background" />
//             </div>

//             {/* Kitecamp page content */}
//             <div className="container-fluid mt-5">

//                 <h3 className='kite_text'>Find your kite adventure</h3>
//                 <div className="row">
//                     <div className="col-lg-4">
//                         <div className="video-container">
//                             <img src={map} className='map' alt="Map" />
//                         </div>
//                     </div>
//                     <div className="col-lg-8">
//                         <div className="trip_main_card">
//                             <div className="row">
//                                 {cardData.map((card) => (
//                                     <div key={card.id} className="col-lg-4 mb-3">
//                                         <Link to={card.path} state={{ trip_data: card.data }}>
//                                             <div className="card card-bg mb-3"
//                                                 style={{
//                                                     backgroundImage: `url(${card.img})`,
//                                                     backgroundSize: 'cover',
//                                                     backgroundPosition: 'center',
//                                                     height: '250px',
//                                                     borderRadius: '10px',
//                                                 }}>
//                                                 <div className="card-body crdbody mb-3">
//                                                     {/* You can add more card-specific content here */}
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default Kitecamp;



import React from 'react';
import { Link } from 'react-router-dom';
import headerbackimg from '../../Images/kitecampbg.webp';
import map from '../../Images/map.webp';
import { cardData } from './Kitecampdata'; // Importing card data


const Kitecamp = () => {

    return (
        <div>
            {/* Background image for kitecamp */}
            <div className="page_cont">
                <img src={headerbackimg} className='headerbackimg' alt="Background" />
            </div>

            {/* Kitecamp page content */}
            <div className="container-fluid mt-5">

                <h3 className='kite_text'>Find your kite adventure</h3>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="video-container">
                            <img src={map} className='map' alt="Map" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="trip_main_card">
                            <div className="row">
                                {cardData.map((card) => (
                                    <div key={card.id} className="col-lg-4 mb-3">
                                        <Link to={card.path} state={{ trip_data: card.data }}>
                                            <div className="card card-bg mb-3"
                                                style={{
                                                    backgroundImage: `url(${card.img})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    height: '250px',
                                                    borderRadius: '10px',
                                                }}>
                                                <div className="card-body crdbody mb-3">
                                                    {/* You can add more card-specific content here */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Kitecamp;