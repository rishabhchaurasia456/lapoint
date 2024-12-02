import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import config from '../config/config';

const PageTracker = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Get the stored userId from localStorage
        const userId = localStorage.getItem('userId');

        if (userId) {
            // Track the page visit
            trackVisit(userId, location.pathname);
        }
    }, [location]);

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

    return (
        <>
            {children}
        </>
    );
};

export default PageTracker;
