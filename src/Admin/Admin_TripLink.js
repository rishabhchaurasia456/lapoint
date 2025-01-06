import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/config';

const Admin_TripLink = () => {
    const [tripLink, setTripLink] = useState([]);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const response = await axios.post(
                    `${config.API_BASE_URL}/api/admin/getall_tripLink`
                );
                const fetchedData = response.data.getallTripLink || [];
                setTripLink(fetchedData);
                console.log("fetchedData", fetchedData)
            } catch (error) {
                console.error("Error fetching trip levels:", error);
            }
        };

        fetchTripData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this trip Link?")) {
          try {
            const response = await axios.delete(
              `${config.API_BASE_URL}/api/admin/delete_triplink/${id}`
            );
            if (response.status === 200) {
              alert(response.data.message);
              // Update the state to remove the deleted trip
              setTripLink((prevData) => prevData.filter((trip) => trip._id !== id));
            }
          } catch (error) {
            console.error("Error deleting trip Link:", error);
            alert("Failed to delete the trip Link. Please try again.");
          }
        }
      };

    return (
        <div>
            <div className="container-fluid">
                <div className="row m-2">
                    <div className="col-6">
                        <h1>All Trip Links</h1>
                    </div>
                    <div className="col-6">
                        <Link to="/admin/add/triplink" className="btn btn-success float-end">
                            Add New Trip Link
                        </Link>
                    </div>
                </div>
                <div className="row p-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Trip Name</th>
                                <th>Link</th>
                                <th>Style</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tripLink.map((trip) => (
                                <tr key={trip._id}>
                                    <td>{trip.tripName}</td>
                                    <td>{trip.path}</td>
                                    <td>{trip.choosestyle && trip.choosestyle[0]}</td>
                                    <td>
                                        <Link className="btn btn-primary btn-sm me-2" to={`/admin/edit/triplink/${trip._id}`}>Edit</Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(trip._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin_TripLink;