import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cardData } from './Kitecampdata';
// import headerbackimg from '../../Images/kitecampbg.webp';
import Searchfilter from '../../Components/SearchFilter/Searchfilter';

import img1 from '../../Images/kc1.webp';
import img2 from '../../Images/kc2.webp';
import img3 from '../../Images/kc3.webp';
import img4 from '../../Images/kc4.webp';
import img5 from '../../Images/kc5.webp';
// import img6 from '../../Images/kc6.png';
import img7 from '../../Images/kc7.webp';
import img8 from '../../Images/kc8.webp';
import img9 from '../../Images/kc10.webp';
// import img10 from '../../Images/kc10.webp';

import markerimg from '../../Images/map_markerss.png'

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
    const infoWindowRef = useRef(null); // Reference for InfoWindow
    const markersRef = useRef([]); // Reference for all markers

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
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 25.6568547, lng: 37.4548587 },
                zoom: 2,
            });

            const infoWindow = new window.google.maps.InfoWindow(); // Create a single InfoWindow instance
            infoWindowRef.current = infoWindow;

            const locations = [
                { id: 1, lat: -6.5685685, lng: 40.6565587, title: "Vanlife", img: img1 },
                { id: 2, lat: 20.2664612, lng: 100.5354689, title: "Zanzibar", img: img2 },
                { id: 3, lat: 35.2664588, lng: 80.5858585, title: "Snowkite", img: img3 },
                { id: 4, lat: 50.3526525, lng: 39.6958478, title: "KiteMecca Tarifa", img: img4 },
                { id: 5, lat: 25.6568547, lng: 37.4548587, title: "Endless Summer Party", img: img5 },
                { id: 7, lat: 55.4585874, lng: 90.5485874, title: "Brazil", img: img7 },
                { id: 8, lat: 60.8958785, lng: 12.8547858, title: "Dakhla", img: img8 },
                { id: 10, lat: 45.8958785, lng: 15.8547858, title: "Sicily", img: img9 },

            ];

            const markers = locations.map((location) => {
                const marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map,
                    title: location.title,
                    icon: {
                        url: markerimg, // Custom yellow marker
                    },
                });

                marker.addListener("mouseover", () => {
                    // Add both title and image in infoWindow content
                    const content = `
                        <div class="map_hover_card">
                            <img src="${location.img}" alt="${location.title}" class="map_card_img" style="width: 100px; height: 100px; object-fit: cover;"/>
                            <h5>${location.title}</h5>
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

        loadGoogleMapsScript();
    }, []);

    useEffect(() => {
        // Show InfoWindow for activeTrip
        if (activeTrip !== null && infoWindowRef.current && markersRef.current.length) {
            const activeMarker = markersRef.current.find((marker) => marker.id === activeTrip);
            if (activeMarker) {
                infoWindowRef.current.setContent(activeMarker.title);
                infoWindowRef.current.setPosition({
                    lat: activeMarker.lat,
                    lng: activeMarker.lng,
                });
                infoWindowRef.current.open(activeMarker.marker.getMap(), activeMarker.marker);
            }
        } else if (infoWindowRef.current) {
            // infoWindowRef.current.close();
        }
    }, [activeTrip]);


    useEffect(() => {
        if (activeTrip !== null && infoWindowRef.current) {
            const activeMarker = markersRef.current.find(marker => marker.id === activeTrip);
            if (activeMarker) {
                const content = `
                    <div class="map_hover_card d-flex">
                    <img src="${activeMarker.img}" alt="${activeMarker.title}" class="map_card_img" />
                    <h5>${activeMarker.title}</h5>
                    </div>
                `;
                infoWindowRef.current.setContent(content);
                infoWindowRef.current.setPosition({
                    lat: activeMarker.lat,
                    lng: activeMarker.lng,
                });
                infoWindowRef.current.open(activeMarker.marker.getMap(), activeMarker.marker);
            }
        } else if (infoWindowRef.current) {
            // infoWindowRef.current.close();
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
                                {filteredData.map((card) => (
                                    <div key={card.id} className="col-lg-4 mb-3"
                                        onMouseEnter={() => setActiveTrip(card.id)}
                                        onMouseLeave={() => setActiveTrip(null)}
                                    >
                                        <Link to={card.path}>
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
