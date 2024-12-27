import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { cardData } from './Kitecampdata';
import headerbackimg from '../../Images/kitecampbg.webp';
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

    const [activeTrip, setActiveTrip] = useState(null); // Track active trip on hover
    const mapRef = useRef(null);

    useEffect(() => {
        // Load Google Maps script
        const loadGoogleMapsScript = () => {
            const script = document.createElement("script");
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDrMzk5Yfhc4vX4jwU2vlyxFS4X7Bl4bos&callback=initMap";
            script.async = true;
            script.defer = true;
            window.initMap = initMap; // Assign initMap globally
            document.head.appendChild(script);
        };

        const initMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 37.7749, lng: -122.4194 }, // Default location (San Francisco)
                zoom: 10,
            });

            // Marker locations
            const locations = [
                { id: 1, lat: 37.7749, lng: -122.4194, title: "San Francisco" },
                { id: 2, lat: 37.7849, lng: -122.4094, title: "Another Location" },
                { id: 3, lat: 37.7949, lng: -122.3994, title: "Yet Another Location" },
                // Add more markers as needed
            ];

            const markers = locations.map((location) => {
                const marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.title,
                });

                // Optional: Add Info Window to each marker for debugging
                const infoWindow = new window.google.maps.InfoWindow({
                    content: location.title,
                });

                marker.addListener("click", () => {
                    infoWindow.open(map, marker);
                });

                return { ...location, marker };
            });

            // Highlight the marker when activeTrip changes
            if (activeTrip !== null) {
                markers.forEach((location) => {
                    if (location.id === activeTrip) {
                        location.marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png'); // Change color to blue for active trip
                    } else {
                        location.marker.setIcon(null); // Reset the marker icon
                    }
                });
            }
        };

        loadGoogleMapsScript();

    }, [activeTrip]); // Re-run whenever activeTrip changes

    return (
        <div>
            <div className="page_cont">
                <img src={headerbackimg} className='headerbackimg' alt="Background" />
            </div>

            {/* Kitecamp page content */}
            <div className="container-fluid mt-5">
                <h3 className="kite_text">Find your kite adventure</h3>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="Map_container">
                            <div ref={mapRef} style={{ width: "100%", height: "700px" }} className='map'></div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <Searchfilter />
                        <div className="trip_main_card mt-4">
                            <div className="row">
                                {filteredData.map((card) => (
                                    <div key={card.id} className="col-lg-4 mb-3"
                                        onMouseEnter={() => setActiveTrip(card.id)} // Set active trip on hover
                                        onMouseLeave={() => setActiveTrip(null)}  // Reset active trip on mouse leave
                                    >
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
