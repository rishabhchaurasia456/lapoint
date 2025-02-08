import React, { useState, useRef, useEffect } from 'react';
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
import { useLocation, useParams } from 'react-router-dom';
import config from '../../config/config';
import Booking from '../Kitecamps/Booking';
import Surfcampslider from '../../Components/Surfcampslider/Surfcampslider';
import axios from 'axios';
import zanzibarcover from "../../Images/tripvedios/zanzibar.webp"



// see all images here  
const Trip = ({ selectedLanguage }) => {

    const { trip_name } = useParams();
    console.log("trip_name", trip_name)
    const trip = trips.find(t => t.name.toLowerCase() === trip_name.toLowerCase());

    const [video, setVideo] = useState(null)

    const [kitespot, setkitespot] = useState(null)
    const [accommodation, setAccommodation] = useState(null)
    const [included, setIncluded] = useState(null)
    const [hosted, setHosted] = useState(null)
    const [packages, setPackages] = useState(null)
    const [activity, setActivity] = useState(null)


    useEffect(() => {
        const fetchvideo = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_trip_video/${trip_name}`);
                console.log("video", response.data.videoid);
                setVideo(response.data.videoid);
            } catch (error) {
                console.error('Error fetching trip levels:', error);
            }
        };

        fetchvideo();
    }, [trip_name]);

    useEffect(() => {
        const fetchkitespot = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_trip_kitespot/${trip_name}`);
                console.log("kitespot", response.data);
                setkitespot(response.data);
            } catch (error) {
                console.error('Error fetching trip levels:', error);
            }
        };

        fetchkitespot();
    }, [trip_name]);

    useEffect(() => {
        const fetchAccommodation = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_trip_accommodation/${trip_name}`);
                console.log("Accommodation", response.data);
                setAccommodation(response.data);
            } catch (error) {
                console.error('Error fetching trip levels:', error);
            }
        };

        fetchAccommodation();
    }, [trip_name]);

    useEffect(() => {
        const fetchHosted = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_trip_hosted/${trip_name}`);
                console.log("Hosted", response.data);
                setHosted(response.data);
            } catch (error) {
                console.error('Error fetching trip levels:', error);
            }
        };

        fetchHosted();
    }, [trip_name]);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_trip_packages/${trip_name}`);
                console.log("Packages", response.data);
                setPackages(response.data);
            } catch (error) {
                console.error('Error fetching trip levels:', error);
            }
        };

        fetchPackages();
    }, [trip_name]);

    useEffect(() => {
        const fetchIncluded = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_trip_included/${trip_name}`);
                console.log("Included", response.data);
                setIncluded(response.data);
            } catch (error) {
                console.error('Error fetching trip levels:', error);
            }
        };

        fetchIncluded();
    }, [trip_name]);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_trip_activitytab/${trip_name}`);
                console.log("Activity", response.data);
                setActivity(response.data);
            } catch (error) {
                console.error('Error fetching trip levels:', error);
            }
        };

        fetchActivity();
    }, [trip_name]);

    console.log("kitespottttttttttttttt", kitespot)
    console.log("accommodationnnnnnnnnnnnnnnnn", accommodation)
    console.log("hosteddddddddddddddddddd", hosted)
    console.log("includedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", included)
    console.log("Activityyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", activity)
    console.log("videooooooooooooooo", video)

    const [activeTab, setActiveTab] = useState('OVERVIEW');

    useEffect(() => {
        setActiveTab('OVERVIEW');
    }, [trip_name])


    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

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


    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const videoContainer = document.querySelector('.video-containers');
            if (!videoContainer) {
                setIsFixed(false); // Ensure the state is updated if the container is not found
                return;
            }

            const videoBottom = videoContainer.getBoundingClientRect().bottom;

            if (videoBottom <= 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

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
                {video ? (
                    <video
                        autoPlay
                        loop
                        muted
                        className="background-video"
                        onLoadedData={handleVideoLoad}
                        loading="lazy"
                        style={{ display: videoLoaded ? 'block' : 'none' }}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={zanzibarcover} alt="Loading..." className="placeholder-image" />
                )}
            </div>


            <div>
                {/* Tab Buttons */}
                <div className={`container-fluid tab_container ${isFixed ? 'fixed' : ''}`}>
                    <div className="row">
                        <div className="col">
                            {/* this is all tabs in this container  */}
                            <div className="text-center">
                                {/* {trip?.overview && (
                                    <button className="trip_tabs" onClick={() => handleButtonClick('OVERVIEW')}>
                                        <p>OVERVIEW</p>
                                    </button>
                                )} */}

                                {kitespot?.data?.length > 0 && (
                                    <button className="trip_tabs" onClick={() => handleButtonClick('KITESPOTS')}>
                                        <p>KITESPOTS</p>
                                    </button>
                                )}

                                {packages?.levelData?.length > 0 && (
                                    <button className="trip_tabs" onClick={() => handleButtonClick('PACKAGES')}>
                                        <p>PACKAGES</p>
                                    </button>
                                )}

                                {included?.cardData?.length && (
                                    <button className="trip_tabs" onClick={() => handleButtonClick('PACKAGES')}>
                                        <p>INCLUDED</p>
                                    </button>
                                )}


                                {accommodation?.cardData?.length > 0 && (
                                    <button className="trip_tabs" onClick={() => handleButtonClick('ACCOMMODATION')}>
                                        <p>ACCOMMODATION</p>
                                    </button>
                                )}

                                {trip?.reviews && (
                                    <button className="trip_tabs" onClick={() => handleButtonClick('REVIEWS')}>
                                        <p>REVIEWS</p>
                                    </button>
                                )}


                                {hosted?.members?.length > 0 && (
                                    <button className="trip_tabs" onClick={() => handleButtonClick('HOSTED_BY')}>
                                        <p>HOSTED BY</p>
                                    </button>
                                )}

                                {activity?.activities?.length > 0 && (
                                    <button className="trip_tabs" onClick={() => handleButtonClick('ACTIVITIES')}>
                                        <p>ACTIVITIES</p>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sections with IDs */}
                <div className="container Accordion_tab_cont">
                    {activeTab === 'OVERVIEW' && <div> </div>}
                    <Overview overviewData={trip?.overview} tripname={trip_name} selectedLanguage={selectedLanguage} />


                    {kitespot?.data?.length > 0 &&
                        <div className="Accordion" id="KITESPOTS">
                            <button onClick={() => toggleSection('KITESPOTS')} className='accor_btn'>
                                KITESPOTS
                                <span className="accor_arrow">
                                    <i className={`fa ${openSection === 'KITESPOTS' ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
                                </span>
                            </button>
                            {openSection === 'KITESPOTS' && (
                                <div className="output-container">
                                    {kitespot?.data?.length > 0 && <Kitespots kitespotData={kitespot} selectedLanguage={selectedLanguage} />}
                                </div>
                            )}
                        </div>
                    }

                    {packages?.levelData?.length > 0 &&
                        <div className="Accordion" id="PACKAGES">
                            <button onClick={() => toggleSection('PACKAGES')} className='accor_btn'>
                                PACKAGES
                                <span className="accor_arrow">
                                    <i className={`fa ${openSection === 'KITESPOTS' ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
                                </span>
                            </button>
                            {openSection === 'PACKAGES' && (
                                <div className="output-container">
                                    {packages?.levelData?.length > 0 && <Packages packagesData={packages} selectedLanguage={selectedLanguage} />}
                                </div>
                            )}
                        </div>
                    }

                    {/* <Included/> */}
                    {included?.cardData?.length > 0 &&
                        <div className="Accordion" id="INCLUDED">
                            <button onClick={() => toggleSection('INCLUDED')} className='accor_btn'>
                                INCLUDED
                                <span className="accor_arrow">
                                    <i className={`fa ${openSection === 'INCLUDED' ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
                                </span>
                            </button>
                            {openSection === 'INCLUDED' && (
                                <div className="output-container">
                                    {included?.cardData?.length && <Included data={included} selectedLanguage={selectedLanguage} />}
                                </div>
                            )}
                        </div>
                    }

                    {accommodation?.cardData?.length > 0 &&
                        <div className="Accordion" id="ACCOMMODATION">
                            <button onClick={() => toggleSection('ACCOMMODATION')} className='accor_btn'>
                                ACCOMMODATION
                                <span className="accor_arrow">
                                    <i className={`fa ${openSection === 'KITESPOTS' ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
                                </span>
                            </button>
                            {openSection === 'ACCOMMODATION' && (
                                <div className="output-container">
                                    {accommodation?.cardData?.length > 0 && <Accomodation accommodationData={accommodation} selectedLanguage={selectedLanguage} />}
                                </div>
                            )}
                        </div>
                    }

                    <div className="Accordion" id="REVIEWS">
                        <button onClick={() => toggleSection('REVIEWS')} className='accor_btn'>
                            REVIEWS
                            <span className="accor_arrow">
                                <i className={`fa ${openSection === 'KITESPOTS' ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
                            </span>
                        </button>
                        {openSection === 'REVIEWS' && (
                            <div className="output-container">
                                {trip?.reviews && <Review reviewsData={trip.reviews} selectedLanguage={selectedLanguage} />}
                            </div>
                        )}
                    </div>

                    {hosted?.members?.length > 0 &&
                        <div className="Accordion" id="HOSTED_BY">
                            <button onClick={() => toggleSection('HOSTED_BY')} className='accor_btn'>
                                HOSTED BY
                                <span className="accor_arrow">
                                    <i className={`fa ${openSection === 'KITESPOTS' ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
                                </span>
                            </button>
                            {openSection === 'HOSTED_BY' && (
                                <div className="output-container">
                                    {hosted?.members?.length > 0 && <Hosted hostedData={hosted} selectedLanguage={selectedLanguage} />}
                                </div>
                            )}
                        </div>
                    }

                    {activity?.activities?.length > 0 &&
                        <div className="Accordion" id="ACTIVITIES">
                            <button onClick={() => toggleSection('ACTIVITIES')} className='accor_btn'>
                                ACTIVITIES
                                <span className="accor_arrow">
                                    <i className={`fa ${openSection === 'KITESPOTS' ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
                                </span>
                            </button>
                            {openSection === 'ACTIVITIES' && (
                                <div className="output-container">
                                    {activity?.activities?.length > 0 && <Activites activitiesData={activity} selectedLanguage={selectedLanguage} />}
                                </div>
                            )}
                        </div>
                    }
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