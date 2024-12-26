import React from 'react';
import { useLocation } from 'react-router-dom';
import { cardData } from './Kitecampdata';
import headerbackimg from '../../Images/kitecampbg.webp';
import map from '../../Images/map.webp';
import Searchfilter from '../../Components/SearchFilter/Searchfilter';

const Kitecamp = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const anyTime = queryParams.get('anyTime');
    const chooseStyle = queryParams.get('chooseStyle');

    // Filter the cardData based on query parameters
    const filteredData = cardData.filter((card) => {
        const matchesAnyTime = !anyTime || card.anyTime.includes(anyTime);
        const matchesChooseStyle = !chooseStyle || card.chooseStyle === chooseStyle;
        return matchesAnyTime && matchesChooseStyle;
    });

    return (
        <div>
            {/* Background image for kitecamp */}
            <div className="page_cont">
                <img src={headerbackimg} className='headerbackimg' alt="Background" />
            </div>

            {/* Kitecamp page content */}
            <div className="container-fluid mt-5">
                <h3 className="kite_text">Find your kite adventure</h3>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="video-container">
                            <img src={map} className='map' alt="Map" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Searchfilter />
                        <div className="trip_main_card mt-4">
                            <div className="row">
                                {filteredData.map((card) => (
                                    <div key={card.id} className="col-lg-4 mb-3">
                                        <div
                                            className="card card-bg mb-3"
                                            style={{
                                                backgroundImage: `url(${card.img})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: '250px',
                                                borderRadius: '10px',
                                            }}
                                        >
                                            <div className="card-body crdbody mb-3"></div>
                                        </div>
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
