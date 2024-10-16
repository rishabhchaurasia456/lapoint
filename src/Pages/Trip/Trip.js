import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Kitespots from './TripComponent/Kitespots';
import Packages from './TripComponent/Packages';
import Accomodation from './TripComponent/Accomodation';
import Included from './TripComponent/Included';
import Review from './TripComponent/Review';
import Hosted from './TripComponent/Hosted';
import Activites from './TripComponent/Activites';
import Overview from './TripComponent/Overview';
import trips from './Tripdata';
import { useParams } from 'react-router-dom';

const Trip = ({ selectedLanguage }) => {
    const { trip_name } = useParams();
    const trip = trips.find(t => t.name.toLowerCase() === trip_name.toLowerCase());

    const [activeTab, setActiveTab] = useState('OVERVIEW');

    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <Helmet>
                <title>KiteActive</title>
                <meta name="description" content="This is the home page of your website where you can find information about surfcamps, lifestyle, and more." />
                <meta name="keywords" content="surfcamp, lifestyle, adventure, activities, reviews" />
                <link rel="canonical" href="https://kiteactiveventures.com/kitecamp" />
            </Helmet>

            {/* Video section */}
            <div className="video-container">
                {trip?.vedio && (
                    <video autoPlay loop muted className="background-video">
                        <source src={trip.vedio} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

                {/* Conditionally render the tab buttons based on the available data */}
            <div className="container">
                <div class="row">
                    <div class="col ">{/* tab_scroll class for scroll bar */}
                        <div className=" mb-2 my-3 text-center ">
                            {trip?.overview && (
                                <button className="trip_tabs" onClick={() => handleButtonClick('OVERVIEW')}>
                                    <p>OVERVIEW</p>
                                </button>
                            )}
                            {trip?.kitespot && (
                                <button className="trip_tabs" onClick={() => handleButtonClick('KITESPOTS')}>
                                    <p>KITESPOTS</p>
                                </button>
                            )}
                            {trip?.packages && (
                                <button className="trip_tabs" onClick={() => handleButtonClick('PACKAGES')}>
                                    <p>PACKAGES</p>
                                </button>
                            )}
                            {trip?.accommodation && (
                                <button className="trip_tabs" onClick={() => handleButtonClick('ACCOMMODATION')}>
                                    <p>ACCOMMODATION</p>
                                </button>
                            )}
                            {trip?.included && (
                                <button className="trip_tabs" onClick={() => handleButtonClick('INCLUDED')}>
                                    <p>INCLUDED</p>
                                </button>
                            )}
                            {trip?.reviews && (
                                <button className="trip_tabs" onClick={() => handleButtonClick('REVIEWS')}>
                                    <p>REVIEWS</p>
                                </button>
                            )}
                            {trip?.hosted && (
                                <button className="trip_tabs" onClick={() => handleButtonClick('HOSTED_BY')}>
                                    <p>HOSTED BY</p>
                                </button>
                            )}
                            {trip?.activities && (
                                <button className="trip_tabs" onClick={() => handleButtonClick('ACTIVITIES')}>
                                    <p>ACTIVITIES</p>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="output-container">
                    {/* Conditionally render the components based on the active tab and the available data */}
                    {activeTab === 'OVERVIEW' && trip?.overview && (
                        <Overview overviewData={trip.overview} selectedLanguage={selectedLanguage} />
                    )}
                    {activeTab === 'KITESPOTS' && trip?.kitespot && (
                        <Kitespots kitespotData={trip.kitespot} selectedLanguage={selectedLanguage} />
                    )}
                    {activeTab === 'PACKAGES' && trip?.packages && <Packages />}
                    {activeTab === 'ACCOMMODATION' && trip?.accommodation && <Accomodation />}
                    {activeTab === 'INCLUDED' && trip?.included && <Included />}
                    {activeTab === 'REVIEWS' && trip?.reviews && <Review />}
                    {activeTab === 'HOSTED_BY' && trip?.hosted && <Hosted />}
                    {activeTab === 'ACTIVITIES' && trip?.activities && <Activites />}
                </div>
            </div>
        </div>
    );
};

export default Trip;