import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
// import vedio from "../../Images/website.filmpje.tarifa.mp4"
import Kitespots from './TripComponent/Kitespots'
import Packages from './TripComponent/Packages'
import Accomodation from './TripComponent/Accomodation'
import Included from './TripComponent/Included'
import Review from './TripComponent/Review'
import Hosted from './TripComponent/Hosted'
import Activites from './TripComponent/Activites'
import Overview from './TripComponent/Overview'
import { useLocation } from 'react-router-dom'
import Booking from '../Kitecamps/Booking'


const Trip = () => {

    const [activeTab, setActiveTab] = useState('OVERVIEW');

    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
    };

    const location = useLocation();
    const { trip_name, img, vedio } = location.state || { trip_name: "mytrips", }; // Default values if no state


    return (
        <div>
            <Helmet>
                <title>KiteActive</title>
                <meta name="description" content="This is the home page of your website where you can find information about surfcamps, lifestyle, and more." />
                <meta name="keywords" content="surfcamp, lifestyle, adventure, activities, reviews" />
                <link rel="canonical" href="https://danstring.co.in/kiteactive/" />
            </Helmet>
            <div>
                {/* <div className="video-container">
                    <video autoPlay loop muted className="background-video">
                        <source src={vedio} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div> */}


                {/* <Helmet>
                <title>{trip_name}</title>
                <meta name="description" content={`Details about ${trip_name}`} />
            </Helmet> */}

                <div className="video-container">
                    <video autoPlay loop muted className="background-video">
                        <source src={vedio} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="container">
                    <h1>{trip_name}</h1>
                    {img && <img src={img} alt={trip_name} className="img-fluid" />}
                    {/* Tabs and other details go here */}
                </div>

                <div className="container">
                    <div className="text-center mb-2 my-3 tab_scroll">
                        <button className="trip_tabs" onClick={() => handleButtonClick('OVERVIEW')}>
                            <p>OVERVIEW</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('KITESPOTS')}>
                            <p>KITESPOTS</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('PACKAGES')}>
                            <p>PACKAGES</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('ACCOMMODATION')}>
                            <p>ACCOMMODATION</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('INCLUDED')}>
                            <p>INCLUDED</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('REVIEWS')}>
                            <p>REVIEWS</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('HOSTED_BY')}>
                            <p>HOSTED BY</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('ACTIVITIES')}>
                            <p>ACTIVITIES</p>
                        </button>
                    </div>
                </div>
                {/* </div> */}
                <div className="container-fluid">
                    <div className="output-container">

                        <div>
                            {activeTab === 'OVERVIEW' && <Overview />}
                            {activeTab === 'KITESPOTS' && <Kitespots />}
                            {activeTab === 'PACKAGES' && <Packages />}
                            {activeTab === 'ACCOMMODATION' && <Accomodation />}
                            {activeTab === 'INCLUDED' && <Included />}
                            {activeTab === 'REVIEWS' && <Review />}
                            {activeTab === 'HOSTED_BY' && <Hosted />}
                            {activeTab === 'ACTIVITIES' && <Activites />}
                        </div>
                    </div>
                </div>

                {/* booking component import here   and this css pages.css */}
                <Booking />
            </div>
        </div>
    )
}

export default Trip