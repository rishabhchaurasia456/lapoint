import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/config';

const Admin_Package = () => {
    const [tripPackage, setTripPackage] = useState([]);

    useEffect(() => {
        const fetchPackageData = async () => {
            try {
                const response = await axios.post(
                    `${config.API_BASE_URL}/api/admin/getall_package`
                );
                const fetchedData = response.data || [];
                setTripPackage(fetchedData);
                console.log("fetchedData", fetchedData)
            } catch (error) {
                console.error("Error fetching trip levels:", error);
            }
        };

        fetchPackageData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this trip Link?")) {
          try {
            const response = await axios.delete(
              `${config.API_BASE_URL}/api/admin/delete_package/${id}`
            );
            if (response.status === 200) {
              alert(response.data.message);
              // Update the state to remove the deleted trip
              setTripPackage ((prevData) => prevData.filter((trip) => trip._id !== id));
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
                        <h1>All Trip Package</h1>
                    </div>
                    <div className="col-6">
                        <Link to="/admin/add/packages" className="btn btn-success float-end">
                            Add New Trip Package
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
                            {tripPackage.map((trip) => (
                                <tr key={trip._id}>
                                    <td>{trip.tripName}</td>
                                    <td>
                                        <Link className="btn btn-primary btn-sm me-2" to={`/admin/edit/packages/${trip._id}`}>Edit</Link>
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

export default Admin_Package;