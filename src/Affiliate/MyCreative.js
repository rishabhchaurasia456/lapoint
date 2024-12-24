import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const MyCreative = () => {
    const [affiliatesLink, setAffiliatesLink] = useState([]); // State to store the affiliate data
    const [loading, setLoading] = useState(true); // Loading state to show a spinner or message while data is being fetched
    const [error, setError] = useState(null); // Error state for handling API errors

    useEffect(() => {
        axios
            .post(`${config.API_BASE_URL}/api/affiliate/get_all_link`) // Use your backend endpoint for fetching affiliate data
            .then((response) => {
                setAffiliatesLink(response.data); // Store affiliate data in state
                console.log("Fetched affiliate links:", response.data);
                setLoading(false); // Stop loading once data is fetched
            })
            .catch((err) => {
                setError("Failed to load affiliates. Please try again later."); // Set error message if the request fails
                setLoading(false); // Stop loading
            });
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this AffiliateUser?")) {
            try {
                const response = await axios.delete(
                    `${config.API_BASE_URL}/api/affiliate/delete_affiliatelink/${id}`
                );
                if (response.status === 200) {
                    alert(response.data.message);
                    // Update the state to remove the deleted trip
                    setAffiliatesLink((prevData) => prevData.filter((aff) => aff._id !== id));
                }
            } catch (error) {
                console.error("Error deleting AffiliateUser:", error);
                alert("Failed to delete the AffiliateUser. Please try again.");
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading message while data is being fetched
    }

    if (error) {
        return <div>{error}</div>; // Show error message if there was an issue fetching data
    }

    return (
        <div>
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <h1>My Creative</h1>
                    </div>
                    <div className="col">
                        <Link to="/newCreative" className="btn btn-success float-end">
                            Add New Creative
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Affiliate Person</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Link</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {affiliatesLink.map((link) => (
                                <tr key={link._id}>
                                    <td>{link.affiliate_name}</td>
                                    <td>{link.name}</td>
                                    <td>{link.type}</td>
                                    <td>
                                        {/* <a href={link.genrated_link} target="_blank" rel="noopener noreferrer"> */}
                                        {link.genrated_link}
                                        {/* </a> */}
                                    </td>
                                    <td>
                                        <Link to={`/edit/${link._id}`} className="btn btn-primary btn-sm me-2">
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(link._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCreative;
