import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const MyAffiliate = () => {
    const [affiliates, setAffiliates] = useState([]);  // State to store the affiliate data
    const [loading, setLoading] = useState(true);  // Loading state to show a spinner or message while data is being fetched
    const [error, setError] = useState(null);  // To handle errors

    // Fetch affiliate data from the backend
    useEffect(() => {
        axios.post(`${config.API_BASE_URL}/api/affiliate/affiliate_user_list`)  // Use your backend endpoint for fetching affiliate data
            .then(response => {
                setAffiliates(response.data);  // Store affiliate data in state
                setLoading(false);  // Stop loading once data is fetched
            })
            .catch(err => {
                setError('Failed to load affiliates. Please try again later.');  // Set error message if the request fails
                setLoading(false);  // Stop loading
            });
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this AffiliateUser?")) {
          try {
            const response = await axios.delete(
              `${config.API_BASE_URL}/api/affiliate/delete_affiliate/${id}`
            );
            if (response.status === 200) {
              alert(response.data.message);
              // Update the state to remove the deleted trip
              setAffiliates((prevData) => prevData.filter((aff) => aff._id !== id));
            }
          } catch (error) {
            console.error("Error deleting AffiliateUser:", error);
            alert("Failed to delete the AffiliateUser. Please try again.");
          }
        }
      };

    // Display loading spinner or error message
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <h1>My Affiliate</h1>
                    </div>
                    <div className="col">
                        <Link to="/admin/new_affiliate" className='btn btn-success float-end'>Add Affiliate</Link>
                    </div>
                </div>

                {/* Table displaying the affiliate data */}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Company</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through the affiliates data and render each row */}
                        {affiliates.map(affiliate => (
                            <tr key={affiliate._id}>  {/* Assuming `_id` is the unique identifier */}
                                <td>{affiliate.first_name}</td>
                                <td>{affiliate.last_name}</td>
                                <td>{affiliate.phone}</td>
                                <td>{affiliate.email}</td>
                                <td>{affiliate.country}</td>
                                <td>{affiliate.company}</td>
                                <td>{affiliate.website}</td>
                                <td>
                                    <Link className='btn btn-success' to={`/admin/edit_affiliate/${affiliate._id}`}>Edit</Link>&nbsp;&nbsp;
                                    <Link className='btn btn-danger' onClick={() => handleDelete(affiliate._id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAffiliate;
