import React, { useState, useEffect } from 'react';
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
import './TripComponent/Trips.css'
import { Link, useParams } from 'react-router-dom';
import Booking from '../Kitecamps/Booking';
import Surfcampslider from '../../Components/Surfcampslider/Surfcampslider';

import checkicon from '../../Images/check-mark.png'

const Trip = ({ selectedLanguage }) => {
    const { trip_name } = useParams();
    const trip = trips.find(t => t.name.toLowerCase() === trip_name.toLowerCase());

    const [activeTab, setActiveTab] = useState('OVERVIEW');

    useEffect(() => {
        setActiveTab('OVERVIEW');
    }, [trip_name])

    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
    };

    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div>
            <Helmet>
                <title>KiteActive</title>
                <meta name="description" content="This is the home page of your website where you can find information about surfcamps, lifestyle, and more." />
                <meta name="keywords" content="surfcamp, lifestyle, adventure, activities, reviews" />
                <link rel="canonical" href="https://kiteactiveventures.com/kitecamp" />
                {trip?.backcover && <link rel="preload" as="image" href={trip.backcover} />}
            </Helmet>



            {/* Video section */}
            <div className="video-container">
                {trip?.vedio && (
                    <>
                        {/* Ensure the image loads instantly */}
                        {!videoLoaded && (
                            <img
                                src={trip.backcover}
                                alt="Loading..."
                                className="placeholder-image"
                                loading="eager" // Prioritize image loading
                                style={{ display: videoLoaded ? 'none' : 'block' }} // Hide image once the video loads
                            />
                        )}

                        <video
                            key={trip.vedio}
                            autoPlay
                            loop
                            muted
                            className="background-video"
                            style={{ display: videoLoaded ? 'block' : 'none' }} // Only display video when it is ready
                            onCanPlayThrough={() => setVideoLoaded(true)} // Trigger video load completion
                            loading="lazy" // Lazy load the video for better performance
                        >
                            <source src={trip.vedio} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </>
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
                    {activeTab === 'OVERVIEW' && trip?.overview && (
                        <Overview overviewData={trip.overview} selectedLanguage={selectedLanguage} />
                    )}
                    {activeTab === 'KITESPOTS' && trip?.kitespot && (
                        <Kitespots kitespotData={trip.kitespot} selectedLanguage={selectedLanguage} />
                    )}
                    {activeTab === 'PACKAGES' && trip?.packages && (
                        <Packages packagesData={trip.packages} selectedLanguage={selectedLanguage} />
                    )}
                    {activeTab === 'ACCOMMODATION' && trip?.accommodation && (
                        <Accomodation accommodationData={trip.accommodation} selectedLanguage={selectedLanguage} />
                    )}
                    {activeTab === 'INCLUDED' && trip?.included && <Included />}
                    {activeTab === 'REVIEWS' && trip?.reviews && (
                        <Review />
                    )}
                    {activeTab === 'HOSTED_BY' && trip?.hosted && (
                        <Hosted hostedData={trip.hosted} selectedLanguage={selectedLanguage} />
                    )}
                    {activeTab === 'ACTIVITIES' && trip?.activities && (
                        <Activites activitiesData={trip.activities} selectedLanguage={selectedLanguage} />
                    )}
                </div>

                <div>


                    <div className="container-fluid m-0 p-0">
                        <div className="row ">
                            <div className="col">
                                <div className='strip'>
                                    <div>
                                        <h5 className='strip_text'>Free rebooking up to 14 days prior to arrivalRead <span>
                                            <Link to="/" className='strip_link'>Read more</Link>
                                        </span></h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            {trip?.alltabs && (

                                <div className="container-fluid">
                                    <div className="row">
                                        {/* Highlights/Inclusions Section */}
                                        {trip.alltabs.highlight && (
                                            <>
                                                <h2 className='text-center surf_text mt-5'>Highlights/Inclusions</h2>
                                                {trip.alltabs.highlight.map((items, index) => (
                                                    <div className='d-flex '>
                                                        <img src={checkicon} alt="icon" className='check_icon' />

                                                        <p className='mx-2 high_text' key={index}>{items.text[selectedLanguage] || 'No translation available'}</p>
                                                    </div>
                                                ))}
                                            </>
                                        )}

                                        {/* Questions Section */}
                                        {/* Questions Section */}
                                        {trip.alltabs.question && (
                                            <>
                                                <h2 className='text-center surf_text mt-4 mb-5'>Do you have questions? We have answers!</h2>
                                                <div className="container">
                                                    <div className="row">
                                                        {trip.alltabs.question.map((items, index) => (
                                                            <div className="col-md-6" key={index}> {/* This creates two columns in a single row */}
                                                                <details className=''>
                                                                    <summary className='p_faq'>{items.title[selectedLanguage] || 'No translation available'}</summary>
                                                                    <div className="p_faq__content fs-5 mb-2">
                                                                        <p>{items.para[selectedLanguage] || 'No translation available'}</p>
                                                                    </div>
                                                                </details>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}


                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <Surfcampslider selectedLanguage={selectedLanguage} />
                    <Booking tripName={trip_name} />

                </div>


            </div>
        </div>
    );
};

export default Trip;