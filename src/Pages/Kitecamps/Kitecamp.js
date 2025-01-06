import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import config from '../../config/config';
import Searchfilter from '../../Components/SearchFilter/Searchfilter';

import img1 from '../../Images/kc1.webp';
import img2 from '../../Images/kc2.webp';
import img3 from '../../Images/kc3.webp';
import img4 from '../../Images/kc4.webp';
import img5 from '../../Images/kc5.webp';
import img7 from '../../Images/kc7.webp';
import img8 from '../../Images/kc8.webp';
import img9 from '../../Images/kc10.webp';

import markerimg from '../../Images/map_markerss.png';

const Kitecamp = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const anyTime = queryParams.get('anyTime');
    const chooseStyle = queryParams.get('chooseStyle');

    const [cardData, setcardData] = useState([]);
    const [locationdata, setLocationdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_triplink`);
                setcardData(response.data.getallTripLink || []);
                setLocationdata(response.data.getallTripLink || []);
                console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmm", response.data.getallTripLink)
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    const filteredData = cardData.filter((card) => {
        const matchesAnyTime = !anyTime || card.anytime.includes(anyTime.toLowerCase());
        const matchesChooseStyle = !chooseStyle || card.choosestyle.includes(chooseStyle.toLowerCase());
        return matchesAnyTime && matchesChooseStyle;
    });

    const [activeTrip, setActiveTrip] = useState(null);
    const mapRef = useRef(null);
    const infoWindowRef = useRef(null);
    const markersRef = useRef([]);

    useEffect(() => {
        const loadGoogleMapsScript = () => {
            const script = document.createElement("script");
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDrMzk5Yfhc4vX4jwU2vlyxFS4X7Bl4bos&callback=initMap";
            script.async = true;
            script.defer = true;
            window.initMap = initMap;
            document.head.appendChild(script);
        };

        const initMap = () => {
            if (!locationdata.length) {
                console.log("No location data available yet.");
                return;
            }

            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 25.6568547, lng: 37.4548587 },
                zoom: 2,
            });

            const infoWindow = new window.google.maps.InfoWindow(); // Create a single InfoWindow instance
            infoWindowRef.current = infoWindow;

            const markers = locationdata.map((location) => {
                const imageUrl = `${config.API_BASE_URL}/${location.img.replace(/\\/g, '/')}`;
                console.log("imageUrl", imageUrl)
                const marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map,
                    title: location.tripName,
                    icon: {
                        url: markerimg,
                    },
                });

                marker.addListener("mouseover", () => {
                    const content = `
                    <div class="map_hover_card">
                        <img src="${imageUrl}" alt="${location.tripName}" class="map_card_img" style="width: 100px; height: 100px; object-fit: cover;"/>
                        <h5>${location.tripName}</h5>
                    </div>
                `;
                    infoWindow.setContent(content);
                    infoWindow.open(map, marker);
                });
                marker.addListener("mouseout", () => {
                    infoWindow.close();
                });

                return { ...location, marker };
            });

            markersRef.current = markers;
        };

        if (locationdata.length) {
            // If the Google Maps script is not already loaded
            if (!window.google) {
                loadGoogleMapsScript();
            } else {
                initMap(); // If the script is already loaded, initialize the map directly
            }
        }
    }, [locationdata]);

    useEffect(() => {
        if (activeTrip !== null && infoWindowRef.current) {
            const activeMarker = markersRef.current.find((marker) => marker._id === activeTrip);

            if (activeMarker) {
                const imageUrl = `${config.API_BASE_URL}/${activeMarker.img.replace(/\\/g, '/')}`;  // Ensure proper image URL
                console.log("Active Marker Image URL:", imageUrl);

                // Validate the lat and lng values
                const lat = Number(activeMarker.lat);
                const lng = Number(activeMarker.lng);
                if (isNaN(lat) || isNaN(lng)) {
                    console.error("Invalid coordinates for active marker:", { lat, lng });
                    return;  // Skip updating the InfoWindow if coordinates are invalid
                }

                // Set the content for the InfoWindow
                const content = `
                    <div class="map_hover_card d-flex">
                        <img src="${imageUrl}" alt="${activeMarker.tripName}" class="map_card_img" style="width: 100px; height: 100px; object-fit: cover;" 
                            onerror="this.src='${markerimg}'"
                        />
                        <h5>${activeMarker.tripName}</h5>
                    </div>
                `;

                infoWindowRef.current.setContent(content);
                infoWindowRef.current.setPosition({ lat, lng });
                infoWindowRef.current.open(activeMarker.marker.getMap(), activeMarker.marker);
            }
        } else if (infoWindowRef.current) {
            // Close the InfoWindow if no active trip
            infoWindowRef.current.close();
        }
    }, [activeTrip]);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="Map_container">
                            <div ref={mapRef} style={{ width: "100%", height: "800px" }} className='map'></div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="trip_main_card">
                            <div className="row mb-0 pb-0">
                                <div className='search_filter_kitecamp'>
                                    <h3 className="kite_text">Find your kite adventure</h3>
                                    <Searchfilter />
                                </div>

                                <div className='calendar_div'>
                                    <Link to="/calendar" className='nav-link calendar_text'> <i class="fa fa-calendar me-2"></i>Kiteholiday Year Calendar <i className='fa fa-angle-double-right'></i></Link>
                                </div>
                                {filteredData.map((card) => (
                                    <div key={card._id} className="col-lg-4 mb-3"
                                        onMouseEnter={() => setActiveTrip(card._id)}
                                        onMouseLeave={() => setActiveTrip(null)}
                                    >
                                        <Link to={card.path}>
                                            <div
                                                className="card card-bg mb-3"
                                                style={{
                                                    backgroundImage: `url(${config.API_BASE_URL}/${card.img.replace(/\\/g, '/')})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    height: '250px',
                                                    borderRadius: '10px',
                                                }}
                                            >
                                                <div className="card-body crdbody mb-3">
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
