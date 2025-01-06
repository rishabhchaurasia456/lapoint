import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Kitespots from './TripComponent/Kitespots';
import Packages from './TripComponent/Packages';
import Accomodation from './TripComponent/Accomodation';
// import Included from './TripComponent/Included';
import Review from './TripComponent/Review';
import Hosted from './TripComponent/Hosted';
import Activites from './TripComponent/Activites';
import Overview from './TripComponent/Overview';
import trips from './Tripdata';
import './TripComponent/Trips.css'
import { Link, useLocation, useParams } from 'react-router-dom';
import config from '../../config/config';
import Booking from '../Kitecamps/Booking';
import Surfcampslider from '../../Components/Surfcampslider/Surfcampslider';



// see all images here  
const Trip = ({ selectedLanguage }) => {

    const { trip_name } = useParams();
    const trip = trips.find(t => t.name.toLowerCase() === trip_name.toLowerCase());

    const [activeTab, setActiveTab] = useState('OVERVIEW');

    useEffect(() => {
        setActiveTab('OVERVIEW');
    }, [trip_name])

    // const handleButtonClick = (tabName) => {
    //     setActiveTab(tabName);
    // };

    const [videoLoaded, setVideoLoaded] = useState(false);


    // ----------------------------------------

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const userId = params.get('id');

        // Check if the userId is present in the URL
        if (userId) {
            // Store the userId in localStorage so it's persisted across page visits
            localStorage.setItem('userId', userId);
            trackVisit(userId, window.location.pathname);
        } else {
            // If userId is not in the URL, get it from localStorage
            const storedUserId = localStorage.getItem('userId');
            if (storedUserId) {
                trackVisit(storedUserId, window.location.pathname);
            }
        }
    }, [location]);

    // Function to send visit data to the backend
    const trackVisit = (userId, page) => {
        fetch(`${config.API_BASE_URL}/api/affiliate/track`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: userId, page: page })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Visit tracked:", data);
            })
            .catch(error => {
                console.error("Error tracking visit:", error);
            });
    };
    // ----------------------------------------


    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
        document.getElementById(tabName)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sectionOffsets = {
                OVERVIEW: document.getElementById('OVERVIEW')?.offsetTop || 0,
                KITESPOTS: document.getElementById('KITESPOTS')?.offsetTop || 0,
                PACKAGES: document.getElementById('PACKAGES')?.offsetTop || 0,
                ACCOMMODATION: document.getElementById('ACCOMMODATION')?.offsetTop || 0,
                INCLUDED: document.getElementById('INCLUDED')?.offsetTop || 0,
                REVIEWS: document.getElementById('REVIEWS')?.offsetTop || 0,
                HOSTED_BY: document.getElementById('HOSTED_BY')?.offsetTop || 0,
                ACTIVITIES: document.getElementById('ACTIVITIES')?.offsetTop || 0,
            };
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const [tab, offset] of Object.entries(sectionOffsets)) {
                if (scrollPosition >= offset) {
                    setActiveTab(tab);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


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

                        <video key={trip.vedio}
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



            <div>
                <Helmet>
                    <title>KiteActive</title>
                    {/* Helmet content */}
                </Helmet>

                {/* Tab Buttons */}
                <div className="container">
                    <div className="row">
                        <div className="col">

                            {/* this is all tabs in this container  */}

                            <div className="mb-2 my-3 text-center">
                                {/* {trip?.overview && (
                                <button className="trip_tabs" onClick={() => handleButtonClick('OVERVIEW')}>
                                    <p>OVERVIEW</p>
                                </button>
                            )}
                             */}
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

                {/* Sections with IDs */}

                {/* and this is all tabs data here  */}
                <div className="container-fluid">

                    <div id="OVERVIEW" className="output-container">
                        {trip?.overview && <Overview overviewData={trip.overview} selectedLanguage={selectedLanguage} />}
                    </div>


                    <div id="KITESPOTS" className="output-container">
                        {trip?.kitespot && <Kitespots kitespotData={trip.kitespot} selectedLanguage={selectedLanguage} />}
                    </div>

                    <details>
                        <summary>View Packages</summary>
                        <div id="PACKAGES" className="output-container">
                            {trip?.packages && <Packages packagesData={trip.packages} selectedLanguage={selectedLanguage} />}
                        </div>
                    </details>


                    <div id="ACCOMMODATION" className="output-container">
                        {trip?.accommodation && (
                            <Accomodation accommodationData={trip.accommodation} selectedLanguage={selectedLanguage} />
                        )}
                    </div>

                    <div id="REVIEWS" className="output-container">
                        {trip?.reviews && (
                            <Review reviewsData={trip.reviews} selectedLanguage={selectedLanguage} />
                        )}
                    </div>

                    <div id="HOSTED_BY" className="output-container">
                        {trip?.hosted && (
                            <Hosted hostedData={trip.hosted} selectedLanguage={selectedLanguage} />
                        )}
                    </div>

                    <div id="ACTIVITIES" className="output-container">
                        {trip?.activities && (
                            <Activites activitiesData={trip.activities} selectedLanguage={selectedLanguage} />
                        )}
                    </div>

                    {/* Repeat for other sections with corresponding IDs */}
                </div>

                {/* {/ See all photo section  /} */}

                <Surfcampslider selectedLanguage={selectedLanguage} />
                <Booking tripName={trip_name} />

            </div>
        </div>
    );
};

export default Trip;