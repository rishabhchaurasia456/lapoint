import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/config';

const Admin_DateRange = () => {
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const response = await axios.post(
          `${config.API_BASE_URL}/api/admin/getall_date_ranges`
        );
        const fetchedData = response.data.getAllTripDateRange || [];
        setTripData(fetchedData);
      } catch (error) {
        console.error("Error fetching trip levels:", error);
      }
    };

    fetchTripData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this trip dates?")) {
      try {
        const response = await axios.delete(
          `${config.API_BASE_URL}/api/admin/delete_date_range/${id}`
        );
        if (response.status === 200) {
          alert(response.data.message);
          // Update the state to remove the deleted trip
          setTripData((prevData) => prevData.filter((trip) => trip._id !== id));
        }
      } catch (error) {
        console.error("Error deleting trip dates:", error);
        alert("Failed to delete the trip dates. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row m-2">
          <div className="col-6">
            <h1>All Trip Levels Days</h1>
          </div>
          <div className="col-6">
            <Link to="/admin/add/dates" className="btn btn-success float-end">
              Add New Date Range
            </Link>
          </div>
        </div>
        <div className="row p-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Trip Name</th>
                <th>Days</th>
                <th>Date Range</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through tripData to render rows */}
              {tripData.map((trip) => (
                <tr key={trip._id}>
                  <td>{trip.tripName}</td>
                  <td>{trip.days}</td>
                  <td>
                    {/* Render each date range */}
                    {trip.dateRanges.map((range, index) => (
                      <div key={range._id}>
                        <p>{`From: ${new Date(range.startDate).toLocaleDateString()} To: ${new Date(range.endDate).toLocaleDateString()}`}</p>
                      </div>
                    ))}
                  </td>
                  <td>
                    <Link className="btn btn-primary" to={`/admin/edit/dates/${trip._id}`}>
                      Edit
                    </Link>&nbsp;
                    <button className="btn btn-danger" onClick={() => handleDelete(trip._id)}>
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

export default Admin_DateRange;
