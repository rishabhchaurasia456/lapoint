import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/config';

const Admin_Included = () => {
    const [tripIncluded, setTripIncluded] = useState([]);

    useEffect(() => {
        const fetchIncluded = async () => {
            try {
                const response = await axios.post(
                    `${config.API_BASE_URL}/api/admin/getall_included`
                );
                const fetchedData = response.data || [];
                setTripIncluded(fetchedData);
                console.log("fetchedData", fetchedData)
            } catch (error) {
                console.error("Error fetching trip levels:", error);
            }
        };

        fetchIncluded();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this trip Included?")) {
          try {
            const response = await axios.delete(
              `${config.API_BASE_URL}/api/admin/delete_included/${id}`
            );
            if (response.status === 200) {
              alert(response.data.message);
              // Update the state to remove the deleted trip
              setTripIncluded ((prevData) => prevData.filter((trip) => trip._id !== id));
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
                        <h1>All Trip Included</h1>
                    </div>
                    <div className="col-6">
                        <Link to="/admin/add/included" className="btn btn-success float-end">
                            Add New Trip Included
                        </Link>
                    </div>
                </div>
                <div className="row p-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Trip Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tripIncluded.map((trip) => (
                                <tr key={trip._id}>
                                    <td>{trip.tripName}</td>
                                    <td>
                                        <Link className="btn btn-primary btn-sm me-2" to={`/admin/edit/included/${trip._id}`}>Edit</Link>
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

export default Admin_Included;